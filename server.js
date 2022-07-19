const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = 3001;
const app = express();

//Not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('Social-Network-API')
  ? cwd.split('/Social-Network-Api')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server for${activity} running on port ${PORT}!`)
    })
})