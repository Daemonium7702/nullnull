let timer = {};
const Discord = require('discord.js');
const economy = require('discord-eco');
module.exports.run = async (client, message, args, tools )=> {
 const m = await message.channel.send("Rolling...");
  const answers = [
 2,
      1,
      3,
      4,
      5,
      6,
    0,
  ]
  const answerss = [
 2,
      1,
      3,
      4,
      5,
      6,
    0,
  ]
  const dice = [
  2,
  3,
  3,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  11,
  11,
  12,
  ]
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const randomNamaste = answerss[Math.floor(Math.random() * answers.length)];
const vals = randomNamaste+randomAnswer;
const diiccee = dice[Math.floor(Math.random()* dice.length)];
const loss = '-'+args[0]
const win = args[0]
if(vals < diiccee){
message.channel.send(`You rolled a ${vals}, I rolled a ${diiccee}... you have lost $${args[0]}`);
           if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}gamble <amount> <user>**`);
            return;
        }
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}gamble <amount> **`);
            return; 
        } 
        let defineduser = '';
            defineduser = message.author.id;
             economy.updateBalance(defineduser + message.guild.id, parseInt(loss)).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.channel.send(`**User defined had ${args[0]} taken for losses..**`)
        });

    }
    if(vals > diiccee){
    message.channel.send(`You rolled a ${vals}, I rolled a ${diiccee}... you have won $${args[0]}! `)
           if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}gamble <amount> <user>**`);
            return;
        }
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}gamble <amount> **`);
            return; 
        } 
        let defineduser = '';
            defineduser = message.author.id;
             economy.updateBalance(defineduser + message.guild.id, parseInt(win)).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.channel.send(`**User defined had ${args[0]} added to their account!**`)
        });

    }
    if(vals = diccee){
    message.channel.send(`You rolled a ${vals}, I rolled a ${diiccee}... we have tied. $${args[0]}.`)
           if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}gamble <amount> <user>**`);
            return;
        }
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}gamble <amount> **`);
            return; 
        } 
    }
    }
  exports.conf = {
  aliases: ['Gamble', 'gamble']
  };
  exports.help = {
  name: "Gamble", description: "Gambles your money away!"
  }
