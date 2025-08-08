const http = require('http');
const server = http.createServer(function requestListener(req,res){
console.log(req.url,req.method,req.body);


if(req.url==='/'){
  res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>');
res.write('<title>practise page');
res.write('</title>');
res.write('<body> ');
res.write('<a href="/men">men</a><br><br>');
res.write('<a href="/women">women</a>')
res.write('</body>');
res.write('</head>');
res.write('</html>');
return res.end();
}else if(req.url==='/men'){
  res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>');
res.write('<title>men page');
res.write('</title>');
res.write('<body> welcome shit');
res.write('</body>');
res.write('</head>');
res.write('</html>');
return res.end();
}else if(req.url==='/women'){
  res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head>');
res.write('<title>women page');
res.write('</title>');
res.write('<body> hello pretty peeps');
res.write('</body>');
res.write('</head>');
res.write('</html>');
return res.end();

}else{
  res.statusCode=302;
res.setHeader('location','/');
}
});
const PORT = 3001;
server.listen(PORT,()=>{
console.log(`server is running on address http://localhost:${PORT}`);
});