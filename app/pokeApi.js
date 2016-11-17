"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const pokeDB = require("./pokeDB.json")

// private
function catchPokemon(pokeId) {
    return pokeDB.find(poke => poke.id === pokeId)
}

// public api
router.get("/", (request, response) => {
    response.json(pokeDB)
})

// export router
module.exports = router

