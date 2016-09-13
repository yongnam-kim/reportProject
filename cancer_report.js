var express = require('express');

var app = express();

app.set('port', process.env.PORT ||3333);

app.get('/', function(req,res){
    res.type('text/plain');
    res.send('Cancer Report');
});

app.get('/about',function(req,res){
    res.type('text/plain');
    res.send('About Cancer Report');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');

})

//custom 500
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 -Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express Started on localhost:'_app.get('port') + ';press Ctr-C to terminate.');

});
