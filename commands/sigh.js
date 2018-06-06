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
		if(command === "space"){
message.delete().catch(O_o=>{});
   if (args.length < 1) {
        throw 'You must provide text to space out!';
    }
  exports.conf = {
  aliases: ['Sigh', 'sigh']
  };
  exports.help = {
  name: "Sigh", description: "Sigh..... :("
  }
