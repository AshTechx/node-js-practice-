const http = require('http');
 const server = http.createServer(function requestListener(req,res){
  console.log(req.url,req.method,req.headers);
  
  if(req.url ==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<title><head>rotuing</head></title>');    
    res.write('<body><h1>Home page</body>');    
    res.write('</html>');
return res.end();

  }else if(req.url ==='/second'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<title><head>secondpage</head></title>');    
    res.write('<body><h1>hi there</body>');    
    res.write('</html>');
 return res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<title><head>else</head></title>');    
    res.write('<body><h1>sorry!</body>');    
    res.write('</html>');
 return res.end();
  }
 
});
const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
});