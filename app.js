const posts = [{
    author: "Filip Mamcarczyk",
    text: "Czasem nie mam czasu",
    date: "2019-02-22T23:05:01+00:00"
}, {
    author: "Rafal Rumanek",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2019-02-21T11:44:51+00:00"
}, {
    author: "Krzysztof Mikuta",
    text: "There are many variations of passages of Lorem Ipsum available",
    date: "2019-02-21T09:55:22+00:00"
}, {
    author: "Ada Rys",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    date: "2019-02-20T13:21:37+00:00"
},{
    author: "Kacper Sokolowski",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    date: "2019-02-20T13:01:17+00:00"
}];

posts.forEach(addPostToHTML);