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
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    })
}

function getUserById(ids) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return ids.includes(user.id);
        })
        resolve(result);
    })
}

getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        return getUserById(userIds) 
            .then(function(user) {
                return {
                    user: user,
                    comment: comments
                }
            })
        }
    )
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';

        data.comment.forEach(function() {
            var user = data.user.find(function(user) {
                return user.id === comments.user_id;
            })
            html += `<li>${user.name}: ${comment.comment}`;
        })
        commentBlock.innerHTML = html;
    })


