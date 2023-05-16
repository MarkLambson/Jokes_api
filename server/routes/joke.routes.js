const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    // all jokes
    app.get("/api/jokes", JokeController.allJokes);

    // create one joke
    app.post("/api/jokes", JokeController.createJoke);

    // get one joke
    app.get("/api/jokes/:id", JokeController.oneJoke);

    // update one joke
    app.put("/api/jokes/:id", JokeController.updateJoke);

    // delete one joke
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}