import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>+447441395830</h1>")
})

app.get("/about", (req, res) => {
    res.send("<p>Hello, I am Ahmadullah, Junior Software Developer. Now I am Working on Making Servers Using Node.js</p>")
})

app.listen(port, () => {
    console.log(`Server Started at port ${3000}.`)
})