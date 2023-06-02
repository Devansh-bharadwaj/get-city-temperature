const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
var hbs = require('hbs')


app.set('view engine', 'hbs');
// app.use(express.static('.'));
// const static_path = path.join(__dirname, "../public");
app.use(express.static(__dirname + '/public'));
const partial_path = path.join(__dirname, "./views/partials");
hbs.registerPartials(partial_path);
// const static_about_path = path.join(__dirname, "../public/about");
// app.use(express.static(static_path));
app.get("/", (req, res) => {
    res.render('index');
})

app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("*", (req, res) => {
    res.render("404error");
})

app.listen(port, () => {
    console.log(`This app is running on ${port}.`);
})