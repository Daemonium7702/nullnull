module.exports.run = async (client, message, args) => {
  const  answers = [
"Yes",
      "Not a Chance!",
  "No",
    "Maybe",  
      "Could Be!",
      "Yes, but only on Tuesdays",
  "Ummmm I forgot?",]
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
  exports.conf = {
  aliases: ['8ball', '8Ball']
  };
  exports.help = {
  name: "8ball", description: "erm its an 8ball."
  }
