const Discord = require("discord.js");

const randomPuppy = require('random-puppy');
module.exports.run = async (client, message, args) => {
       if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    var subreddits = [
      'facedownassup',
      'hentaifemdom',
      'assinthong',
      'asstastic'
     
      
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
  aliases: ['Ass', 'ass']
  };
  exports.help = {
  name: "Ass", description: "Shows ass."
  }
