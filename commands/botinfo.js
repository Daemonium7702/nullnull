const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("users",`with ${client.users.size}users`)
    .addField("channels",`in ${client.channels.size} channels`)
    .addField("Servers",`in ${client.guilds.size} servers`)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt);

    return message.channel.send(botembed);
  }
exports.conf = {
  aliases: ['Botinfo', 'botinfo']
  };
  exports.help = {
  name: "Botinfo", description: "Displays info on the bot."
  }
