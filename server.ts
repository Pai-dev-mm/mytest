import http from 'http'
import fs from 'fs'
import cors from 'cors'


const PORT = 8800
const server = http.createServer((req,res) =>{
    const showData = {"id" : 1 , "name" : "Mg Mg"}
    res.writeHead(200 ,"OK Nrr srr",{"Content-Type" : "application/json"})
    res.write(JSON.stringify(showData))
    res.end()
})


server.listen(PORT, () => {console.log(`This server is running on port: ${PORT}`)})
