const doFetch = require('../../src/fetch-consumer')

describe('fetch-consumer', () => {
	it('fetches', async () => {
		const fetched = await doFetch();
		console.log(fetched)
	})
})
