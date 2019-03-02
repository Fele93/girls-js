// API reference available at http://girlsjs.codewise.com:3000/api-docs
const POSTS_ENDPOINT = "http://girlsjs.codewise.com:3000/api/posts";

const newPostBtn = document.querySelector('.new-post-button');
const contentArea = document.querySelector('.new-post-content');

newPostBtn.addEventListener('click', sendNewPost);

fetchPosts();

function sendNewPost() {
    const content = {
        author: 'Me',
        text: contentArea.value
    };

    const reqObj = {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(POSTS_ENDPOINT, reqObj)
        .then(response => response.json())
        .then(post => addPostToHTML(post))
        .then(() => contentArea.value = '')
        .catch(err => {
            alert("Something went terribly wrong when trying to add a post!");
            console.log(err);
        });
}

function fetchPosts() {
    fetch(POSTS_ENDPOINT)
        .then(response => response.json())
        .then(data => data.posts.forEach(addPostToHTML))
        .catch(err => {
            alert("Something went terribly wrong when trying to fetch posts!");
            console.log(err);
        });
}