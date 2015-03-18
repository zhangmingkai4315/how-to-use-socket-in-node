var fs=require("fs");
var url=require("url");
var http=require("http");
var path=require("path");
var express=require("express");


var app=express();
var server=http.createServer(app);
var io=require("socket.io").listen(server);

console.log("point");
var root=__dirname;
//console.log(root);
app.use(express.static(root));

app.use(function(req,res,next){
	req.on("static",function(){
		var file=url.parse(req.url).pathname;
		console.log(file);
		var mode='stylesheet';
		if(file[file.length-1]=='/'){
			file+='index-2.html';
			mode='reload';
			console.log(file+mode);
		}
		createWatcher(file,mode);
	});
	next();
});

var watchers={};

function createWatcher(file,event){
	var absolute=path.join(root,file);
	console.log(absolute);
	if(watchers[absolute]){
		return;
	}
	fs.watchFile(absolute,function(curr,prev){
		if(curr.mtime!==prev.mtime){
			io.socket.emit(event,file);
			console.log(event+file);

		}
	});
	watchers[absolute]=true;
}


server.listen(8080);

