module.exports.run = {client, message, args) => {
if(command === "tts"){
		const ra = args.join(" ");
		message.channel.send(ra, {tts: true});
	};
  exports.conf = {
  aliases: ['tts', 'texttospeech']
  };
  exports.help = {
  name: 'tts", description: 'This turns a message into a text to speech message.'
  }
}
