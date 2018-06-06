module.exports.run = async (client, message, args) => {
    ///change const to let?///
	const annoyingmsg = args.join(" ");
	    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Embedded message!")
    .setColor("#15f153")
    .addField("Message:", annoyingmsg)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    message.delete().catch(O_o=>{});
  message.channel.send(reportEmbed);
}
  exports.conf = {
  aliases: ['Magicify', 'magicify']
  };
  exports.help = {
  name: "Magicify", description: "Turns your message into an embed."
  }
