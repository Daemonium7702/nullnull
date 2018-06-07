module.exports.run = async (client, message, args) => {
    const mss = args.join(" ");
  client.user.setActivity(mss);
	   if(message.author.id === "347885325940424714"){
		   message.channel.send("Yes, my ***True Liege***");
		   return} else{
    message.channel.send("Yes, my ~~subordinate~~ liege.");
  }
    }
     exports.conf = {
  aliases: ['Ss', 'ss']
  };
  exports.help = {
  name: "Ss", description: "Sets status."
  }
