const http = require("http")

const server = http.createServer((request,response) => {
     const url = request.url 
     let message = null 
     if (url === "/"){
         message = "Hello world"
     }else if(url === "/pizza"){
        message = "This is your pizza" 
     }else if (url === "/home"){
        message = "Welcome home"
     } else if (url === "/about"){
        message = "Welcome to About Us"
     } else if (url === "/node"){
        message = "Welcome to my Node Js project"
     }else{
        message = "Page Not Found"
     }

     response.writeHead(200, { "Content-Type": "text/html" })
     response.end(message)
})

module.exports =  server

