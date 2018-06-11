  const sql = require("sqlite");
sql.open("./score.sqlite");
client.on("ready", () => {
    console.log("Econ2.0");
});
  module.exports.run = async (client, message, args) => {
        if (message.member.id != "347885325940424714") { // Run if they dont have role...
            message.channel.send('This command can only be used by the BotCreator for the moment.');
            return;
        }

        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${config.prefix}add <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${config.prefix}add <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }
        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }
        sql.run(`UPDATE money SET cash = ${row.bank + args[0]} WHERE userId = ${defineduser}`);
        message.channel.send(`**User defined had ${args[0]} added/subtraction from their account.**`)


    }
          exports.conf = {
  aliases: ['Addb', 'addb']
  };
  exports.help = {
  name: "Addb", description: "Money money money."
  }
