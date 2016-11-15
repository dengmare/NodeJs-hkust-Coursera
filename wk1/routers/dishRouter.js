var express = require('express'),
    bodyParser = require('body-parser');

var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Send all dishes out');
})
.delete(function(req, res, next){
    res.end('Delete all dishes');
})
.post(function(req, res, next){
    res.end('Add new dish ' + req.body.name + ' with discription: ' + req.body.description);
});

dishRouter.route('/:dishId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Send dish ' + req.params.dishId + ' out');
})
.delete(function(req, res, next){
    res.end('Delete dish ' + req.params.dishId);
})
.put(function(req, res, next){
    res.write('Updating dish ' + req.params.dishId + ':\n');
    res.end('   to ' + req.body.name + ' with description ' + req.body.description);
});


module.exports = dishRouter;
