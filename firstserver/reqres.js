const http = require('http');
 const server = http.createServer(function requestListener(req,res){
  console.log(req.url , req.method, req.headers);
   
  res.setHeader('Content-Type' , 'text-html');
  res.write('<html>');
  res.write('<head><title>second server</title></html>');
  res.write('<body>hello second server</body>');
  res.write('</html>')
  return res.end();
  
});

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
});
