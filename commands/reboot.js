if(message.author.id != "347885325940424714"){
message.channel.send("You are not capable of performing that action. Only true liege may do this.");

return}else{
module.exports.run = async (client, message, args) => {
 resetBot(message.channel);
            function resetBot(channel) {
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login("NDQzNzIwMDEyMDk2NzMzMTg0.DfSTnA.EPXnlayZ7CqAqkbQOgdHcXdRZ-c"));
                message.channel.send("``Ayerety is sucessfully restarted!``")
            }
 
}
}
            exports.conf = {
  aliases: ['2noyl', '2Noyl']
  };
  exports.help = {
  name: "2noyl", description: "Lyons cipher v2.0."
  }
