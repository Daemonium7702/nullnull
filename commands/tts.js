const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
		const ra = args.join(" ");
		message.channel.send(ra, {tts: true});
	
		};
  exports.conf = {
  aliases: ['tts', 'texttospeech']
  };
  exports.help = {
  name: "tts", description: "This turns a message into a text to speech message."
  }

