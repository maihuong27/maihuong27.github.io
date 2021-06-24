var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(response => response.json())
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2> ${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        document.getElementById('fetch').innerHTML = htmls;
    })
    .catch(function(err) {
        console.log("Co loi");
    })