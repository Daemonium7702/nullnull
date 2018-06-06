module.exports.run = (client, message, args) => {
		  if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));
};
	  exports.conf = {
  aliases: ['Reverse', 'reverse']
  };
  exports.help = {
  name: "Reverse", description: "Reverses a string."
  }
