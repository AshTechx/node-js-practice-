const http = require('http');
const fs = require('fs');
const server = http.createServer(function requestListener(req,res){
  console.log(req.url , req.method , req.headers);
  if(req.url ==='/'){
    res.setHeader('Content-Type' ,'text/html' );
    res.write('<html>');    
    res.write('<head><title>home</title></head>');    
    res.write('<body>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter you name"><br><br>');
    res.write('<label for="gender">Gender</label><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="sex" value="male"/>');
    res.write('<label for="female">Female</label>');
     res.write('<input type="radio" id="female" name="sex" value="female"/><br>');
      res.write('<button type="submit"> submit</button>');
    res.write('</form>');    
    res.write('</body>');    
    res.write('</html>');    
return res.end();
  }
  else if(req.url.toLowerCase() ==="/submit-details"  && req.method=="POST"){
    fs.writeFileSync('user-text' , 'aashiya');
    res.statusCode=302;
    res.setHeader('Location' , '/');
  
    return res.end();
  }

res.setHeader('Content-Type' ,'text/html' );
  res.write('<html>')
  res.write('<head><title>page</title></head>');
  res.write('<body>sorry bhai</body>');
  res.write('</html>');
  return res.end();

});
const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server is running on address http://localhost:${PORT}`)
});