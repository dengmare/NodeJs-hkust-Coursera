var express = require('express'),
    morgan = require('morgan'),
    dishRouter = require('./routers/dishRouter'),
    promoRouter = require('./routers/promoRouter'),
    leaderRouter = require('./routers/leaderRouter');

var app = express();

var port = 3000;
var hostname = 'localhost';

app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running on http://${hostname}:${port}/`);
})
