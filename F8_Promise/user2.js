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
    .then(function(result) {
        var userId = result.map(function(comment) {
            return comment.user_id;
        })
        return getUserById(userId)
        .then(function(result1) {
            return {
                users: result1,
                comments: result

            }
        })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';

        data.comments.forEach(function(comment) {
            var result3 = data.users.find(function(user) {
                return user.id === comment.user_id;
            })
            html += `<li>${result3.name}: ${comment.comment}`;
        })
        commentBlock.innerHTML = html;
    })

