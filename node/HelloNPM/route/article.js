/**
 * Created by Admin on 2017-04-28.
 */
var express = require('express');
var router = express.Router();

router.get('/:id', function(request, response) {
    var id = request.params.id;

    var items = [
        {name: 'Lee', job: 'student'},
        {name: 'kim', job: 'teacher'}
    ];

    response.type('text/html');
    response.send('<h1>' + items[id].name + items[id].job +'</h1>');
});

exports.router = router;