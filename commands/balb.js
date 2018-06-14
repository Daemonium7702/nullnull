 const sql = require("sqlite");
 sql.open("./score.sqlite");
 module.exports.run = async (client, message, args) => {


     if (message.mentions.users.size > 1) {
         return
     } else {
         sql.get(`SELECT * FROM money WHERE userId ="${message.mentions.users.id}"`).then(row => {
                 if (!row) return message.reply("Your current level is 0");
                 message.channel.send(`Current banked money of user is $${row.bank}`);
                 message.channel.send(`User currently have $${row.cash} in your wallet, good going!`);

             }

         )
     }



     if (!message.mentions.user.size) {
            sql.get(`SELECT * FROM money WHERE userId ="${message.author.id}"`).then(row => {
                 if (!row) return message.reply("Your current level is 0");
                 message.channel.send(`Current banked money of user is $${row.bank}`);
                 message.channel.send(`User currently have $${row.cash} in your wallet, good going!`);

             }
     }
 }
 exports.conf = {
     aliases: ['Balb', 'balb']
 };
 exports.help = {
     name: "Balb",
     description: "Money money money."
 }
