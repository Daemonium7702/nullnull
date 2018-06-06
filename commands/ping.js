module.exports.run = (client, message, args) => {
  const m = await message.channel.send("Ping?");
const answers = [
 "**A porta potty in the Sajara Desert**",
      "**Utopia**",
      "**Bugs Bunny's Rabbit Hole**",
      "**My moms basement**",
      "**NASA's private server**",
      "**Santa's sleigh**",
    "**That thugs wallet**",
  ]
const namaste = [
 "**A dog**",
      "**Jeff**",
      "**A ••••• wit a rocket launcha**",
      "**The lost land of Atlantis**",
      "**That one guy**",
      "**My money",
  ]
 const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const randomNamaste = namaste[Math.floor(Math.random() * answers.length)];
 m.edit(`Pong! It took ${m.createdTimestamp - message.createdTimestamp}ms to find ${randomNamaste} in ${randomAnswer} after ${Math.round(client.ping)} counts of felony!!`)

};
  exports.conf = {
  aliases: ['Ping', 'ping']
  };
  exports.help = {
  name: "Ping", description: "Pings the bot."
  }
