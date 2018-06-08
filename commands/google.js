const GoogleSearch = require('google-search');
module.exports.run = (client, message, args) => {
console.log(' test');
var googleSearch = new GoogleSearch({
  key: 'AIzaSyAMCG9UowW_qxd5p97KQHarUl5wzAYSFYs',
  cx: '008530651077224882035:auhfoaqdh-o'
});

googleSearch.build({
  q: "",
  start: 5,
  fileType: "pdf",
  gl: "US", //geolocation,
  lr: "lang_en",
  num: 10, // Number of search results to return between 1 and 10, inclusive
  siteSearch: "google.com" // Restricts results to URLs from a specified site
}, function(error, response) {
console.log(response);
console.log('test v2.0');
});
}
 
  exports.conf = {
  aliases: ['Google', 'google']
  };
  exports.help = {
  name: "Google", description: "Googles Input."
  }
