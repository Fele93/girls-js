function addPostToHTML(post) {
    const container = document.createElement("div");
    container.className = "post";

    const img = document.createElement("img");
    img.setAttribute("src", "src/img/chinese-duck.png");

    const author = document.createElement("div");
    author.className = "author";
    author.innerText = post.author;

    const text = document.createElement("div");
    text.className = "text";
    text.innerText = post.text;

    const date = document.createElement("div");
    date.className = "date";
    const dateObject = new Date(post.date);
    date.innerText = dateObject.toLocaleString();

    container.appendChild(img);
    container.appendChild(author);
    container.appendChild(text);
    container.appendChild(date);

    document.querySelector("#posts").appendChild(container);
}