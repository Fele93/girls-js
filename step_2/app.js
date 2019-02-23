// API reference available at http://girlsjs.codewise.com:3000/api-docs
const POSTS_ENDPOINT = "http://girlsjs.codewise.com:3000/api/posts";

fetch(POSTS_ENDPOINT)
    .then(response => response.json())
    .then(data => data.posts.forEach(addPostToHTML))
    .catch(err => {
        alert("Something went terribly wrong when trying to fetch posts!")
        console.log(err);
    });
