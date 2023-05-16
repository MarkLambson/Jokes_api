const mongoose = require("mongoose")

const dbname = "jokesdb" //from mongo db or creates it in mongo db
const username = "MarkLambson" //from mongo db,
const password = "H1w3titX2IEK04Sb" //from mongo db

const uri = `mongodb+srv://${username}:${password}@marklcluster.eg2yamc.mongodb.net/${dbname}`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("AI-COM/RESPOND:TRUE//STATUS:ACTIVE//SKYSHOCK-EVENT-IMMINENT"))
    .catch(() => console.log("AI-COM/RESPOND:FALSE//STATUS:INACTIVE//MIDNIGHT-EXIGENT-INITIATED...", err))