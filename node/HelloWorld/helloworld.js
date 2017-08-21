/**
 * Created by Admin on 2017-04-28.
 */

/*
 node js 가 기본으로 제공하는것 중에 http라는 모듈을 가져 오겠다.
 http 모듈은 브라우저와 연동, 서버를 만들어준다. 자바로치면 톰캣과 같은 역할을 한다.
 언어 자체가 서버를 포함 하고 있는 특이한 케이스(node js)
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var ejs = require('ejs');

/*
 HttpServer생성.
 createServer: request가 들어올수 있는 서버를 만든다음에 콜백 함수를 만든다.
 여기 있는 콜백은 후처리의 의미도 있지만 이벤트를 처리 해라 라는 의미도 있다.
 여기서의 function : reuqset가 있으면 이 작업을 수행해라
 */
var server = http.createServer(function (request,response) {
    /*response.writeHead(200,{'Content-Type':'text/html'});
     response.end('<h1>Hello World!</h1>');*/

    var pathName = url.parse(request.url).pathname;
    console.log(pathName);

    if (pathName == '/') {
        fs.readFile('HelloWorld.html', function(err, data) {
            console.log(err);
            console.log(data.toString());
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
    else if (pathName == '/login') {
        fs.readFile('login.html', function(err, data) {
            console.log(err);
            console.log(data.toString());
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
    else if (pathName == '/my') {
        fs.readFile('ejs/my_page.ejs', 'utf8', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(ejs.render(data, {
                title: 'My page',
                name: 'Lee Ji Soo'
            }));
        });
    }
    else if (pathName == '/article') {
        fs.readFile('ejs/article.ejs', 'utf8', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(ejs.render(data, {
                title: 'My page',
                list: [
                    {number: 1, subject: 'Hello!'},
                    {number: 2, subject: 'Node.js'},
                    {number: 3, subject: 'Hello, Node.js!'}
                ]
            }));
        });
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('<h1>Page Not Found!</h1>');
    }

});

/*
 HttpServer 실행
 반드시 listen을 해야 서버가 만들어준다. 보통 3000코드를 쓴다.
 여기서의 function은 콜백함수이다. listen한 다음에(후 처리)
 */
server.listen(3000,function () {
    console.log('Server running at http://localhost:3000');
});