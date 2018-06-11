const sql = require("sqlite");
 sql.open("./score.sqlite");
 module.exports.run = async (client, message, args) => {
 const m = await message.channel.send("Rolling...");
  const prefix = '.'
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
  if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}gamble<amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}gamble <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const randomNamaste = answerss[Math.floor(Math.random() * answers.length)];
const vals = randomNamaste+randomAnswer;
const diiccee = dice[Math.floor(Math.random()* dice.length)];
const loss = '-'+args[0]
const win = args[0]
sql.get(`SELECT * FROM money WHERE userId ="${defineduser}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)", [defineduser, 1, 0]);
    } else {
let defineduser = '';
            defineduser = message.author.id;
       if(row.cash<win){
      message.channel.send('You\'re too broke to do that!');
       return}else{
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
              sql.run(`UPDATE money SET cash = ${row.cash - args[0]} WHERE userId = ${defineduser}`);
   message.channel.send(`**User defined had ${args[0]} taken for losses..**`) }
            
        };

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
              sql.run(`UPDATE money SET cash = ${row.cash + args[0]} WHERE userId = ${defineduser}`);
   message.channel.send(`<@${defineduser}>'s was given $${args[0]} in cash!!`) }
   
        });

    
    if(vals = diiccee){
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
