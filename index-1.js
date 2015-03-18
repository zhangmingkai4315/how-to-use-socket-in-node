//这个例子主要是使用Socket.io来进行服务器数据的实时推送

var app=require("http").createServer(handler);
var io=require("socket.io").listen(app);

var fs=require("fs");
var html=fs.readFileSync('index-1.html','utf8');


function handler(req,res){

res.setHeader("Content-Type","text/html");
res.setHeader('Content-Length',Buffer.byteLength(html,'utf8'));
res.end(html);
}

function tick(){


	var now =new Date().toUTCString();
	io.sockets.send(now);
	//console.log(now);
}


setInterval(tick,1000);

app.listen(3000);


