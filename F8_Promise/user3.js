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

function getComment() {
    return new Promise(function(resolve) {
        resolve(comments);
    })
}

function getUserById(userId){
    return new Promise(function(resolve) {
        var result3 = users.filter(function(user) {
            return userId.includes(user.id);
        })
        resolve(result3);
    })
}

getComment()
    .then(function(result1) {
        var result2 = result1.map(function(comment) {
            return comment.user_id;
        })
        return getUserById(result2)
                .then(function(result4) {
                    return {
                        users: result4,
                        comments: result1
                    }
                })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var result5 = data.users.find(function(user) {
                return user.id === comment.user_id;
            })
            html += `<li>${result5.name}: ${comment.comment}</li>`;
        })
        commentBlock.innerHTML = html;
    })