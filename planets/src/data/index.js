const axios = require("axios")

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Planet")
    return results.data
  },

  create: async () => {
    throw Error("Error on load planets from DB")
  }

}