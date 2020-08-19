const express = require("express");
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
//Heroku config para en el caso que no se use el puerto 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Directorio que va a contener todos mis parciales
hbs.registerPartials(__dirname + "/views/partials");
//EXPRESS HBS engine
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home", {
        nombre: "ezequiel pAnI",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
