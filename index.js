// here http for the creatron of htth server
const  validStr   = require('./function.js')

const http = require('http')

const port = 2000
// this server  take any req and respond acco tot this

const server = http.createServer(async(req,res)=>{
    console.log("recieved request") 
    if(req.method == "GET"){
        res.end("this is a get request")
    }
    if(req.method == "POST"){
        res.end("this is a POST request")
    }
});
// listen reat port 2000
server.listen(port,()=>{
    console.log(`server is listening at port no ${port}`)
}) ;

  