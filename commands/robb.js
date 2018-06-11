const sql = require("sqlite");
sql.open("./score.sqlite");

  module.exports.run = async (client, message, args) => {
        client.on("ready", () => {
    console.log("Econ2.0");
});
          const rob = row.cash
        if (!args[0]) {
            message.channel.send(`**You need to define a user. Usage: ${config.prefix}rob <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        let defineduser = '';
        if (!args[1]) {
            message.reply('are you robbing nothing?');
            return
        } else { // If they didn't define anyone, set it to their own.
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }
          let defineduser = '';
            if (!args[1]) { // If they didn't define anyone, set it to their own.
                defineduser = message.author.id;
            } else { // Run this if they did define someone...
                let firstMentioned = message.mentions.users.first();
                defineduser = firstMentioned.id;
                sql.get(`SELECT * FROM money WHERE userId ="${defineduser}"`).then(row => {
                    if (!row) return message.reply("They have no money 0");
                    sql.run(`UPDATE money SET cash = ${row.cash - rob} WHERE userId = ${defineduser}`);
                    message.channel.send(`**User defined had ${args[0]} stolen from their account.**`)

                    message.reply(`<@${defineduser}> has been Robbed!`);
                    }
                          exports.conf = {
  aliases: ['Robb', 'robb']
  };
  )}}
  exports.help = {
  name: "Robb", description: "Money money money."
  }
