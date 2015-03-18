//访问telnet的文字版星球大战！ 



var net=require('net');
var host="";
var port=23;
var socket=net.connect(port,host);
socket.on('connect',function(){
	process.stdin.pipe(socket);
	socket.pipe(process.stdout);
	process.stdin.resume();
});

socket.on('end',function(){
	process.stdin.pause();
});
