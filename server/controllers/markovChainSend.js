const MarkovChain = require('markovchain');

function markov(req, res) {
	const quotes = new MarkovChain(req.tweets);

	res.send({
		tweet: quotes.start('I').end(9).process()
	});
}

module.exports = markov;