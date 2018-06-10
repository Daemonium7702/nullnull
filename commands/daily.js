let timer = {};
const Discord = require('discord.js');
const economy = require('discord-eco');

module.exports.run = async (client, message, args, tools )=> {
          let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }
        if(timer[message.author.id] === 1) {
          message.channel.send('Sorry! I am pretty sure that you have already collected your allowance!')
        } else {
          message.channel.send('You have collected your daily allowance of $50')
           economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.channel.send(`**User defined had ${args[0]} added/subtraction from their account.**`)
        });
     timer[message.author.id] = 1
     
          setTimeout(function(){
            timer[message.author.id] = 0
          }, 300000);
        }
        }
  exports.conf = {
  aliases: ['Daily', 'daily']
  };
  exports.help = {
  name: "Daily", description: "Daily bonus!!!."
  }
