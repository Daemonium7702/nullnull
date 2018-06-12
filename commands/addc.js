const Discord = require("discord.js");
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
    if (!row) {
      sql.run("INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)", [defineduser, 1, 0]);
    } else {
      sql.run(`UPDATE money SET cash = ${row.cash + args[1]} WHERE userId = ${defineduser}`);
     message.channel.send(`<@${defineduser}>'s was given ${args[0]} dollars!`) }
    });
    }

          exports.conf = {
  aliases: ['Addc', 'addc']
  };
  exports.help = {
  name: "Addc", description: "Money money money."
  }
