module.exports.run = (client, message, args) => {
const ascii = `
\`\`\`
  _______   _________    _________   ,        ,
 /              |       /            |        |
|               |      |             |        |
|               |      |             |        |
 \\_____,        |      |  _______,   |________|
        \\       |      |         |   |        |
         |      |      |         |   |        |
         |      |      |         |   |        |
  ______/   ____|____   \\________|   |        |
\u200b
\`\`\`
`;


    message.channel.send(ascii);
};
///////////////////ASCII/////////////////////
		
  exports.conf = {
  aliases: ['Sigh', 'sigh']
  };
  exports.help = {
  name: "Sigh", description: "Sigh..... :("
  }
