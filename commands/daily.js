const db = require("quick-db");
const ms = require('parse-ms');
module.exports.run = async (client, message, args, tools )=> {
let cooldown = 8.64e+7
let amount = 250;
let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
if(lastDaily !== null && cooldown - (Date.now()-lastDaily >0)){
let timeObj = ms(cooldown - (Date.now() -lastDaily));
message.reply(`you have already collected their daily allowance. please wait **${timeObj.hours}h-${timeObj.minutes}m**`);
}else{message.reply(`Successfully collected $${amount}`);
db.set(`lastDaily_${message.author.id}`, Date.now());
db.add(`userBalance_${message.author.id}, 250`);
}
}
  exports.conf = {
  aliases: ['Daily', 'daily']
  };
  exports.help = {
  name: "Daily", description: "Daily bonus!!!."
  }
