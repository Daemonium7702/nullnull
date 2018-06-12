const Discord = require("discord.js");
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (client, message, args) => {

    let prefix = "."
    // Check if they have the modRole
        if (message.member.id != "347885325940424714" ) { // Run if they dont have role...
            message.channel.send('This command can only be used by the BotCreator for the moment.');
            return;
        }else{

        // Check if they defined an amount
        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}add <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}add <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }

        // Check if they defined a user
        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        // Finally, run this.. REMEMBER IF you are doing the guild-unique method, make sure you add the guild ID to the end,
        economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.channel.send(`**User defined had ${args[0]} added/subtraction from their account.**`)
        });

    }
}
      exports.conf = {
  aliases: ['Add', 'add']
  };
  exports.help = {
  name: "Add", description: "Money money money."
  }
