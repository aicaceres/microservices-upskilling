const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)

module.exports = {
  Character : conn.model("Character", require("./shemas/characterSchema")),
  Film : conn.model("Film", require("./shemas/filmSchema")),
  Planet : conn.model("Planet", require("./shemas/planetSchema")),
}