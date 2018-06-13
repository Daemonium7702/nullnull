const ms = require('ms');
module.exports.run = async (client, message, args) => {
 let member = message.mentions.member.first();
let muteRole = message.guild.roles.find("name", "Muted"); 
let modlog1 = client.channels.find("name", "incidents" || "Incidents");
if(!modlog1) return message.reply("I've detected that this server doesn't have a incidents channel.");

if(!member) return message.reply("You gotta define a member m8");

if(!muteRole) return message.reply("M8 get a role right. now name it Muted. Try again");
let params = message.content.split(" ").slice(1);
let time = params[1];
if(!time) return message.reply("Cool, so since you didnt define time, Ill just mute this memebr for 0 seconds.");
member.addRole(muteRole.id);
modlog1.channel.send(`Nice! You've been muted for ${ms(ms(time), {long: true})} ${member.user.tag}`);
setTimeout(function(){
member.removeRole(mute.id);
modlog1.channel.send(`${message.member.tag} Hello m8 you have been unmuted ~~about damn time~~. It lasted: ${ms(ms(time), {long: true})}`);
}, ms(time));
}
 exports.conf = {
  aliases: ['Mute', 'mute']
  };
  exports.help = {
  name: "Mute", description: "mutes"
  }
