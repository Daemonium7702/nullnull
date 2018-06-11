   const sql = require("sqlite");
sql.open("./score.sqlite");

  module.exports.run = async (client, message, args) => {
        client.on("ready", () => {
    console.log("Econ2.0");
});
            let defineduser = '';
            if (!args[1]) { // If they didn't define anyone, set it to their own.
                defineduser = message.author.id;
            } else { // Run this if they did define someone...
                let firstMentioned = message.mentions.users.first();
                defineduser = firstMentioned.id;
               
                    let curBank = Math.floor(0.1 * Math.sqrt(row.cash + 1));
if (curBank > row.bank) {
  row.level = curBank;
  sql.run(`UPDATE cash SET cash = ${row.cash + 1}, bank = ${row.bank} WHERE userId = ${defineduser}`);
  message.reply(`You've leveled up to level **${curBank}**! Ain't that dandy?`);
};
}}
  exports.conf = {
  aliases: ['Balb', 'balb']
  };
  exports.help = {
  name: "Balb", description: "Money money money."
  }
