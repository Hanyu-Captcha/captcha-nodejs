const Fuse = require("fuse.js")
const idiom = require("../data/idiom.json")
const options = {
	keys: [
		"derivation",
		"example",
		"explanation",
		"pinyin",
		"word",
		"abbreviation",
	],
}
const fuse = new Fuse(idiom, options)
async function searchIdiom(query) {
	console.log(await fuse.search(query))
}

module.exports = { searchIdiom }
