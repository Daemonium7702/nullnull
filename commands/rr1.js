module.exports.run = async (client, message, args) => {
		      const  answers = [
"Whats his name just died",
  "<@" + message.author.id + ">" + " is cheating!!!! ***SHOOT HIM***",
  "*click click*... balsy guy clicked twice",
    "Pop! goes " +"<@" + message.author.id + ">"+ "'s brains",  
      "you Got lucky...",
      "Psst! Dont tell" + "<@" + message.author.id + ">"  + " but I slipped 2 bullets in there" ,
  "*click, You lived!",]
		       const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
  exports.conf = {
  aliases: ['Rr1', 'rr1']
  };
  exports.help = {
  name: "rr1", description: "Russian roulette."
  }
