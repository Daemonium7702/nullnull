const randomPuppy = require('random-puppy');
module.exports.run = async (client, message, args) => {
       if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    var subreddits = [
      'hentaibondage',
      'Bondage',
      'Dominated'
     
      
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4k", client.user.avatarURL)
                .setFooter("xD")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}
  exports.conf = {
  aliases: ['Bond', 'bond']
  };
  exports.help = {
  name: "Bond", description: "B-b-b-bondage."
  }
