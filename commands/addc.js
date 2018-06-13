const Discord = require("discord.js");
const sql = require("sqlite");
sql.open("./score.sqlite");
 module.exports.run = async (client, message, args) => {
    let defineduser = message.mentions.users.first() || message.author;
defineduser = defineduser.id;
  if (args[1]) {
   
   
 sql.get(`SELECT * FROM money WHERE userId ='${defineduser}'`).then(row => {
    if (!row) {
      sql.run('INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)', [defineduser, 1, 0]);
    } else {
      val = parseInt(args[0])
      sql.run(`UPDATE money SET cash = ${row.cash + val} WHERE userId = '${defineduser}'`);
     message.channel.send(`<@${defineduser}>'s was given ${val]} dollars!`) }
    });//add money with ${row.cash + args[2]}
   
   
} else {
    
 
   sql.get(`SELECT * FROM money WHERE userId ='${defineduser}'`).then(row => {
    if (!row) {
      sql.run('INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)', [defineduser, 1, 0]);
    } else {
      vall = parseInt(args[0])
      sql.run(`UPDATE money SET cash = ${row.cash + vall} WHERE userId = '${defineduser}'`);
     message.channel.send(`The user was given ${vall} dollars!`) }
    });
 
 //add money with ${row.cash + args[1]}
}
  
    }

          exports.conf = {
  aliases: ['Addc', 'addc']
  };
  exports.help = {
  name: "Addc", description: "Money money money."
  }
