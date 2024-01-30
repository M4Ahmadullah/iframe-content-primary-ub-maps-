//Requirements
const http = require("http")
const fs = require('fs')
const port = 3000;

//function for doing anything with server
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type' : 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error File not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    
})


//creating the server and listening
server.listen(port, function(error) {
    if (error) {
        console.log("Something Went Wrong!", error)
    } else {
        console.log("Server is listening on PORT " + port)
    }
})