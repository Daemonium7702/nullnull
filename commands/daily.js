let timer = {};
const Discord = require('discord.js');
const economy = require('discord-eco');

module.exports.run = async (client, message, args, tools )=> {
        if(timer[message.author.id] === 1) {
          message.channel.send('UOH OH. I am pretty sure that you have already collected your allowance')
        } else {
          message.channel.send('You have collected your allowance. Congrats')
          economy.updateBalance(message.author.id, 50)
            timer[message.author.id] = 1
     
          setTimeout(function(){
            timer[message.author.id] = 0
          }, 300000);
        }
  exports.conf = {
  aliases: ['Daily', 'daily']
  };
  exports.help = {
  name: "Daily", description: "Daily bonus!!!."
  }
