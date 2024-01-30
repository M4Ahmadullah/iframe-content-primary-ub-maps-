import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("June 23, 2023");
    const day = today.getDay();

    // console.log(day)

    let type = "a week Day";
    let adv = "its time to work hard";

    if (day == 5) {
        type = "a Weekend";
        adv = "It's time to have Some Fun";
    }

    res.render("index.ejs", 
    {
        dayType: type,
        advice: adv
    })
})

app.listen(port, () => {
    console.log(`Server Started in Port ${port}`)
})