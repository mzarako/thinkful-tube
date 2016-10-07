$(document).ready(function() {

	searchKeyword("kittens");

	$('form').submit(function(e) {
	e.preventDefault();
	var userInput = $('#userInput').val();
	searchKeyword(userInput);
	});
});

function searchKeyword(wordToFind) {
	var para = {
		part: 'snippet',
		key: 'AIzaSyDyKbpXifTaQUi1yhKKZErJeixCw_fT_Qs',
		q: wordToFind,
		maxResults: 24,
		type: 'video',
	};
	var Yurl = "https://www.googleapis.com/youtube/v3/search";
	$.getJSON(Yurl, para, function(data) {
		displayResults(data.items);
	})
}


function displayResults(results) {
	var elements = "";
	$('main').children().remove();
	$.each(results, function(index, value) {
		elements += '<table><tr><td><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="_blank"><img src="' + 
		value.snippet.thumbnails.medium.url + '"></td></tr><tr><td class="video-link"><a href="https://www.youtube.com/watch?v=' + 
		value.id.videoId + '" target="_blank"><p class="video-title">' + value.snippet.title + '</p></td></tr></table>';
	});
	$('main').append(elements);
}
