'use strict';

var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


var app = express();

const posts = [{
    author: "Filip Mamcarczyk",
    text: "Czasem nie mam czasu",
    date: "2019-02-22T23:05:01+00:00",
    id: 5
}, {
    author: "Rafal Rumanek",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2019-02-21T11:44:51+00:00",
    id: 4
}, {
    author: "Krzysztof Mikuta",
    text: "There are many variations of passages of Lorem Ipsum available",
    date: "2019-02-21T09:55:22+00:00",
    id: 3
}, {
    author: "Ada Rys",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    date: "2019-02-20T13:21:37+00:00",
    id: 2
},{
    author: "Kacper Sokolowski",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    date: "2019-02-20T13:01:17+00:00",
    id: 1
}];

let postsCount = posts.length;


//rest API requirements
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//middleware for create
var getPosts = function (req, res, next) {
    res.send(posts);
    next();
};
var createPost = function (req, res, next) {
    var reqBody = req.body;
    if (!reqBody.author) {
        res.status(400);
        res.send({errorMessage: "You need to provide post author"});
    }
    else if (!reqBody.text) {
        res.status(400);
        res.send({errorMessage: "You need to provide post text"});
    }
    else {
        let newPost = {
            author: reqBody.author,
            text: reqBody.text,
            date: new Date().toISOString(),
            id: ++postsCount
        };
        posts.unshift(newPost);
        res.send(newPost);
    }
    next();
};

var updatePost = function (req, res, next) {
    var reqBody = req.body;
    if (!reqBody.author) {
        res.status(400);
        res.send({errorMessage: "You need to provide post author"});
    }
    else if (!reqBody.text) {
        res.status(400);
        res.send({errorMessage: "You need to provide post text"});
    }
    else if (!isValidId(req.params.id)) {
        res.status(400);
        res.send({errorMessage: "You need to provide proper post ID"});
    }
    else {
        const post = posts.find(post => post.id == req.params.id);
        if (!post) {
            res.status(400);
            res.send({errorMessage: `Post with ID ${req.params.id} not found`});
        }
        else {
            post.author = reqBody.author;
            post.text = reqBody.text;
            post.modified = true;
            res.send(post);
        }
    }
    next();
};

var deletePost = function (req, res, next) {
    if (!isValidId(req.params.id)) {
        res.status(400);
        res.send({errorMessage: "You need to provide proper post ID"});
    }
    else {
        const post = posts.find(post => post.id == req.params.id);
        if (!post) {
            res.status(400);
            res.send({errorMessage: `Post with ID ${req.params.id} not found`});
        }
        else {
            posts.splice(posts.indexOf(post), 1);
            res.send({});
        }
    }
    next();
};

var getPost = function (req, res, next) {
    if (!isValidId(req.params.id)) {
        res.status(400);
        res.send({errorMessage: "You need to provide proper post ID"});
    }
    else {
        const post = posts.find(post => post.id == req.params.id);
        if (!post) {
            res.status(400);
            res.send({errorMessage: `Post with ID ${req.params.id} not found`});
        }
        else {
            res.send(post);
        }
    }
    next();
};

router.route('/posts')
    .post(createPost)
    .get(getPosts);

router.route('/posts/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

app.listen(3000);
module.exports = app;

function isValidId(requestedId) {
    const id = parseInt(requestedId);
    return id && id == requestedId;
}