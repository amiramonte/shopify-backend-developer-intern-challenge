const path = require("path");
const express = require("express");
const sequelize = require("./config/configuration");
const controllers = require("./controllers");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(controllers);

app.listen(PORT, () => {
    sequelize.sync({ force: false });
    console.log(`App listening on port ${PORT}!`);
});
