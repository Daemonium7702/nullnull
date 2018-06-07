	module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
	let servers = client.guilds.filter(g => g.members.has(user.id));
	var message2 = "```";
	for (var i = 0; i < servers.map(g => g.name).length; i++) {
		var temp = (i === 0 ? `Guilds in common with ${user.tag}\n` : "") + (i + 1) + ". " + servers.map(g => g.name)[i] + "\n";
		if ((message2 + temp).length <= 2000 - 3) {
			message2 += temp;
		} else {
			message2 += "```";
			message.channel.send(message2);
			message2 = "```";
		}
	}
	};
	message2 += "```";
	message.channel.send(message2);
  exports.conf = {
  aliases: ['Prefix', 'prefix']
  };
  exports.help = {
  name: "Prefix", description: "Sets Prefix."
  }
