module.exports.run = async (client, message, args) => {
    const oldMessage = args.join(" ");
    const newMessage = oldMessage.replace(/a|e|i|o|u/gi, "o");
    message.channel.send(newMessage);
  }
  exports.conf = {
  aliases: ['O', 'o']
  };
  exports.help = {
  name: "O", description: "Replaces all vowels in a string with o."
  }
