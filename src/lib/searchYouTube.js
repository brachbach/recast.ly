var searchYouTube = (options, callback) => {
  // options -> key, query, max

  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video'
  }, result => { callback(result.items); }, 'json');
};

window.searchYouTube = searchYouTube;
