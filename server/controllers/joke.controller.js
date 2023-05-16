//import jokesbd schema
const Jokes = require("../models/joke.model")

// all jokes
module.exports.allJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => { res.json({ results: allJokes }) })
        .catch(err => res.json({ err: err }))
}

//create one joke
module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then((newJoke) => { res.json({ results: newJoke }) })
        .catch(err => res.json({ err: err }))
}

// get one joke
module.exports.oneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => { res.json({ results: oneJoke }) })
        .catch(err => res.json({ err: err }))
}

// update one joke
module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => { res.json({ results: updatedJoke }) })
        .catch(err => res.json({ err: err }))
}

// delete one joke
module.exports.deleteJoke = (req, res) => {
    Jokes.findOneAndDelete({ _id: req.params.id })
        .then(deletedJoke => { res.json({ results: deletedJoke }) })
        .catch(err => res.json({ err: err }))
}