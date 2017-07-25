var express=require('express');
var app=express();
//引擎
var handlebars=require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');//引擎

//app.set('port',process.env.port||3000);//端口
app.use(express.static(__dirname+'/public'));//静态文件

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

app.get('/', function(req, res) {
	console.log('222');
    res.render('home');
});
app.get('/about', function(req, res){
    var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});
// 404 catch-all 处理器（中间件）
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

app.listen(8002,function () {
	console.log('8002')
	//console.log('express started on http://locahhost:' + app.get('port')+';');
});十大啊啊啊啊啊啊啊啊