var express = require('express'),
    bodyParser = require('body-parser');

var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Get all leaders');
})
.delete(function(req, res, next){
    res.end('Delete all leaders');
})
.post(function(req, res, next){
    res.end('Add new leader ' + req.body.name + ' with discription: ' + req.body.description);
});

leaderRouter.route('/:leaderId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Send leaders ' + req.params.leaderId + ' out');
})
.delete(function(req, res, next){
    res.end('Delete leaders ' + req.params.leaderId);
})
.put(function(req, res, next){
    res.write('Updating leader ' + req.params.leaderId + ':\n');
    res.end('   to ' + req.body.name + ' with description ' + req.body.description);
});


module.exports = leaderRouter;
