//这是一个debug的例子，告诉你怎样使用比较简单的调试工具
//1 console
var test="world";

console.time("myloop");
for(var i =0; i<10000000;i++){
   i++;
}

console.timeEnd('myloop');


//output :myloop: 6ms

console.trace();

//output:
// Trace
//     at Object.<anonymous> (/Users/zhangmingkai/Desktop/Node/how to use socket in Node/howtodebug.js:15:9)
//     at Module._compile (module.js:460:26)
//     at Object.Module._extensions..js (module.js:478:10)
//     at Module.load (module.js:355:32)
//     at Function.Module._load (module.js:310:12)
//     at Function.Module.runMain (module.js:501:10)
//     at startup (node.js:129:16)
//     at node.js:814:3



var http=require("http");
function handleRequest(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello world');

}

var i=100;
http.createServer(function(req,res){
  debugger;
  watch("req.header['user-agent']");
  i++;
  handleRequest(req,res);
}).listen(1337);
console.log('Server is running ..');

//使用node debug howtodebug.js启动后 运行时执行next 或者c 不断的前进

