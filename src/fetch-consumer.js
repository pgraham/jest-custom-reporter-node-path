const fetch = require('node-fetch');

async function doFetch() {
	return await fetch('google.com');
}
module.exports = doFetch
