const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
}, { timestamps: true });

const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;