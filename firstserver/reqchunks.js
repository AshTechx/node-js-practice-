const fs = require('fs');
const { url } = require('inspector');
const requesthandler = (req, res) => {
  console.log(req.headers, req.body, req.method);

  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('file writing');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="storing" method="POST">');
    res.write('<input name="username" placeholder="enter the name" required>');
    res.write('<label for="male">male</label>');  
    res.write('<input type="radio" name="gender" id="male" value="male" required/>');
    res.write('<label for="female">female</label>'); 
    res.write('<input type="radio" name="gender" id="female" value="female" required/>');
    res.write('<button>submit</button');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === "/second") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('file writing');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>hello welcome</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); // 
  } else if (req.url.toLowerCase() === "/storing" && req.method == "POST") { 
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
  
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const bodyObject ={};
      for(const[key,value]of params.entries()){
bodyObject[key]=value;
      };
      console.log(bodyObject);
      fs.writeFileSync('user-text',JSON.stringify(bodyObject));
    });
  
  };
};

module.exports = requesthandler;
  