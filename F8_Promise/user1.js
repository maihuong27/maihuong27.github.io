var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        comment: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        comment: 'Vua ra xong em oi!!'
    }
]

function getComments() {
    return new Promise(function(resolve) {
        resolve(comments);
    })
}

function getUserById(userId) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userId.includes(user.id);
        })
        resolve(result);
    })
}

getComments()
    .then(function(comments) {
        var userId = comments.map(function(comment) {
            return comment.user_id;
        })
        return getUserById(userId)
                .then(function(users) {
                    return {
                        users: users,
                        comments: comments
                    }
                })
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            })
            html += `<li>${user.name} : ${comment.comment} </li>`;
        }) 
        commentBlock.innerHTML = html;
    })