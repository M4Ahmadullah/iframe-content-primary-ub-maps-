//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".

import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;;
var userIsAuthorized = false;
app.use(bodyParser.urlencoded({ extended: true }))


function passwordGenerator(req, res, next) {
    const password = req.body["password"];
    if(password == "ILoveProgramming") {
        userIsAuthorized = true; 
    } else {
        console.log("The Password is Incorrect!");
        userIsAuthorized = false;
    }
    next();
}
app.use(passwordGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(userIsAuthorized) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.sendFile(__dirname + "/public/404.html")
    }
})

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, (req, res) => {
    console.log(`Server Started in port ${port}`)
})

//The password is ILoveProgramming
