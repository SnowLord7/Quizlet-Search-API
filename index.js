function respond(phrase) {
	let word = phrase,
		wordLang = 'en',
		prefix = '',
		prefixLang = 'en',
		limit = 100,
		url = `https://quizlet.com/webapi/3.2/suggestions/definition?limit=${limit}&word=${word}&defLang=${prefixLang}&localTermId=-1&prefix=${prefix}&wordLang=${wordLang}`;

	fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {
			let resp = data.responses[0].data.suggestions.suggestions;
			resp.length ? console.log(word, '-', resp[Math.floor(Math.random() * resp.length)].text) : console.log('):');
		});
};

respond('script kiddie');
