const fetch = require('node-fetch')

async function doFetch() {
	const resp = await fetch('https://catfact.ninja/fact')
	const data = await resp.json()
	return data
}
module.exports = doFetch
