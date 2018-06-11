 const sql = require("sqlite");
 sql.open("./score.sqlite");
 module.exports.run = async (client, message, args) => {
     let defineduser = '';
     if (!args[1]) { // If they didn't define anyone, set it to their own.
         defineduser = message.author.id;
     } else { // Run this if they did define someone... 
         let firstMentioned = message.mentions.users.first();
         defineduser = firstMentioned.id}
         sql.get(`SELECT * FROM money WHERE userId ="${defineduser}"`).then(row => {
             if (!row) return message.reply("Your current level is 0");
             message.reply(`Your current banked money is $${row.bank}`);
             sql.get(`SELECT * FROM money WHERE userId ="${defineduser}"`).then(row => {
                 if (!row) return message.reply("sadly you do not have any points yet!");
                 message.reply(`you currently have $${row.cash} in your wallet, good going!`);
             });
         })
     }
 
 exports.conf = {
     aliases: ['Balb', 'balb']
 };
 exports.help = {
     name: "Balb",
     description: "Money money money."
 }
