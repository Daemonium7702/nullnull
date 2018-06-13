
	const Discord = require("discord.js");

module.exports.run = async (client, message, args, tools, con) => {
    console.log("help.js works");
        await message.author.send(`Commands: \n\n${client.commands.map(cmd => `\`${cmd.help.name} + ":" + ${cmd.help.description}\``).join(",")}`);
        message.channel.send("Help sent.");
    
}

                exports.conf = {
  aliases: ['Help', 'help']
  };
  exports.help = {
  name: "Help", description: "Ummmmm Sends help?"
  }
	
