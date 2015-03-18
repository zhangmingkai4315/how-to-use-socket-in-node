/**
//跟操作系统相关的代码

//1. process
//任何一个node 进程都共享一个process 实例，并且他不是一个eventEmitter实例
//设定DEBUG的级别 可直接调用DEBUG=1 node OStools.js或者指定级别

var debug;
//process.env.DEBUG=1;
if(process.env.DEBUG){
	debug=function(data){
		console.error(data);
	};
}else{
	debug=function(){};
}



debug('this is a debug call');
debug('hell world');


//设定监听事件exit 和uncaughtError,在推出之前捕获错误！

process.on('exit',function(){
	console.log('Process has stopped! ');
})

process.on('uncaughtException',function(err){
	console.error('Got uncaughtException:',err.message);
	process.exit('1');
});

throw new Error("an uncaughtException!");

//设定捕获的信号可以为：unix信号系统中的任何一个。


// process.on('SIGINT',function(){
// 	console.log('Got Ctrl+c');
// 	process.exit('1');
// });
**/

//2.File system ! 
//file watcher

var  fs=require('fs');
fs.watchFile('/var/log/system.log',function(curr,prev){
	var now =new Date().toUTCString();
	if(curr.mtime.getTime()!=prev.mtime.getTime()){
		console.log('system log has been changed'+now);
	}
});