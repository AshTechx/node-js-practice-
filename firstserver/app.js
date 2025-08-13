const http = require('http');

const requesthandler = require('./reqchunks');
const server = http.createServer(requesthandler);



const PORT = 3001;
server.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
})