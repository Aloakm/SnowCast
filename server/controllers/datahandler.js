const config = require('../config');
const axios = require('axios');
const ROOT_URL = 'http://api.worldweatheronline.com/premium/v1/ski.ashx?';

exports.fetchData = function(req, res, next) {
	var {loc} = req.params
	getCoordinates(loc).then(coord => {
		console.log(coord)
		return APIfetch(`${coord.lat},${coord.lon}`, 7, 'yes', 'json')
	}).then(response => {
			res.send(response.data.data)
	})
}


function APIfetch(location, days, includeLoc, format) {
	var requestURL = `${ROOT_URL}q=${location}&key=${config.API_KEY}&num_of_days=${days}&includeLocation=${includeLoc}&format=${format}`
	return axios.get(requestURL)
}

function getCoordinates(location) {
	const FREE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY_FREE}`;
	const url=`${FREE_URL}&q=${location}`
	return axios.get(url).then(response=>response.data.city.coord)
}