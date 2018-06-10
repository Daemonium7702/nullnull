 const Discord = require('discord.js');
const economy = require('discord-eco');

module.exports.run = async (client, message, args) => {
switch (args) {
        case 'cooldued':
          economy.fetchBalance(message.author.id).then ((i) => {
          let role = message.guild.roles.find("name", "cool dude")
         
          if (`${i.money}` >= 5000) {
            if (!message.member.roles.find('name', "cool dued")) {
              economy.updateBalance(message.author.id, -5000)
              message.channel.send('You just gave us your hard earned money!')
              message.member.addRole(role)
            } else {
              message.channel.send('Why are you gonna buy somethin you dont need?')
            }
            } else {
              message.channel.send("You are Broke")
            }
          })
              break;
        default:
          message.channel.send('```cooldued: 5000```')
       };
       }
exports.conf = {
  aliases: ['Buy', 'buy']
  };
  exports.help = {
  name: "Buy", description: "Money money money."
  }
