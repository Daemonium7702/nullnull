const GoogleSearch = require('google-search');
var google = require('google')
module.exports.run = (client, message, args) => {
if (message.author.id != "347885325940424714"){
 return}else{
 
google.resultsPerPage = 3
var nextCounter = 0
 const magic = args.join(' ')
google(magic, function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; i++) {
    var link = res.links[i];
    message.channel.send(link.title + ' - ' + link.href)
  }
 

})
}
}
  exports.conf = {
  aliases: ['Google', 'google']
  };
  exports.help = {
  name: "Google", description: "Googles Input."
  }
