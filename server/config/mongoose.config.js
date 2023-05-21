const mongoose = require("mongoose")

const dbname = process.env.ATLAS_DATABASE //from mongo db or creates it in mongo db
const username = process.env.ATLAS_USERNAME //from mongo db,
const password = process.env.ATLAS_PASSWORD //from mongo db

const uri = `mongodb+srv://${username}:${password}@marklcluster.eg2yamc.mongodb.net/${dbname}`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("AI-COM/RESPOND:TRUE//STATUS:ACTIVE//SKYSHOCK-EVENT-IMMINENT"))
    .catch(() => console.log("AI-COM/RESPOND:FALSE//STATUS:INACTIVE//MIDNIGHT-EXIGENT-INITIATED...", err))