const express = require("express");
const app = express();

const port = process.env.ATLAS_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongoose config files here
require("./config/mongoose.config")

//routes folder link here
const Routes = require("./routes/joke.routes");
Routes(app);

app.listen(port, () => console.log(`Sir, we've made contact! Brodcasting feed to: ${port}`))