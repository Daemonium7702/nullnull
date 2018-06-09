const Discord = require "discord.js");
module.exports.run = (client, message, args) => {
	if(message.author.id = "347885325940424714"){
	const ra = args.join(" ");
		message.channel.send(ra, {tts: true});
	}else{
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, you don\'t have permission to delete or purge messages!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
		const ra = args.join(" ");
		message.channel.send(ra, {tts: true});
	
}};
  exports.conf = {
  aliases: ['tts', 'texttospeech']
  };
  exports.help = {
  name: "tts", description: "This turns a message into a text to speech message."
  }

