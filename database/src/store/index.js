const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model("Character", require("./shemas/characterSchema"))
const Film = conn.model("Film", require("./shemas/filmSchema"))
const Planet = conn.model("Planet", require("./shemas/planetSchema"))
