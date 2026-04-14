
const fs = require("fs")

const route = (request, response) => {
    const url = request.url 
      const method = request.method 
      if (url === "/"){
            if(!fs.existsSync("text2.txt")){
                 console.log("file create nahi tha file  create ho rah hain")
                 fs.writeFileSync("text2.txt", "no message yet")
            }


            fs.readFile("text2.txt", "utf-8", (err, data) => {
                 if (err){
                     console.log("error coming while reading file")
                 }else{
                    response.statusCode = 200
                    response.setHeader("Content-Type", "text/html")
                    response.end(
                        `
                          <p>message: ${data}</p>
                          <form action="/message" method="POST"> 
                            <label>name: </label>
                            <input type="text" name="message" /> 
                            <button type="submit"> Add </button>
                          </form>
                        `
                    )
                 }
            })


      }else if (url === "/message"){
         let body = ''
         request.on("data", (chunk) => {
            console.log(chunk)
            body += chunk.toString()
         })

         request.on("end", ()=>{
            fs.writeFile("text2.txt", body, (err) => {
               
                if(err){
                   console.log("error coming during the creating file")
                }else{
                    response.statusCode = 302 
                    response.setHeader("Location", "/") 
                    response.end()
                    

                } })
         })
      }
}

module.exports = route