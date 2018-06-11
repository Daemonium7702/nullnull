///bottom///
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const randomPuppy = require('random-puppy');
const superagent = require("superagent");
const ms = require("ms");
const fs = require("fs");
const hastebin = require('hastebin-gen');
const urban = require('relevant-urban');
const math = require('mathjs');
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');
const translate = require('google-translate-api');
const GoogleSearch = require('google-search');
const google = require('google');
const profanities = require('profanities');




client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`on ${client.channels.size} servers`);
});
client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setGame(`on ${client.guilds.size} `);
});
client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setGame(`on Dis Cord`);
});
client.on('guildMemberAdd', member => {

    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(` ${member}, Has joined the Fray... Poor Person`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err)
        console.error(err);
    let jsfiles = files.filter(f => f.split('.')
        .pop() === 'js');
    if (jsfiles.length <= 0) {
        console.log('No commands to load!');
        return;
    }
    console.log(`[Commands]\tLoaded a total amount ${files.length} Commands`);
    jsfiles.forEach(f => {
        let props = require(`./commands/${ f }`);
        props.fileName = f;
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
const sql = require("sqlite");
sql.open("./score.sqlite");
client.on("ready", () => {
    console.log("Econ2.0");
});
const prefix = "#";
client.on("message", async message => {
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
    if (message.author.bot) return; // Ignore bots.
    if (message.channel.type === "dm") return; // Ignore DM channels.
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
    sql.get(`SELECT * FROM money WHERE userId = "${message.author.id}"`).then(row => {
        console.error; // Gotta log those errors
        sql.run("CREATE TABLE IF NOT EXISTS money (userId TEXT, cash INTEGER, bank INTEGER)").then(() => {
            sql.run("INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });

    }).catch(() => {
        if (!row) { // Can't find the row.


            sql.run("INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        } else { // Can find the row.
            let curBank = Math.floor(0.1 * Math.sqrt(row.cash + 1));
            if (curBank > row.bank) {
                row.bank = curBank;
                sql.run(`UPDATE scores SET points = ${row.cash + 1}, level = ${row.cash} WHERE userId = ${message.author.id}`);
                message.reply(`You've leveled up your bank to level **${curBank}**! Glorious!`);
            }
            sql.run(`UPDATE money SET cash = ${row.cash + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS money (userId TEXT, cash INTEGER, bank INTEGER)").then(() => {
            sql.run("INSERT INTO money (userId, cash, bank) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });


    });;
    if (message.content.startsWith(prefix + "addc")) {
        if (message.member.id != "347885325940424714") { // Run if they dont have role...
            message.channel.send('This command can only be used by the BotCreator for the moment.');
            return;
        }

        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}add <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}add <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }
        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }
        sql.run(`UPDATE money SET cash = ${row.cash + args[0]} WHERE userId = ${defineduser}`);
        message.channel.send(`**User defined had ${args[0]} added/subtraction from their account.**`)


    }
    if (message.content.startsWith(prefix + "addb")) {
        if (message.member.id != "347885325940424714") { // Run if they dont have role...
            message.channel.send('This command can only be used by the BotCreator for the moment.');
            return;
        }

        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: ${prefix}add <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: ${prefix}add <amount> <user>**`);
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
    if (message.content.startsWith(prefix + "rob")) {
        const rob = row.cash
        if (!args[0]) {
            message.channel.send(`**You need to define a user. Usage: ${prefix}rob <user>**`);
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
        if (message.content.startsWwith(prefix + "test")) {
            message.channel.send("coolm8")
        }
        if (message.content.startsWith(prefix + "bal")) {
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


                
            }
        }
    };

})
client.on("message", async message => {
    /////econ v2.0/////


    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let msg = message.content.toLowerCase() || message.content.toUpperCase();

    let cmd;
    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }
    cmd.run(client, message, args);
    /*
  if(command === "ban"){
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
  
    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send("completed");
    return;
  }
*/ //not functional//


    /////////if(message.author.id === "350693449722232832") return;


});




client.login(process.env.BOT_TOKEN);
