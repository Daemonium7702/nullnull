const ms = require("ms");
module.exports.run = async (client, message, args, levels) => {
jj = args[1]
let Timer = args[2];

if(!args[2]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

if(args[2] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})} Message will now be sent` + message.author.toString());
  message.channel.send(jj)

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "schedule",
  category: "Miscelaneous",
  description: "Sets a timer",
  usage: "timer"
};
