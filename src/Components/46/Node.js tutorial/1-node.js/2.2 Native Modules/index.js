const fs = require("fs")

// fs.writeFile("message.txt", "Hello from NodeJS!" ,(error) => {
//     if(error) throw error;
//     console.log("The File has been Saved!") 
// });

fs.readFile('./message.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})