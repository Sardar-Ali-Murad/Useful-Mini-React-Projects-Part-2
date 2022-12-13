const optionsForCoins = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a6a14f906msh85ed0e73a2ad273p120c4fjsn8cfd1188c678',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const optionsForNews = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '1a6a14f906msh85ed0e73a2ad273p120c4fjsn8cfd1188c678',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};


export {optionsForCoins,optionsForNews}