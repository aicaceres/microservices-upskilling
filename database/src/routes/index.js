const { Router } = require("express")
const store = require("../store")

const router = Router()

router.get("/:model", async (req, res) => {
  const { model } = req.params
  const response = await store[model].getList()
	res.status(200).json(response)
})

router.get("/:model/:id", async (req, res) => {
  const { model, id } = req.params
  console.log(id)
	const response = await store[model].get(id)
	res.status(200).json(response)
})

module.exports = router
