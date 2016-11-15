var express = require('express'),
    bodyParser = require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Get all promotions');
})
.delete(function(req, res, next){
    res.end('Delete all promotions');
})
.post(function(req, res, next){
    res.end('Add new promotion ' + req.body.name + ' with discription: ' + req.body.description);
});

promoRouter.route('/:promoId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Send promotions ' + req.params.promoId + ' out');
})
.delete(function(req, res, next){
    res.end('Delete promotions ' + req.params.promoId);
})
.put(function(req, res, next){
    res.write('Updating promotion ' + req.params.promoId + ':\n');
    res.end('   to ' + req.body.name + ' with description ' + req.body.description);
});


module.exports = promoRouter;
