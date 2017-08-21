/**
 * Created by Admin on 2017-04-28.
 */
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// 서버를 생성함
const app = express();

app.use(express.static(__dirname + '/static/img'));

let index = 0;
const items = [
    {'subject' : 'Test1', 'content' : 'Test1', 'id' : index++},
    {'subject' : 'Test2', 'content' : 'Test2', 'id' : index++}
];

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response) {
    fs.readFile('route/memo.ejs', 'utf8',function(err, data) {
        response.type('text/html');
        response.end(ejs.render(data, {
            items : items // Key : Data
        }));
    });
});

app.get('/new', function(request, response) {
    fs.readFile('route/newMemo.ejs', function(err, data) {
        response.type('text/html');
        response.send(data);
    });
});

app.post('/new', function (request, response) {
    let subject = request.body.subject;
    let content = request.body.content;
    content = content.replace(/\n/gi, '<br/>');

    const item  = {}; // 객체 리터럴을 만드는 방법
    item.subject = subject;
    item.content = content;
    item.id = index++;

    items.push(item);

    response.redirect('/');
});

app.get('/memo/:id', function (request, response){
    let id = request.params.id;
    fs.readFile('route/memo.ejs', 'utf8',function(err, data) {
        response.type('text/html');
        response.end(ejs.render(data, {
            items : items, // Key : Data
            id : id
        }));
    });
});

app.get('/memo/delete/:id', function (request, response) {
   let id = request.params.id;
   items.splice(id, 1);

   remakeItems(id);

   response.redirect('/');
});

app.post('/memo/update/:id', function (request, response) {
    let id = request.params.id;

    items[id].subject = request.body.subject;
    items[id].content = request.body.content;

    response.redirect('/');
});

app.use(function(request, response) {
    response.type('text/html');
    response.sendStatus(404);
});

app.listen(3000, function() {
    console.log('Server Running at http://localhost:3000');
});

function remakeItems(removeIndex) {
    for (let i in items) {
        if (i >= removeIndex) {
            items[i].id--;

        }
    }
    index--;
}