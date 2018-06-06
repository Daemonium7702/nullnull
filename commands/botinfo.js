module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
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
