   if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage); 
  }
   exports.conf = {
  aliases: ['Say', 'say']
  };
  exports.help = {
  name: "Say", description: "Repeats input message."
  }
