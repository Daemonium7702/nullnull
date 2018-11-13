const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const randomPuppy = require('random-puppy');
const superagent = require("superagent");
const ms = require("ms");
const fs = require("fs");
const CQ = require("coffeequate");
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
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube(process.env.YT_API);
const queue = new Map();
const moment = require('moment');
require('moment-duration-format');
const meme = require('memejs');
const base64 = require("base-64");
const utf = require("utf8");
const caesarSalad = require('caesar-salad');
const Caesar = require('caesar-salad').Caesar;
const Vigenere = require('caesar-salad').Vigenere;
const ROT13 = caesarSalad.ROT13;
const ROT5 = caesarSalad.ROT5;
const ROT18 = caesarSalad.ROT18;
const ROT47 = caesarSalad.ROT47;
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
const Parser = require('qrcode-image-parser');
const prime = require('get-primes')
var PastebinAPI = require('pastebin-js'),
	pastebin = new PastebinAPI({
		'api_dev_key': '7d0884ae9f6fcda7dfe3feaed6349ac9',
		'api_user_name': 'DaemoniumDVMors',
		'api_user_password': 'Dallasrules123.'
	});
const mongoose = require('mongoose');

const assert = require('assert');
const factor = require('factors-number')
const msfjs = require('msfjs')
const cash = require('./money/cash.js')
client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`on ${client.guilds.size} servers`);
});
client.on("guildCreate", guild => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`on ${client.guilds.size} servers `);
});
client.on("guildDelete", guild => {
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`on ${client.guilds.size} servers`);
});
client.on('guildMemberAdd', member => {

	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'general');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	const rmess = [
		`${member} didn\'t turn back before it was too late...`,
		`${member} has joined the fray.... Poor person`,
		`${member}... Does anyone know this guy?`,
		`I wish you luck ${member}...`,
		`${member} bo b${member} fe fi fo f${member}... \n This worked better in theory...`,
		`${member}${member}${member} three in a row! What do I win?`,
		`${member} *tumbleweed*`,
		`${member} *Yaaawwwwnnn* Bet Discord can\'t do that, can it.`,
		`${member} seems lost out there!`
		
	]
	const ramess = rmess[Math.floor(Math.random() * rmess.length)];
			
	channel.send(ramess);
});
client.on("message", async message => {
	function log(logmessage) {
		if (message.guild.channels.has(logChannel)) {
			message.guild.channels.get(logChannel).send({
				embed: logmessage
			}).then().catch(err => console.log(err));
		}
	}
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0){
var hhh = 0	
if(hhh == 0){
	mongoose.connect('mongodb://DaemoniumAdmin:Dallasrules123.@daemonium-shard-00-00-u2ufm.mongodb.net:27017,daemonium-shard-00-01-u2ufm.mongodb.net:27017,daemonium-shard-00-02-u2ufm.mongodb.net:27017/Daemonium?ssl=true&replicaSet=Daemonium-shard-0&authSource=admin&retryWrites=true&maxPoolSize=1');
hhh = 1
}
let cashMonies = Math.ceil(math.random() * 10)
cash.findOne({
	UserId: message.author.id,
	ServerId: message.guild.id
}, (err, bal) => {
	if (err) console.log(err)
	if (!bal) {
		const newCash = new cash({
			UserId: message.author.id,
			ServerId: message.guild.id,
			bal: cashMonies
		})
		newCash.save().catch(err => console.log(err));
	} else {
		bal.bal= bal.bal + cashMonies;
		bal.save().catch(err => console.log(err));
	}
})
}
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const nanargs = message.content.split(/ +/g)
	const command = args.shift().toLowerCase();
	const prefix = config.prefix
	const bindex = config.prefix
if(command === "eval"){
  if(message.author.id !== "347885325940424714"){
 return message.channel.send("USER NOT AUTHORIZED");
			     }
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}
///econ///
	if(command === "bal"){
cash.findOne({

	UserId: message.author.id,

	ServerId: message.guild.id

},(err, bal) => {
	cash.findOne({

	UserId: message.author.id,

	ServerId: message.guild.id

},(err, bankbal) => {	

	if (err) console.log(err)

let moneyEmb = new Discord.RichEmbed()
.setTitle('Balance')
.setColor("#660000")
.setThumbnail(client.displayAvatarURL)
	if (!bal && !bankbal) {
		moneyEmb.addField("Net Worth", "0", true)
		moneyEmb.addField("Pocket Change", "0", true)
		moneyEmb.addField("Banked Money", "0", true)

		return message.channel.send(moneyEmb)		
}else if(!bal){
			moneyEmb.addField("Net Worth", Math.floor(bal.bal + bankbal.bankbal), true)
			moneyEmb.addField("Pocket Change", "0", true)
			moneyEmb.addField("Banked Money", bankbal.bankbal, true)
			return message.channel.send(moneyEmb)
}else if(!bankbal){
moneyEmb.addField("Net Worth", Math.floor(bal.bal + bankbal.bankbal), true)
			moneyEmb.addField("Pocket Change", bal.bal, true)
			moneyEmb.addField("Banked Money", "0", true)
			return message.channel.send(moneyEmb)
}else{
			moneyEmb.addField("Net Worth", Math.floor(bal.bal + bankbal.bankbal), true)
			moneyEmb.addField("Pocket Change", bal.bal, true)
			moneyEmb.addField("Banked Money", bankbal.bankbal, true)
			return message.channel.send(moneyEmb)

	})
	})
	
	}
	if (message.channel.type == 'dm') {
		try {
			function clean(text) {
				if (typeof(text) === 'string')
					return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
				else
					return text;
			}
			const bug = nanargs.join(" ")
			const sendingstuff = "Success!\n" + `${message.author.username}` + " Has successfully talked to a robot in direct messages because they are alone\n" + "***REPORT MESSAGE: ***" + `${bug}` + "\n***ID: ***" + `${message.author.id}` + "***\nUsername: ***" + `${message.author.username}` + "***\nTag:   ***" + `${message.author.tag}` + "\n***Origin:   ***\n" + "***DIRECT MESSAGES***"
			const content = sendingstuff
			const id = '504527886623965184';
			new Promise((resolve, reject) => {
				superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
					.set('Authorization', `Bot ${client.token}`).send({
						content
					})
					.end((err, res) => {
						if (err) {
							reject(err);
							const errembed = new Discord.RichEmbed()
								.setTitle("ERROR!!!")
								.setColor(800020)
								.setDescription("An unknown error has been encountered. Please type .inv and join the support server to report it.")
								.setFooter('There was an error while sending your bug report to Daebot Support.')
								.setImage('https://us.123rf.com/450wm/jemastock/jemastock1708/jemastock170808401/84010839-red-background-poster-with-skull-and-bones-error-oops-vector-illustration.jpg?ver=6')
								.setTimestamp()
							message.channel.send(errembed)
						} else {
							resolve(res);
							const succembed = new Discord.RichEmbed()
								.setTitle("Success!")
								.addField("ReportFrom:", `${message.author.username}` + "Has successfully sent a report to Daebot support!")
								.addField("***REPORT MESSAGE:   ***", +bug)
								.addField("UserData: ", "***ID:*** " + `${message.author.id}` + "***\nUsername:***   " + `${message.author.username}` + "***\nTag:   ***" + `${message.author.tag}`)
								.addBlankField(true)
								.addField("***Origin:***\n", "***Direct Messages***")
							message.channel.send("Your message has been sent to Daemonium!")
						}
					});
			});
		} catch (err) {
			console.log(err)
		}
	}
	if (command === "rebootreinitreinsigrestart") {
		if (message.author.id != "347885325940424714") {
			///
			message.channel.send("You must be devoted to finding secret commands huh? Stahp it. ")
		}else{
		const thismessage = await message.channel.send('Destroying in 3')
		thismessage.edit('Destroying in 2')
		thismessage.edit('Destroying in 1')
		thismessage.edit("BOOM")
			.then(msg => client.destroy())
			.then(() => client.login(process.env.BOT_TOKEN));
	}
	}
	if (message.guild.id == "451843103318343680") {
		message.channel.send("services discontinued for https://discordapp.com/channels/451843103318343680/457677144470847500 please head to https://discord.gg/GfJw3VB to use the bot.");
		return
	} else {
		if (message.author.id != "347885325940424714")
			if (message.author.id === "447259439439937547") return message.channel.send("Permission denied.");
		if (message.author.id === "395386053831426048") return message.channel.send("Permission denied.");
		if (message.author.id === "352250257389912064") return message.channel.send("Permission denied.");
		if (message.author.id === "350693449722232832") return message.channel.send("Permission denied.");
		if (message.author.id === "412369746172837891") return message.channel.send("Permission denied. Learn Humility.")
		//https://discordapp.com/channels/428346455909072906/429072113601871893
	
		if (command === "pm") {
			if (message.author.id != "347885325940424714") {
				return message.channel.send("Dude who even are you? And how did you find this command? Anywayyyy go away plz, you are not my liege.")
			} else {
				const idd = args[0]
				const mss = args.join('').substr(message.author.id.length)
				client.users.get(idd).send(mss);

			}
		}
////////DATABASE///////
/*if (command === "dbconninit") {
	const moneySchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		balance: Number,
		bankbal: Number
	})
	let addc = Math.ceil(Math.random() * 50);
	console.log(addc)
	moneySchema.findOne({
			UserId: message.author.id,
			ServerId: message.guild.id
		}, (err, money) => {
			if (err) console.log(err);
			if (!money) {
				const Newbal = new Money({
					userId: message.author.id,
					ServerId: message.guild.id,
					bankbal: addc
				})
				Newbal.save().catch(err => console.log(err))
			} else {
				moneySchema.money = moneySchema.money + addc;
				moneySchema.save().catch(err => console.log(err))
			}
		}

	)
}*/
		/*
      if(command ==="user"){
const bud = require('basic-instagram-user-details');
		
 if(!args[0]){
 message.channel.send("enter a username")
	return}else{
	if(!args[1]){
	message.channel.send("enter either id	string, fullname, username, bio, externalUrl, linkshimmed, posts, followers, following, private, verified, connected")
	return}else{
 const user = args[0];
bud(user, 'id').then(res => {
  const userId = res.data;
message.channel.send(userId);
  // => 259220806
})
}
}     
}   // Packages
if(command === "Rport"){
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
 
const username = "loljk098761"
const password = "01010101"
const cookieStore = new FileCookieStore('./cookies.json')
const cllient = new Instagram({ username, password, cookieStore })
  await cllient.login()
const puppeteer = require('puppeteer');
let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
const ident = args[0]
if(!args[0]){
message.channel.send("Please Supply an ID")
return}else{
    await page.goto(`https://www.instagram.com/users/${ident}/report/inappropriate`);
await page.waitFor(5000);
	console.log(`https://www.instagram.com/users/${ident}/report/inappropriate`);
    await page.eval('#react-root > div > ul > li:nth-child(5) > div', form => form.click());
	await page.waitFor(5000);
message.channel.send("complete?")
    
    browser.close();
    return result;
scrape().then((value) => {
    console.log(value); // Success!
});
}
}
}
        if (command == "send") {
            var clockwork = require('clockwork')({
                key: '32a2b445df35b881a9c20a746f98d07f7ab6d53f'
            });
            clockwork.sendSms({
                    To: args[0],
                    Content: args[1]
                },
                function(error, resp) {
                    if (error) {
                        message.channel.send('Something went wrong', error);
                    } else {
                        message.channel.send('Message sent', resp.responses[0].id);
                    }
                }
            )
        }
*/

		/*
		        if (command === "daecade") {
		            message.channel.send("***STAGE 1:*** \n A bright flash of light blinds you. You place your hands in front of your face to protect your eyes. Never before has this been seen. A smoke plume erupts from the ground. You have four choices,\n 1) End it here and now. \n 2)Head north to the door \n 3) You head south to the bunker \n 4) You stand where you are by the window staring in awe at the magnificent light. \n respond by typing 1, 2, 3, or 4.");
		            try {
		                var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 5, {
		                    maxMatches: 1,
		                    time: 30000,
		                    errors: ['time']
		                });
		            } catch (err) {
		                console.error(err);
		                console.log(response);
		                return message.channel.send('No or invalid value entered, quitting game.');
		            }
		            var videoIndex = parseInt(response.first().content);
		            if (videoIndex == 1) {
		                message.channel.send("You chose to commit suicide. Game Over...");
		                return
		            }
		            if (videoIndex == 2) {
		                message.channel.send("***STAGE 2:*** \n You are at the door. You have two choices, \n 1) Open the door, and walk outside. \n 2)Go back ")
		                try {
		                    var opttsto = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                        maxMatches: 1,
		                        time: 30000,
		                        errors: ['time']
		                    });
		                } catch (err) {
		                    console.error(err);
		                    return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                }
		                var opttstoIndex = parseInt(opttsto.first().content);
		                if (opttstoIndex == 1) {
		                    message.channel.send("You Walk Outside, you will have one quarter the usual time to make your moves until you find safehaven. You may \n 1) stay outside, \n 2) head back inside")
		                    try {
		                        var a = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                            maxMatches: 1,
		                            time: 7500,
		                            errors: ['time']
		                        });
		                    } catch (err) {
		                        console.error(err);
		                        return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                    }
		                    var aIndex = parseInt(a.first().content);
		                    if (aIndex == 1) {
		                        message.channel.send("In a state of paralysis, you stand with fear. The word grows brighter, hotter. The wall of head approaches you. You are flung into the air by a massive gust of wind. Moments later, your skin begins to boil, then burn. Turning black, before vanishing into the ashes around. Game Over...")
		                        return
		                    }
		                    if (aIndex == 2) {
		                        message.channel.send("You return inside, the wall of flames draws nearer. You have half the normal time to make your move.  1) End it here and now. \n 2) You head south to the bunker \n 3) You stand where you are by the window staring in awe at the magnificent light. \n respond by typing 1, 2,or 3.")
		                        try {
		                            var aa = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                maxMatches: 1,
		                                time: 15000,
		                                errors: ['time']
		                            });
		                        } catch (err) {
		                            console.error(err);
		                            return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                        }
		                        var aaIndex = parseInt(a.first().content);
		                        if (aaIndex == 1) {
		                            message.channel.send("You commit suicide. Game over...");
		                            return
		                        }
		                        if (aaIndex == 2) {
		                            message.channel.send("You arrive at the underground concrete bunker entrance.\n 1) You may choose to gather supplies, but your next move will have half the usual time to respond, \n 2)Or you can enter the bunker immediately.");
		                            try {
		                                var bb = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                    maxMatches: 1,
		                                    time: 15000,
		                                    errors: ['time']
		                                });
		                            } catch (err) {
		                                console.error(err);
		                                return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                            }
		                            var bbIndex = parseInt(bb.first().content);
		                            if (bbIndex == 1) {
		                                message.channel.send("You grab a wooden plank, one pack of gauze, and 3 cans of food.You now enter the Bunker. Once you seal it shut, you begin to feel the floor rattle. The rattle turns into a roar. You fall down unable to keep your balance. Your supplies go all over the floor. After 3 minutes, the rumbling stops. You notice very faint cracks in the walls of the bunker. You have 3 choices, \n 1) sleep \n 2) Go upstairs again \n 3) explore");
		                                try {
		                                    var bbb = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                        maxMatches: 1,
		                                        time: 45000,
		                                        errors: ['time']
		                                    });
		                                } catch (err) {
		                                    console.error(err);
		                                    return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                }
		                                var bbbIndex = parseInt(bbb.first().content);
		                                if (bbbIndex === 1) {
		                                    ///sleep
		                                    message.channel.send("After all the chaos, you find your eyelids growing heavy. You place a roll of cloth on the stone floor, and you close your eyes. Images of today flashing across the back. Your mind races, *'Is my family alive' 'Is there anyone else?' 'What do I do now?' 'Is this it?' 'What about... Her...'* Gradually, your thoughts fade into darkness, and you fall asleep. 2x time bonus. answer increased to 60s for two turns. When you awake in the morning, you have two choices, \n 1) Go upstairs \n 2) Explore.")
		                                    try {
		                                        var sleep = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                            maxMatches: 1,
		                                            time: 60000,
		                                            errors: ['time']
		                                        });
		                                    } catch (err) {
		                                        console.error(err);
		                                        return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                    }
		                                    var sleepIndex = parseInt(sleep.first().content);
		                                    if (sleepIndex == 1) {
		                                        message.channel.send("You decide to open the vault doors. As soon as you do, air rushes in. You exit the vault. You notice the world glowing a faint green. **TIME REDUCED TO 10 SECOND DUE TO RADIOACTIVITY ☢** \n 1)Go back in \n 2) Stay.")
		                                        try {
		                                            var goup = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                                maxMatches: 1,
		                                                time: 10000,
		                                                errors: ['time']
		                                            });
		                                        } catch (err) {
		                                            console.error(err);
		                                            return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                        }
		                                        var goupIndex = parseInt(goup.first().content);
		                                        if (goupIndex === 1) {
		                                            message.channel.send("You return inside. But it is too late. You were outside too long. You feel your innards churning. Every aspect of life now seems more vivid. For a time. Then it all fades. Unable to focus on any object. Your vision turns dark. Jumpin in and out of focus. You collapse on the ground. Your resolve. Gone.")
		                                        }
		                                        if (goupIndex === 2) {
		                                            message.channel.send("You choose to stay outside. Time reduced to 5 seconds.\n 1) stay\n 2) go inside")
		                                            try {
		                                                var stup = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                                    maxMatches: 1,
		                                                    time: 5000,
		                                                    errors: ['time']
		                                                });
		                                            } catch (err) {
		                                                console.error(err);
		                                                return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                            }
		                                            var stupIndex = parseInt(stup.first().content);
		                                            if (stupInedx == 1) {
		                                                message.channel.send("You return inside. But it is too late. You were outside too long. You feel your innards churning. Every aspect of life now seems more vivid. For a time. Then it all fades. Unable to focus on any object. Your vision turns dark. Jumpin in and out of focus. You collapse on the ground. Your resolve. Gone.")
		                                            }
		                                            if (stupIndex == 2) {
		                                                message.channel.send("Despite the gruesome agony you are enduring. You choose to remain. Your skin blisters. Your fingertips turn black. You can feel your tongue swelling in your mouth. Eyes bulging. Till eventually. YOu collapse, too weak to stay resolute.")
		                                            }
		                                        }
		                                    }
		                                    if (sleepIndex === 2) {
		                                        //Xplore
		                                        message.channel.send("You choose to explore the incomplete annoying ass game. Like ffs. this shit takes too long to make XD")
		                                    }
		                                }
		                                if (bbIndex == 2) {
		                                    message.channel.send("You enter the bunker, and just in time. You are thrown to the ground as a thunderous roar sounds overhead. You are underground, but you still hear the wood splintering overhead. This continues for several minutes, then the roar comes to a cease. You remain still. You look around the room and notice some small cracks in the cement walls. You have 3 choices.\n 1) Sleep \n 2) Go upstairs again, \n 3) explore the bunker.")
		                                    return
		                                }
		                            }
		                            if (aaIndex == 3) {
		                                message.channel.send("You Stood by the window. The force of the wind shatters the glass into millions of pieces, embedding them in your flesh. Shortly after, The wooden walls begin to splinter, the walls slam into you with such force, that they fly stright through your body. You are rendered unconscious. The light soon fills the room, and the heat eliminates any trace of your existence.")
		                                return
		                            }
		                        }
		                        if (opttstoIndex == 2) {
		                            message.channel.send("You head back. You have 3 choices 1) End it here and now. \n 2) You head south to the bunker \n 3) You stand where you are by the window staring in awe at the magnificent light. \n respond by typing 1, 2, 3, or 4.");
		                            try {
		                                var b = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 4, {
		                                    maxMatches: 1,
		                                    time: 30000,
		                                    errors: ['time']
		                                });
		                            } catch (err) {
		                                console.error(err);
		                                return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                            }
		                            var bIndex = parseInt(b.first().content);
		                            if (bIndex === 1) {
		                                message.channel.send("***END OF CURRENT LINE***")
		                            }
		                            if (videoIndex == 3) {
		                                message.channel.send("You arrive at the underground concrete bunker entrance.\n You may choose to gather supplies, but your next move will have half the usual time to respond, \n 2)Or you can enter the bunker immediately. ***END OF CURRENT LINE***");
		                                try {
		                                    var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                        maxMatches: 1,
		                                        time: 30000,
		                                        errors: ['time']
		                                    });
		                                } catch (err) {
		                                    console.error(err);
		                                    return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                }
		                                if (videoIndex == 4) {
		                                    message.channel.send("You chose to stand around gawking like a moron. You will have half the usual time to respond to your next move. You may choose \n 1) to repeat this action, \n or head to the bunker.***END OF CURRENT LINE***")
		                                    try {
		                                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 3, {
		                                            maxMatches: 1,
		                                            time: 30000,
		                                            errors: ['time']
		                                        });
		                                    } catch (err) {
		                                        console.error(err);
		                                        return message.channel.send('You took too long, or chose an invalid option. The nuclear blast envelops you, and your skin melts. Game Over...');
		                                    }
		                                }
		                            }
		                        }
		                    }
		                }
		            }
		        }

	*/
		if (command === "factor") {
			const number = args[0]
			if (!args[0]) {
				message.channel.send("No numbers to factor")
			}
			if (args[1]) {
				message.channel.send("too many args!")
			}
			var integer = parseInt(number, 10);
			const newmss = factor.numberFactors(integer)
			message.channel.send(newmss)
		}
		if (command === "grole") {
			const role = args[0]
			let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!kUser) return message.channel.send("Can't find user!");
			let kickChannel = message.guild.channels.find(`name`, "incidents");
			if (!kickChannel) return message.channel.send("Can't find incidents channel.");
			const thisRole = message.guild.roles.find('name', role)
			message.guild.member(kUser).addRole(role)
			message.channel.send(kUser.toString() + "has been given" + `${role}`)
		}
		if (command == "announcements") {
			message.channel.send("Update info 9.23.2018: New commands added. Reta, f2cipher, rot commands, hex commands, gprime, caesar ciphers, vig ciphers and more! Make sure to run .help often to see new commands!")
		}
		if (command == "reta") {
			message.channel.send("https://www.youtube.com/watch?v=Hds9tFMuU8o")
		}
		///some crypto///
		if (command === "f2cipher") {
			const thmessage = args.join('')
			const a = thmessage.replace(/a/gi, "196418_1-");
			const b = a.replace(/b/gi, "121393_2-");
			const c = b.replace(/c/gi, "75025_3-")
			const d = c.replace(/d/gi, "46368_5-")
			const e = d.replace(/e/gi, "28657_8-")
			const f = e.replace(/f/gi, "17711_13-")
			const g = f.replace(/g/gi, "10946_21-")
			const h = g.replace(/h/gi, "6765_34-")
			const i = h.replace(/i/gi, "4181_55-")
			const j = i.replace(/j/gi, "2584_89-")
			const k = j.replace(/k/gi, "1597_144-")
			const l = k.replace(/l/gi, "987_233-")
			const m = l.replace(/m/gi, "610_377-")
			const n = m.replace(/n/gi, "377_610-")
			const o = n.replace(/o/gi, "233_987-")
			const p = o.replace(/p/gi, "144_1597-")
			const q = p.replace(/q/gi, "89_2584-")
			const r = q.replace(/r/gi, "55_4181-")
			const s = r.replace(/s/gi, "34_6765-")
			const t = s.replace(/t/gi, "21_10946-")
			const u = t.replace(/u/gi, "13_17711-")
			const v = u.replace(/v/gi, "8_28657-")
			const w = v.replace(/w/gi, "5_46368-")
			const x = w.replace(/x/gi, "3_75025-")
			const y = x.replace(/y/gi, "2_121393-")
			const z = y.replace(/z/gi, "1_196418-")
			const spacer = z.replace(/ /g, "|")
			message.channel.send(spacer)
		}




		if (command === "gprime") {
			const num = args.join('')
			if (!args) {
				message.channel.send("I need to know what number to stop looking for primes at.")
			}
			const primeNumbers = prime(num).toString();
			const title = "sum numeros"
			message.channel.send(primeNumbers);
			pastebin
				.createPaste({
					text: primeNumbers,
					title: title,
					format: null,
					privacy: 0,
					expiration: 'N'
				})
				.then(function(data) {
					// we have succesfully pasted it. Data contains the id
					message.channel.send(data);
				})
				.fail(function(err) {
					console.log(err);
					message.channel.send(err);
				});
		}
		if (command === "paste") {
			const title = args[0]
			const fixruppr = args[0].length
			const text = args.join('').substr(fixruppr)
			pastebin
				.createPaste({
					text: text,
					title: title,
					format: null,
					privacy: 0,
					expiration: 'N'
				})
				.then(function(data) {
					// we have succesfully pasted it. Data contains the id
					message.channel.send(data);
				})
				.fail(function(err) {
					console.log(err);
					message.channel.send(err);
				});
		}
		/*
		if(command === "qr"){
			
const myphoto =message.attachments
const buffer = myphoto
Jimp.read(buffer, (err, lenna) => {
  if (err) console.error(err)
        // TODO handle error
 lenna
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            // TODO handle error
        }
	    console.log(value.result);
        console.log(value);
    };
   const jimmy =  qr.decode(image.bitmap);
	message.channel.send(jimmy)
});
			
		}
		*/


		if (command === "hexenc") {


			function ascii_to_hexa(str) {
				var arr1 = [];
				for (var n = 0, l = str.length; n < l; n++) {
					var hex = Number(str.charCodeAt(n)).toString(16);
					arr1.push(hex);
				}
				return arr1.join('');
			}
			const texts = args.join(' ')
			message.channel.send(ascii_to_hexa(texts));
		}
		if (command == "hexdec") {
			function hex2a(hexing) {
				var hex = hexing.toString();
				var str = '';
				for (var i = 0; i < hex.length; i += 2)
					str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
				return str;
			}
			const texto = args.join(' ')
			message.channel.send(hex2a(texto))
		}
		if (command === "caesarenc") {
			const shift = args[0];
			const txt = args.join('')
			if (!args[0]) {
				message.channel.send("Please either type a shift value(integer), or letter (a-z), P.S. if you type c, the first letter will be c.");
				return
			} else if (!args[1]) {
				message.channel.send("Please give me some text to encipher!!");
				return
			} else {
				if (args[0] = 1) {
					args[0] = "b"
				} else if (args[0] = 2) {
					args[0] = "c"
				} else if (args[0] = 3) {
					args[0] = "d"
				} else if (args[0] = 4) {
					args[0] = "e"
				} else if (args[0] = 5) {
					args[0] = "f"

				} else if (args[0] = 6) {
					args[0] = "g"
				} else if (args[0] = 7) {
					args[0] = "h"
				} else if (args[0] = 8) {
					args[0] = "i"
				} else if (args[0] = 9) {
					args[0] = "j"
				} else if (args[0] = 10) {
					args[0] = "k"
				} else if (args[0] = 11) {
					args[0] = "l"
				} else if (args[0] = 12) {
					args[0] = "m"
				} else if (args[0] = 13) {
					args[0] = "n"
				} else if (args[0] = 14) {

					args[0] = "o"
				} else if (args[0] = 15) {
					args[0] = "p"
				} else if (args[0] = 16) {
					args[0] = "q"
				} else if (args[0] = 17) {
					args[0] = "r"
				} else if (args[0] = 18) {
					args[0] = "s"
				} else if (args[0] = 19) {
					args[0] = "t"
				} else if (args[0] = 20) {
					args[0] = "u"
				} else if (args[0] = 21) {
					args[0] = "v"
				} else if (args[0] = 22) {
					args[0] = "w"
				} else if (args[0] = 23) {
					args[0] = "x"
				} else if (args[0] = 24) {
					args[0] = "y"
				} else if (args[0] = 25) {
					args[0] = "z"
				} else if (args[0] = 26) {
					args[0] = "a"
				}

				const caesarshiftt = Caesar.Cipher(shift).crypt(txt);
				const caesarshift = caesarshiftt.substr(1)
				message.channel.send(caesarshift)
			}
		}
		if (command === "caesardec") {
			const shift = args[0];
			const txt = args.join('')
			if (!args[0]) {
				return message.channel.send("Please either type a shift value(integer), or letter (a-z), P.S. if you type c, the first letter will be c.")
			} else if (!args[1]) {
				return message.channel.send("Please give me some text to encipher!!")
			} else {
				if (args[0] = 1) {
					args[0] = "b"
				} else if (args[0] = 2) {
					args[0] = "c"
				} else if (args[0] = 3) {
					args[0] = "d"
				} else if (args[0] = 4) {
					args[0] = "e"
				} else if (args[0] = 5) {
					args[0] = "f"

				} else if (args[0] = 6) {
					args[0] = "g"
				} else if (args[0] = 7) {
					args[0] = "h"
				} else if (args[0] = 8) {
					args[0] = "i"
				} else if (args[0] = 9) {
					args[0] = "j"
				} else if (args[0] = 10) {
					args[0] = "k"
				} else if (args[0] = 11) {
					args[0] = "l"
				} else if (args[0] = 12) {
					args[0] = "m"
				} else if (args[0] = 13) {
					args[0] = "n"
				} else if (args[0] = 14) {

					args[0] = "o"
				} else if (args[0] = 15) {
					args[0] = "p"
				} else if (args[0] = 16) {
					args[0] = "q"
				} else if (args[0] = 17) {
					args[0] = "r"
				} else if (args[0] = 18) {
					args[0] = "s"
				} else if (args[0] = 19) {
					args[0] = "t"
				} else if (args[0] = 20) {
					args[0] = "u"
				} else if (args[0] = 21) {
					args[0] = "v"
				} else if (args[0] = 22) {
					args[0] = "w"
				} else if (args[0] = 23) {
					args[0] = "x"
				} else if (args[0] = 24) {
					args[0] = "y"
				} else if (args[0] = 25) {
					args[0] = "z"
				} else if (args[0] = 26) {
					args[0] = "a"
				}
				const newceass = Caesar.Decipher(shift).crypt(txt);
				const newceas = newceass.substr(1);
				message.channel.send(newceas)
			}
		}
		if (command === "vigenc") {
			const password = args[0];
			if (!args[0]) {
				return message.channel.send("You must have a password! (usage: .vigenc pass text)")
			}
			const phr = args.join(' ')
			if (!phr) {
				return message.channel.send("You must have a phrase! (usage: .vigenc pass text)")
			}
			const vigvig = Vigenere.Cipher(password).crypt(phr);
			message.channel.send(vigvig)
		}
		if (command === "vigdec") {
			const password = args[0];
			if (!args[0]) {
				return message.channel.send("You must have a password! (usage: .vigdec pass text)")
			}
			const phr = args.join(' ')
			if (!phr) {
				return message.channel.send("You must have a phrase! (usage: .vigdec pass text)")
			}
			const vigvg = Vigenere.Decipher(password).crypt(phr);
			message.channel.send(vigvg)
		}
		if (command === "rot5enc") {
			const txt = args.join(' ')
			const rfive = ROT5.Cipher().crypt(txt);
			message.channel.send(rfive)
		}
		if (command === "rot13enc") {
			const txt = args.join(' ')
			const rthirteen = ROT13.Cipher().crypt(txt);
			message.channel.send(rthirteen)
		}
		if (command === "rot18enc") {
			const txt = args.join(' ')
			const r18 = ROT18.Cipher().crypt(txt);
			message.channel.send(r18)
		}
		if (command === "rot47enc") {
			const txt = args.join(' ')
			const rr4 = ROT47.Cipher().crypt(txt);
			message.channel.send(rr4)
		}
		if (command === "rot5dec") {
			const txt = args.join(' ')
			const rrr = ROT5.Decipher().crypt(txt);
			message.channel.send(rrr)
		}
		if (command === "rot13dec") {
			const txt = args.join(' ')
			const rrrr = ROT13.Decipher().crypt(txt);
			message.channel.send(rrrr)
		}
		if (command === "rot18dec") {
			const txt = args.join(' ')
			const rrrrr = ROT18.Decipher().crypt(txt);
			message.channel.send(rrrrr)
		}
		if (command === "rot47dec") {
			const txt = args.join(' ')
			const rrrrrr = ROT47.Decipher().crypt(txt);
			message.channel.send(rrrrrr)
		}
		if (command == "ttb64") {
			const jj = args.join(' ');
			var bytes = utf.encode(jj);
			var encoded = base64.encode(bytes);
			message.channel.send(encoded);
		}
		if (command == "b64tt") {
			const jj = args.join(' ');
			var bytes = utf.encode(jj);
			var decoded = base64.decode(bytes);
			message.channel.send(decoded);
		}
		///end some crypto///
		if (command === "mute") {
			if (!message.member.hasPermission('KICK_MEMBERS')) {
				message.channel.send("You are pathetically helpless. Maybe ask someone who isn\n't to mute this member.")
				return
			} else {
				let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
				if (kUser.id == message.author.id) {
					return message.channel.send("Are you autistic? Stop trying to mute yourself...")
				}

				if (kUser.hasPermission('KICK_MEMBERS')) {
					return message.channel.send("Due to security reasons, please remove any administrative roles before muting this member.")
				}
				if (!kUser) {
					message.channel.send("Can't find user!");
					return

				} else {
					let kickChannel = message.guild.channels.find(`name`, "incidents");
					if (!kickChannel) return message.channel.send("Can't find incidents channel.");
					const thisRole = message.guild.roles.find('name', 'Muted')
					message.guild.member(kUser).addRole(thisRole)
					message.channel.send(kUser.toString() + "has been muted")
					let Timer = args[1];

					if (!args[1]) {
						return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
					}

					if (args[1] <= 0) {
						return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
					}

					message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

					setTimeout(function() {
						message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + kUser.toString() + "Has been Unmuted")
						message.guild.member(kUser).removeRole(thisRole)
					}, ms(Timer));
				}
			}
		}
		if (command === "ping") {
			const m = await message.channel.send("Ping?");
			const answers = [
				"A porta potty in the Sajara Desert",
				"Utopia",
				"Bugs Bunny's Rabbit Hole",
				"My moms basement",
				"NASA's private server",
				"Santa's sleigh",
				"That thugs wallet",
			]
			const namaste = [
				"A dog",
				"Jeff",
				"A ••••• wit a rocket launcha",
				"The lost land of Atlantis",
				"That one guy",
				"My money",
			]
			const randomAnswer = await answers[Math.floor(Math.random() * answers.length)];
			const randomNamaste = await namaste[Math.floor(Math.random() * answers.length)];
			m.edit(("", {
				embed: new Discord.RichEmbed()
					.setTitle("Pong")
					.setColor("RANDOM")
					.setAuthor("PONGGGG", client.user.avatarURL)
					.setFooter("PONGGG")
					.addField(".", `Pong! It took ${m.createdTimestamp - message.createdTimestamp}ms to find ***${randomNamaste}*** in ***${randomAnswer}*** after ${Math.round(client.ping)} counts of felony!!`)
			}))
		};

		if (command === "morly") {
			message.delete().catch(O_o => {});
			const oldMessage = args.join(" ");
			const a = oldMessage.replace(/z/g, ",,,,,,");
			const b = a.replace(/y/g, ",,,,,'''''");
			const c = b.replace(/x/g, ",,,,,''''");
			const d = c.replace(/w/g, ",,,,,'''");
			const e = d.replace(/v/g, ",,,,,''");
			const f = e.replace(/u/g, ",,,,,'");
			const g = f.replace(/t/g, ",,,,'''''");
			const h = g.replace(/s/g, ",,,,''''");
			const i = h.replace(/r/g, ",,,,'''");
			const j = i.replace(/q/g, ",,,,''");
			const k = j.replace(/p/g, ",,,,'");
			const l = k.replace(/o/g, ",,,'''''");
			const m = l.replace(/n/g, ",,,''''");
			const n = m.replace(/m/g, ",,,'''");
			const o = n.replace(/l/g, ",,,''");
			const p = o.replace(/k/g, ",,,'");
			const q = p.replace(/j/g, ",,'''''");
			const r = q.replace(/i/g, ",,''''");
			const s = r.replace(/h/g, ",,'''");
			const t = s.replace(/g/g, ",,''");
			const u = t.replace(/f/g, ",,'");
			const v = u.replace(/e/g, ",'''''");
			const w = v.replace(/d/g, ",''''");
			const x = w.replace(/c/g, ",'''");
			const y = x.replace(/b/g, ",''");
			const z = y.replace(/a/g, ",'");
			const zero = z.replace(/0/g, ",");
			const one = zero.replace(/1/g, "',");
			const two = one.replace(/2/g, "',,");
			const three = two.replace(/3/g, "',,,");
			const four = three.replace(/4/g, "',,,,");
			const five = four.replace(/5/g, "'',");
			const six = five.replace(/6/g, "'',,");
			const seven = six.replace(/7/g, "'',,,");
			const eight = seven.replace(/8/g, "'',,,,");
			const nine = eight.replace(/9/g, "'',,,,,");
			const space = nine.replace(/ /g, ";;;");
			message.channel.send(space);
		}

		if (command == "alg") {
			const variable = args[0]
			if (!args[0]) {
				message.channel.send("Please enter a variable to solve for! If you have no variable, please enter variable value eqn (x 4 5x^30)")
			}
			if (!args) {
				message.channel.send("Please enter a variable and eqn for me to solve. ```Example: \n  .alg y mx+b-y \n Output: mx+b \n Example 2: \n 4 x 1+x \n Output: 5```")
			}
			const value = args[1]
			const vc1 = args.join(" ")
			var check = 0
			var a = (vc1.match(/a/g) || []).length;
			var b = (vc1.match(/b/g) || []).length;
			var c = (vc1.match(/c/g) || []).length;
			var d = (vc1.match(/a/g) || []).length;
			var e = (vc1.match(/a/g) || []).length;
			var f = (vc1.match(/a/g) || []).length;
			var g = (vc1.match(/a/g) || []).length;
			var h = (vc1.match(/a/g) || []).length;
			var i = (vc1.match(/a/g) || []).length;
			var j = (vc1.match(/a/g) || []).length;
			var k = (vc1.match(/a/g) || []).length;
			var l = (vc1.match(/a/g) || []).length;
			var m = (vc1.match(/a/g) || []).length;
			var n = (vc1.match(/a/g) || []).length;
			var o = (vc1.match(/a/g) || []).length;
			var p = (vc1.match(/a/g) || []).length;
			var q = (vc1.match(/a/g) || []).length;
			var r = (vc1.match(/a/g) || []).length;
			var s = (vc1.match(/a/g) || []).length;
			var t = (vc1.match(/a/g) || []).length;
			var u = (vc1.match(/a/g) || []).length;
			var v = (vc1.match(/a/g) || []).length;
			var w = (vc1.match(/a/g) || []).length;
			var x = (vc1.match(/a/g) || []).length;
			var y = (vc1.match(/a/g) || []).length;
			var z = (vc1.match(/a/g) || []).length;
			check = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w + x + y + z
			if (!args[2]) {
				console.log(CQ(vc1).solve(variable))
				message.channel.send("Logged answer for variable solve.")
			} else {
				console.log(CQ(vc1).nsolve(value, variable))
				message.channel.send("Logged answer for numerical solve.")
			}
		}
		if (command === "uptime") {
			message.channel.send("The uptime is **" + moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]') + "**")
		}
		if (command === "userinfo") {
			const answers = [
				"A porta potty in the Sajara Desert",
				"Utopia",
				"Bugs Bunny's Rabbit Hole",
				"My moms basement",
				"NASA's private server",
				"Santa's sleigh",
				"That thugs wallet",
				"A hut in North Africa",
				"John Wicks backyard",
				"Jabbas Rancor Pit",
				"The Sewers",
				"An abandoned space shuttle.",
				"A Hobos box",
				"The Krackens Belly"
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

			let user = message.mentions.users.first()
			if (!user) {
				return message.channel.send(":x: Unknown user!")
			}
			message.channel.send(("", {
				embed: new Discord.RichEmbed()
					.setTitle("**Userinfo**")
					.setColor("#00D4FF")
					.setThumbnail(user.avatarURL)
					.setDescription("Username - **" + user.username + "**\nDiscrim - **" + user.discriminator + "**\nID - **" + user.id + "**\nStatus - **" + user.presence.status + "**\nCreated at - **" + user.createdAt + "**\n")
					.setFooter(`LAST SEEN IN ${randomAnswer}`)
			}));
		}
		if (command === "guildlist") {
			if (message.author.id != "347885325940424714") {
				message.channel.send("Sorry bud, This command is a bit spammy, and is only for my creator, Daemonium.")
				return
			} else {
				message.channel.send(client.guilds.forEach(g => {
					message.channel.send(g.name);
				}))
			}
		}
		if (command === "help") {
config.mssauth = message.author.id
			const back = "◀"
			const next = "▶"
			const end = "❗"
			const funembed = new Discord.RichEmbed()
		.setFooter("fun")
		.setTitle("Fun Commands")
                .addField("8ball:", " This Command Is An 8Ball Usage: .8ball [YesOrNo Question]")
                .addField("Cowsay:", " Moooooo Usage: .cowsay [text]")
                .addField("Insult:", " Instults a given person (Still under develeopment) Usage: .insult [name] ")
                .addField("Bomb:", " Sends A Bomb Usage: .bomb")
                .addField("Clapify:", " Clapifies That Text! Usage: .clapify [text]")
                .addField("Urban:", " Looks Up A String On Urban Dictionary Usage: .Urban [string] ")
                .addField("Fireworks:", " Sends Some Cool Fireworks Usage: .fireworks This was requested by a user")
                .addField("Forcecrush:", " Force Crush! Usage: .forcecrush")
                .addField("Fusrodah:", " Fus.....RO DAH!!! Usage: Call To The Ancients With .fusrodah")
                .addField("Lovecalc:", " Calculates The Chances Of Love Between Any Two Objects! Usage: .lovecalc [object1] [object2] ")
                .addField("Magicify: ", " Turns Your Message Into An Ugly Embed! Usage: .magicify [text] ")
                .addField("Meme:", " Sends Some Dank Memes! Usage: .meme")
                .addField("O:", " Swotchos Oll Vowols On O Strong To 'o' Usogo: .o [toxt] REQUESTED BY USER.... i dont know why though")
                .addField("Reverse:", " Reverses A String Usage: .reverse [words] ")
                .addField("Rickroll:", ".... Usage: .rickroll ")
                .addField("Say:", " Makes The Bot Say What You Say. Usage: .say [words] ")
                .addField("asigh:", " :frowning: Usage: .asigh")
                .addField("Ss", "Compete With Other Users To Set The Status Of My Bot! Usage: .ss")
		.setColor("#660000")
			/////////////////////////
			/////////////////////////
			const musicembed = new Discord.RichEmbed()
				.setFooter("music")
				.setTitle("Music Commands")
				.addField("Np:", " Shows What Is Now Playing Usage: .np",true)
				.addField("Pause:", " Pauses Music Usage: .pause",true)
				.addField("Play:", " Plays Music. Usage: .play  [song Name], Then Select From List By Typing The Corresponding Number (e.g. For Song 2 Type 2) ",true)
				.addField("Queue:", "Shows Music Queue Usage: .queue",true)
				.addField("Resume:", " Resumes A Paused Song. Usage: .resume",true)
				.addField("Skip:", " Skips A Song Usage: .skip",true)
				.addField("Stop:", " Stops Music From Playing Usage: .stop",true)
				.addField("Vol:", " Volume Usage: .vol [number]",true)
			//////////////////////////
			//////////////////////////
			const modembed = new Discord.RichEmbed()
				.setTitle("Moderation:")
				.setFooter("Moderation")
				.addField("Ban:", " Bans A User MOD ONLY Usage: .ban [@user] [Reason]",true)
				.addField("Kick:", " Kicks A Member. Usage: .kick @member [reason]",true)
				.addField("Purge:", " Deletes Messages MOD ONLY Usage: .purge [number<100]",true)
				.addField("Report:", " Reports A Member Usage: .report [@member] [reason]",true)
				.addField("Role:", " Ignore This Command It Is In Maintenance",true)
			////////////////////////
			////////////////////////
			const ciphembed = new Discord.RichEmbed()
				.setTitle("Ciphers:")
				.setFooter("Ciphers")
				.addField("ttb64: ", "text to base 64 Usage: .ttb64 string",true)
				.addField("b64tt:", " base 64 to text Usage: .b64tt string",true)
				.addField("rotenc[5, 13, 18, and 47]:", " uses either rot 5,13,18, or 47 to encode some text. Usage: .rotenc47 text",true)
				.addField(".rotdec[5, 13, 18, and 47]:", " Uses rot to decode text. Usage: .rotdec47 text",true)
				.addField(".caesarenc:", " enciphers text using caesar. Usage: .caesar [shift] [text] eg:.caesarenc 3 hello, or .caesarenc c hello",true)
				.addField(".caesardec:", " deciphers text using caesar. Usage: .caesardec [shift] [text] eg:.caesardec 3 hello, or .caesardec c hello",true)
				.addField(".vigenc:", " uses vig on text. Usage: .vigenc [key] [hello]",true)
				.addField(".vigdec:", " uses vig on text. Usage: .vigdec [key] [hello]",true)
				.addField(".hexenc:", " turns ascii to hexadecimal Usage: .hexenc string",true)
				.addField(".hexdec:", " converts hexadecimal to ascii Usage: .hexdec string",true)
			//////////////////////
			/////////////////////
			const utilembed = new Discord.RichEmbed()
				.setTitle("Utilities:")
				.setFooter("Utils")
				.addField("Uptime:", " Shows Uptime Usage: .uptime",true)
				.addField("Guildlist:", " Shows a list of guilds the bot is in. Usage: .guildlist",true)
				.addField("Userinfo:", " displays info on a user Usage: .userinfo [@user]",true)
				.addField("Botinfo:", " Displays Info On The Bot Usage: .botinfo",true)
				.addField("Bugreport:", " Reports A Bug Directly To The Dev Of The Bot (A.K.A. ME) Usage: .bugreport [Bug]",true)
				.addField("Calc:", " Calculates The Value Of An Expression Usage: .calc [expression E.g. 1+1]",true)
				.addField("Help:", " Ehm, Idk What To Tell You. Usage: How Are You Even Here?",true)
				.addField("Haste:", " Adds A String To Hastebin Usage: .haste [String (A.K.A Words)]",true)
				.addField("Inv:", " Shows Invite Links For My Bot, And The Support Server. Usage: .inv",true)
				.addField("Line:", " Draws The LINE! Usage: .line",true)
				.addField("Ping:", " Pings Places All Around The World Usage: .ping",true)
				.addField("Schedule:", " Schedules A Message. Usage: .schedule [Part 1 Of Message] [Part 2 Of Message] [time]",true)
				.addField("Serverinfo:", " Displays Info On The Server Usage: .serverinfo",true)
				.addField("Timer:", " Sets A Timer. Usage: .timer [time In Ms, S, M, Or H.]",true)
				.addField("Remspace:", " Removes all spaces from a string. Usage: .remspace [text]",true)
				.addField(".gprime:", " gets all prime numbers up to the supplied value. Usage: .gprime number",true)
			///////////////////
			///////////////////
			const progembed = new Discord.RichEmbed()
				.setTitle("Programming tools:")
				.setFooter("Programming")
				.addField("Batch:", " Obfuscates some batch script. (you will need to make a key list for it.) Usage: .batch [batch code here]")
				.addField("ntl:", " Basic universal obfuscation (this is for the bot dev only. If you can get how it works, then cheers) Usage: .ntl [text]")
			///////////////////
			///////////////////
			const nsfwembed = new Discord.RichEmbed()
				.setTitle("NSFW:")
				.setFooter("NSFW")
				.addField("Ass:", " Shows Some Ass ;) NSFW ONLY Usage: .ass",true)
				.addField("Bond:", " Bondage NSFW ONLY Usage: .bond",true)
				.addField("Hentai:", " Looks Up Some Hentai Babes For You Weebs Out There Usage: .hentai",true)
				.addField("Nsfw:", " Sends Some Standard NSFW Usage: .nsfw",true)
			var pollTitle = await message.channel.send({
				embed: funembed
			})
			await pollTitle.react(back);
			await pollTitle.react(next);
			await pollTitle.react(end);
			const filter = (reaction) => reaction.emoji.name === '▶';
			const collector = pollTitle.createReactionCollector(filter, {
				time: 60000
			});

			collector.on('collect', r => {
if(config.mssauth != message.author.id){
return
}else{
				console.log(`Collected ${r.emoji.name}`)
				config.bindex = Math.floor(config.bindex + 1)
				fs.writeFile("./config.json", JSON.stringify(config), function(err) {
					if (err) return console.log(err);
					console.log(JSON.stringify(config));
					console.log('writing to ' + "./config.json");
				});
				if (config.bindex == 0) {
					pollTitle.edit({
						embed: funembed
					});
				}
				if (config.bindex == 1) {
					pollTitle.edit({
						embed: musicembed
					})
				}
				if (config.bindex == 2) {
					pollTitle.edit({
						embed: modembed
					});
				}
				if (config.bindex == 3) {
					pollTitle.edit({
						embed: ciphembed
					})
				}
				if (config.bindex == 4) {
					pollTitle.edit({
						embed: utilembed
					});
				}
				if (config.bindex == 5) {
					pollTitle.edit({
						embed: progembed
					});
				}
				if (config.bindex == 6) {
					pollTitle.edit({
						embed: nsfwembed
					})
				}
				if (config.bindex == 7) {
					config.bindex = Math.floor(config.bindex - 1)
				}
}
			});
			collector.on('end', collected => {});

			const filter1 = (reaction) => reaction.emoji.name === '◀';
			const collector1 = pollTitle.createReactionCollector(filter1, {
				time: 60000
			});
			collector1.on('collect', r => {
if(config.mssauth != message.author.id){
return
}else{
				console.log(`Collected ${r.emoji.name}`)
				config.bindex = Math.floor(config.bindex - 1)
				if (config.bindex == -1) {
					config.bindex = Math.floor(config.bindex + 2)
					fs.writeFile("./config.json", JSON.stringify(config), function(err) {
						if (err) return console.log(err);
						console.log(JSON.stringify(config));
						console.log('writing to ' + "./config.json");
					})
				}
				fs.writeFile("./config.json", JSON.stringify(config), function(err) {
					if (err) return console.log(err);
					console.log(JSON.stringify(config));
					console.log('writing to ' + "./config.json");
				});

				if (config.bindex == 0) {
					pollTitle.edit({
						embed: funembed
					});
				}
				if (config.bindex == 1) {
					pollTitle.edit({
						embed: musicembed
					})
				}
				if (config.bindex == 2) {
					pollTitle.edit({
						embed: modembed
					});
				}
				if (config.bindex == 3) {
					pollTitle.edit({
						embed: ciphembed
					})
				}
				if (config.bindex == 4) {
					pollTitle.edit({
						embed: utilembed
					});
				}
				if (config.bindex == 5) {
					pollTitle.edit({
						embed: progembed
					});
				}
				if (config.bindex == 6) {
					pollTitle.edit({
						embed: nsfwembed
					})
				}
				if (config.bindex == -1) {
					config.bindex = Math.floor(config.bindex + 2)
				}
}
			});
			collector1.on('end', collected => {

			});
			/*if(reactions.get(next).count-1 == 1){
			bindex ++
			}
			if(reactions.get(back).count-1 == 1){
			bindex --
			}
			if(reactions.get(end).count-1 == 1){
			message.delete()
			}*/


			/////////////////////////////////////////////////

			//////////////////////////////////////////////////


			message.channel.send(`For updates on the bot, or to see whats new with it, please type .Announcements`);
		}

		if (command === "runict") {
			const oldMessage = args.join(" ");
			const a = oldMessage.replace(/ᚪ/g, " A ");
			const a1 = a.replace(/ᚫ/g, " AESC ");
			const a2 = a1.replace(/ᛉ/g, " ALGIZ/EOLHX ");
			const a3 = a2.replace(/ᚨ/g, " A ");
			const a4 = a3.replace(/ᛒ/g, " B ");
			const a5 = a4.replace(/ᛍ/g, " C ");
			const a6 = a5.replace(/ᛣ/g, " CALC ");
			const a7 = a6.replace(/ᛤ/g, " CEALC ")
			const a8 = a7.replace(/ᚳ/g, " CEN ");
			const a9 = a8.replace(/ᛢ/g, " CWEORTH ");
			const a10 = a9.replace(/ᛑ/g, " D ");
			const b1 = a10.replace(/ᛞ/g, " D ");
			const b2 = b1.replace(/ᛛ/g, " DottedL ");
			const b3 = b2.replace(/ᛀ/g, " DottedN ");
			const b4 = b3.replace(/ᛔ/g, " DottedP ");
			const b5 = b4.replace(/ᛂ/g, " E ");
			const b6 = b5.replace(/ᛠ/g, " EAR ");
			const b7 = b6.replace(/ᛖ/g, " E ");
			const b8 = b7.replace(/ᚶ/g, " ENG ");
			const b9 = b8.replace(/ᚧ/g, " ETH ");
			const b10 = b9.replace(/ᚠ/g, " F ");
			const c1 = b10.replace(/ᚵ/g, " G ");
			const c2 = c1.replace(/ᚸ/g, " GAR ");
			const c3 = c2.replace(/ᚷ/g, " G ");
			const c4 = c3.replace(/ᛄ/g, " ?? ");
			const c5 = c4.replace(/ᚻ/g, " H ");
			const c6 = c5.replace(/ᚺ/g, " H ");
			const c7 = c6.replace(/ᛨ/g, " YR ");
			const c8 = c7.replace(/ᛝ/g, " ING ");
			const c9 = c8.replace(/ᛜ/g, " INGWAZ ");
			const c10 = c9.replace(/ᛡ/g, " IOR ");
			const d1 = c10.replace(/ᛁ/g, " I ");
			const d2 = d1.replace(/ᛇ/g, " IWAZ/EOH ");
			const d3 = d2.replace(/ᛃ/g, " J ");
			const d4 = d3.replace(/ᚴ/g, " K ");
			const d5 = d4.replace(/ᚲ/g, " KAUNA ");
			const d6 = d5.replace(/ᛚ/g, " L ");
			const d7 = d6.replace(/ᛅ/g, " AE ");
			const d8 = d7.replace(/ᚼ/g, " H ");
			const d9 = d8.replace(/ᛘ/g, " M ");
			const d10 = d9.replace(/ᚬ/g, " O ");
			const e1 = d10.replace(/ᛦ/g, " YR ");
			const e2 = e1.replace(/ᛗ/g, " M ");
			const e3 = e2.replace(/ᚾ/g, " N ");
			const e4 = e3.replace(/ᚮ/g, " O ");
			const e5 = e4.replace(/ᚯ/g, " OE ");
			const e6 = e5.replace(/ᚰ/g, " ON ");
			const e7 = e6.replace(/ᛕ/g, " P ");
			const e8 = e7.replace(/ᚩ/g, " O ");
			const e9 = e8.replace(/ᛟ/g, " O ");
			const e10 = e9.replace(/ᛈ/g, " P ");
			const f1 = e10.replace(/ᛩ/g, " Q ");
			const f2 = f1.replace(/ᚱ/g, " R ");
			const f3 = f2.replace(/ᛆ/g, " AR/A ");
			const f4 = f3.replace(/ᛓ/g, " BJARKAN/B ");
			const f5 = f4.replace(/ᚽ/g, " HAGALL/H ");
			const f6 = f5.replace(/ᛙ/g, " M ");
			const f7 = f6.replace(/ᚿ/g, " N ");
			const f8 = f7.replace(/ᚭ/g, " O ");
			const f9 = f8.replace(/ᛌ/g, " S ");
			const f10 = f9.replace(/ᛐ/g, " TYR/T ");
			const g1 = f10.replace(/ᛧ/g, " YR ");
			const g2 = g1.replace(/ᛋ/g, " S ");
			const g3 = g2.replace(/ᛊ/g, " SOWILO/S ");
			const g4 = g3.replace(/ᛥ/g, " STAN ");
			const g5 = g4.replace(/ᚦ/g, " TH ");
			const g6 = g5.replace(/ᛏ/g, " TIWAZ/TIR/TYR/T ");
			const g7 = g6.replace(/ᚢ/g, " URUZ/UR/U ");
			const g8 = g7.replace(/ᚡ/g, " V ");
			const g9 = g8.replace(/ᚥ/g, " W ");
			const g10 = g9.replace(/ᚹ/g, " WUNJO/WYNN/W ");
			const h1 = g10.replace(/ᛪ/g, " X ");
			const h2 = h1.replace(/ᚤ/g, " Y ");
			const h3 = h2.replace(/ᚣ/g, " YR ");
			const h4 = h3.replace(/ᛎ/g, " Z ");
			const h5 = h4.replace(/᛬/g, " : ");
			const h6 = h5.replace(/᛫/g, " . ");
			const h7 = h6.replace(/ᛮ/g, " 17 ");
			const h8 = h7.replace(/ᛯ/g, " 18 ");
			const h9 = h8.replace(/ᛰ/g, " 19 ");
			const h10 = h9.replace(/᛭/g, " + ");
			message.channel.send(h10);
			hastebin(h10, "js").then(r => {
				var hastLink = r
				const hastEmb = new Discord.RichEmbed()
					.setColor(0xFFF000)

					.setURL(hastLink)
					.addField('Link: ', `${hastLink}`)
				message.channel.send({
					embed: hastEmb
				})
			}).catch(console.error);
			message.channel.send("Runict by Daemonium");
		}
		if (command === "Lyons2") {
			const oldMessage = args.join(" ");
			message.delete().catch(O_o => {});
			const a = oldMessage.replace(/y/g, "ab");
			const b = a.replace(/x/g, "za");
			const c = b.replace(/w/g, "yz");
			const d = c.replace(/v/g, "xy");
			const e = d.replace(/u/g, "wx");
			const f = e.replace(/t/g, "vw");
			const g = f.replace(/s/g, "uv");
			const h = g.replace(/r/g, "tu");
			const i = h.replace(/q/g, "st");
			const j = i.replace(/p/g, "rs");
			const k = j.replace(/o/g, "qr");
			const l = k.replace(/n/g, "pq");
			const m = l.replace(/m/g, "op");
			const n = m.replace(/l/g, "no");
			const o = n.replace(/k/g, "mn");
			const p = o.replace(/j/g, "lm");
			const q = p.replace(/i/g, "kl");
			const r = q.replace(/h/g, "jk");
			const s = r.replace(/g/g, "ij");
			const t = s.replace(/f/g, "hi");
			const u = t.replace(/e/g, "gh");
			const v = u.replace(/d/g, "fg");
			const w = v.replace(/c/g, "ef");
			const x = w.replace(/b/g, "de");
			const y = x.replace(/a/g, "cd");
			const z = y.replace(/z/g, "bc");
			message.channel.send(z);
			message.channel.send("this is the lyonsCipher V2.0");
		}
		if (command === "remspace") {
			const spacemes = args.join('');
			message.delete().catch(O_o => {});
			const z = spacemes.replace(/ /g, "");
			message.channel.send(z)
		}

		if (command === "batch") {
			const oldMessage = args.join(" ");
			message.delete().catch(O_o => {});
			const a = oldMessage.replace(/y/g, "%y%");
			const b = a.replace(/x/g, "%x%");
			const c = b.replace(/w/g, "%w%");
			const d = c.replace(/v/g, "%v%");
			const e = d.replace(/u/g, "%u%");
			const f = e.replace(/t/g, "%t%");
			const g = f.replace(/s/g, "%s%");
			const h = g.replace(/r/g, "%r%");
			const i = h.replace(/q/g, "%q%");
			const j = i.replace(/p/g, "%p%");
			const k = j.replace(/o/g, "%o%");
			const l = k.replace(/n/g, "%n%");
			const m = l.replace(/m/g, "%m%");
			const n = m.replace(/l/g, "%l%");
			const o = n.replace(/k/g, "%k%");
			const p = o.replace(/j/g, "%j%");
			const q = p.replace(/i/g, "%i%");
			const r = q.replace(/h/g, "%h%");
			const s = r.replace(/g/g, "%g%");
			const t = s.replace(/f/g, "%f%");
			const u = t.replace(/e/g, "%e%");
			const v = u.replace(/d/g, "%d%");
			const w = v.replace(/c/g, "%c%");
			const x = w.replace(/b/g, "%b%");
			const y = x.replace(/a/g, "%a%");
			const z = y.replace(/z/g, "%z%");
			hastebin(z, "js").then(r => {
				var hastLink = r
				const hastEmb = new Discord.RichEmbed()
					.setColor(0xFFF000)

					.setURL(hastLink)
					.addField('Link: ', `${hastLink}`)
				message.channel.send({
					embed: hastEmb
				})
			}).catch(console.error);
			message.channel.send("this is the batch encrypter V2.0");
		}
		if (command === "cowsay") {
			const moo = args.join(' ');
			message.channel.send("```" + "________________________________\n " + "<" + moo + ">\n " + "--------------------------------\n" + "        \\    ^__^ \n " + "        \\   (oo)\\_______\n " + "            (__)\\       )\\/\\\n " + "                ||----w ||\n " + "                ||     |\n " + "```");
		}
		if (command === "insult") {
			if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
			const a = args.join
			const answers = [
				"a bastard",
				"wicked",
				"so fat, it took Thanos 2 snaps to kill her",
				"so ugly, even Dr. Frankenstein turned you down",
				"such a weeb that i fucked ur mum so hard her pussy turned into a dick and  then i fuked ur dads asshole so hard it turned into a pussy then they cucked me and fuked each other whilst i was rubbing my dick until i cummed into ur mums dick who used that semen as lube but she also cummed into ur dads pussy. 6 months later ur little sister came out whomst ur parents groomed until she hit puberty and they continued to fuk her everyday until she gave birth to you",
				"not worth even the laziest of insults",
				"not good",
				"noob Sauce",
				"so fat the flash tried to run around you but he died from age before he could get halfway",
				"a cocain addicted cow",
				"depressed cuz ur mom gay lol",
				"mmmmmmmmmmmmmmmmmmmmmmmmmmmGay"
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			if (!args) {
				message.channel.send("You are " + randomAnswer + ".")
				return
			} else {
				message.channel.send(args + " is" + randomAnswer + ".")
			}
		}
		if (command === "8ball") {
			const answers = [
				"Yes",
				"Not a Chance!",
				"No",
				"Maybe",
				"Could Be!",
				"Yes, but only on Tuesdays",
				"Ummmm I forgot?",
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			message.channel.send(randomAnswer);
		}
		if (command === "bunny") {
			var subreddits = [
				'rabbits'
			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("Bunnies")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}
		if (command === "walrus") {
			var subreddits = [
				'walrus'
			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("Walruses!")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}
		if (command === "cute") {
			var subreddits = [
				'AnimalPorn',
				'rabbits',
				'pugs'
			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("Animals :)")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}
		////NSFW////
		if (command === "ass") {
			if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

			var subreddits = [
				'facedownassup',
				'assinthong',
				'asstastic'
			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("xD")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}
		if (command === "bond") {
			if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

			var subreddits = [
				'hentaibondage',
				'Bondage',
				'Dominated'


			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("xD")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}
		if (command == "danbooru") {
			const Danbooru = require('danbooru')
			// Perform a search for popular image posts
			const booru = new Danbooru()
			const hello = args.join(' ')
			booru.posts({
				tags: 'order:rank' + `${hello}.toString()`
			}).then(posts => {
				// Select a random post from posts array
				const index = Math.floor(Math.random() * posts.length)
				const post = posts[index]
				// Get post's url and create a filename for it
				const url = booru.url(post.file_url)
				const name = `${post.md5}.${post.file_ext}`
				message.channel.send(url)
			})
		}

		if (command === "nsfw") {
			if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

			var subreddits = [
				'NSFW_Wallpapers',
				'SexyWallpapers',
				'HighResNSFW',
				'nsfw_hd',
				'UHDnsfw'
			]
			var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

			randomPuppy(sub)
				.then(url => {
					const embed = new Discord.RichEmbed()
						.setColor("RANDOM")
						.setAuthor("4k", client.user.avatarURL)
						.setFooter("xD")
						.setImage(url);
					message.channel.send({
						embed
					});
				})
		}

		////NSFW////
		////Moderation////
		if (command === "ban") {
			let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!kUser) return message.channel.send("Can't find user!");
			let kReason = args.join(" ").slice(22);
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
			if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
			let kickChannel = message.guild.channels.find(`name`, "incidents");
			if (!kickChannel) return message.channel.send("Can't find incidents channel.");
			if (message.mentions.users.size < 1) return message.reply("You must mention someone in order to ban them!");
			if (!message.guild.member(kUser).kickable) return message.reply("I can't ban the owner!");
			message.guild.member(kUser).ban(kReason);
			kickChannel.send(`${kUser} Was banned by ${message.author} for ${kReason}`)
		}
		if (command === "kick") {
			let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if (!kUser) return message.channel.send("Can't find user!");
			let kReason = args.join(" ").slice(22);
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No can do pal!");
			if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
			let kickChannel = message.guild.channels.find(`name`, "incidents");
			if (!kickChannel) return message.channel.send("Can't find incidents channel.");
			message.guild.member(kUser).kick(kReason);
			kickChannel.send("kicked" + `${kUser} at the order of ${message.author} with the reasoning: ${kReason}`);
			return;
		}
		/*const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
 
  message.channel.send({embed});
		*/
		if (command === "bugreport") {

			try {
				function clean(text) {
					if (typeof(text) === 'string')
						return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
					else
						return text;
				}
				const bug = args.join(" ")
				if (!bug) return message.channel.send('Please specify a bug!')
				const sendingstuff = "Success!\n" + `${message.author.username}` + " Has successfully sent a report to Daebot support!\n" + "***REPORT MESSAGE: ***" + `${bug}` + "\n***ID: ***" + `${message.author.id}` + "***\nUsername: ***" + `${message.author.username}` + "***\nTag:   ***" + `${message.author.tag}` + "\n***Origin:   ***\n" + "***Server:   ***" + `${message.guild.name}` + "   " + `(${message.guild.id})` + "\n***Channel:   ***" + `${message.channel.name}` + "  " + `(${message.channel.id})`
				const content = sendingstuff
				const id = '504451038082891807';
				new Promise((resolve, reject) => {
					superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
						.set('Authorization', `Bot ${client.token}`).send({
							content
						})
						.end((err, res) => {
							if (err) {
								reject(err);
								const errembed = new Discord.RichEmbed()
									.setTitle("ERROR!!!")
									.setColor(800020)
									.setDescription("An unknown error has been encountered. Please type .inv and join the support server to report it.")
									.setFooter('There was an error while sending your bug report to Daebot Support.')
									.setImage('https://us.123rf.com/450wm/jemastock/jemastock1708/jemastock170808401/84010839-red-background-poster-with-skull-and-bones-error-oops-vector-illustration.jpg?ver=6')
									.setTimestamp()
								message.channel.send(errembed)
							} else {
								resolve(res);
								const succembed = new Discord.RichEmbed()
									.setTitle("Success!")
									.addField("ReportFrom:", `${message.author.username}` + "Has successfully sent a report to Daebot support!")
									.addField("***REPORT MESSAGE:   ***", +bug)
									.addField("UserData: ", "***ID:*** " + `${message.author.id}` + "***\nUsername:***   " + `${message.author.username}` + "***\nTag:   ***" + `${message.author.tag}`)
									.addBlankField(true)
									.addField("***Origin:***\n", "***Server:   ***" + `${message.guild.name}` + `(${message.guild.id})` + "\n***Channel:   ***" + `${message.channel.name}` + "   " + ` (${message.channel.id})`)
								message.channel.send(succembed)
							}
						});
				});
			} catch (err) {
				console.log(err)
			}
		}
		if (command === "bugreply") {
			if (message.author.id != '347885325940424714') {
				return message.channel.send("You are not my Liege")
			} else {
				try {
					function clean(text) {
						if (typeof(text) === 'string')
							return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
						else
							return text;
					}
					const bug = args.join(" ")
					if (!bug) return message.channel.send('Please specify a bug!')
					const content = clean(`${message.author.tag} Replied to your report:\n${bug}\nServer: **${message.guild.name}**\nSID: **${message.guild.id}**`);
					const id = args[0];
					new Promise((resolve, reject) => {
						superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
							.set('Authorization', `Bot ${client.token}`).send({
								content
							})
							.end((err, res) => {
								if (err) {
									reject(err);
									message.reply('There was an error while sending your reply.');
								} else {
									resolve(res);
									message.channel.send(`:white_check_mark: **${message.author.username}**, your reply has been submitted sent. Thank you!.`);
								}
							});
					});
				} catch (err) {
					console.log(err)
				}
			}
		}

		if (command === "botinfo") {
			let bicon = client.user.displayAvatarURL;
			let botembed = new Discord.RichEmbed()
				.setDescription("Bot Information")
				.setColor("#15f153")
				.setThumbnail(bicon)
				.addField("users", `with ${client.users.size} users`)
				.addField("channels", `in ${client.channels.size} channels`)
				.addField("Servers", `in ${client.guilds.size} servers`)
				.addField("Bot Name", client.user.username)
				.addField("Created On", client.user.createdAt);

			return message.channel.send(botembed);
		}
		if(command == "serverinfo"){	
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created On${day}.${month}.${year}`)
   .setColor("#660000")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Name", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Best Bot", "DaeBot... Without a doubt", true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Members", message.guild.memberCount, true)
   .addField("Not Bots", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Users Online", online.size, true)
   .addField("Roles", message.guild.roles.size, true);
   message.channel.send(serverembed);

}
		/*
        if (command === "mute") {
            let reason = args.slice(1).join(' ');
            let member = message.mentions.members.first();
            let modlog = message.guild.channels.find('name', 'mod-log');
            let muteRole = message.guild.roles.find('name', 'Muted');
            if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
            if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
            if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
            if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
            const embed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .setTimestamp()
                .setDescription(`**Action:** Un/mute\n**Target:** ${member.user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
            if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I do not have the correct permissions.').catch(console.error);
            if (member.roles.has(muteRole.id)) {
                member.removeRole(muteRole).then(() => {
                        client.channels.get(modlog.id).send({
                            embed
                        }).catch(console.error);
                    })
                    .catch(e => console.error("Cannot remove muted role: " + e));
            } else {
                member.addRole(muteRole).then(() => {
                        client.channels.get(modlog.id).send({
                            embed
                        }).catch(console.error);
                    })
                    .catch(e => console.error("Cannot add muted role: " + e));
            }
        };
        if (command === "unmute") {
            let guild = message.guild;
            let args = message.content.split(' ').slice(1);
            let argresult = args.join(' ');
            let reason = args;
            message.delete(1000);
            if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
                return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`').catch(e => logger.error(e));
            }
            if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
                return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`').catch(e => logger.error(e));
            }
            let user = message.mentions.users.first();
            let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
            if (message.mentions.users.size < 1) {
                return message.reply('You need to mention someone to unmute him!.');
            }
            message.guild.member(user).removeRole(muteRole).then(() => {
                message.channel.send(`You've succesfully unmuted ${user}`);
            });
        };
*/
		////Moderation////
		///Fun///
		if (command === "bomb") {
			const answers = [
				"https://giphy.com/gifs/XDLJpjzyw76Sc",
				"https://giphy.com/gifs/cartoon-explosion-nn2xFuRUFqXNS",
				"https://media.giphy.com/media/Qw4X3FkHjXDWr9p3bIk/giphy.gif",
				"https://media3.giphy.com/media/3o85xoHuw9GowpnyUg/giphy.gif",
				"https://i.gifer.com/298c.gif",
				"https://thumbs.gfycat.com/LoathsomeReliableChicken-size_restricted.gif",
				"https://media0.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif",
				"http://2.bp.blogspot.com/-xCrGhX8sJRQ/VAJPyz0ct3I/AAAAAAAAD7I/rWfaP-o7SUQ/s1600/time%2Bbomb.gif",
				"https://cdn.dribbble.com/users/149082/screenshots/1041104/bomb-explosion.gif",
				"https://mir-s3-cdn-cf.behance.net/project_modules/disp/21f78d23126231.5604767a04f53.gif",
				"https://thumbs.gfycat.com/CheapSeriousAfricanbushviper-max-1mb.gif",
				"https://i.gifer.com/9pHv.gif",
				"https://media.giphy.com/media/l0IxYWDltdHEqujnO/giphy.gif",
				"http://www.zombietime.com/mohammed_image_archive/derivative_works/tb.gif",
				"https://media3.giphy.com/media/3oEjHKPPlmQlGXfeLK/giphy.gif",
				"https://i.gifer.com/DzW.gif",
				"https://media.giphy.com/media/QAHeA9pX29lLi/giphy.gif",
				"https://media.giphy.com/media/IlNHcvyO6JCYE/giphy.gif",
				"https://uploads.disquscdn.com/images/230b7c1cf5db1cc3a67729fd545ecec4be5401245f172e3c6a0eefdd67e2bd22.gif",

			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			message.channel.send(randomAnswer);

		}
		if (command === "calc") {
			console.log(`[${message.author.tag}] [${message.author.id}] did command [${command}.js]`)
			let input = args.join(" ");
			if (!input) {
				message.reply('__You must provide a equation to be solved on the calculator!__');
				return;
			}

			const question = args.join(" ");

			let answer;
			try {
				answer = math.eval(question);
			} catch (err) {
				return message.reply(`**Invalid math equation:** ${err}`);
			}

			const embed = new Discord.RichEmbed()
				.setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
				.setColor('RANDOM')
				.addField("**Question:**", question, true)
				.addField("**Answer:**", answer)

			message.channel.send({
				embed
			})
		};
		const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

		if (command === "clapify") {
			if (args.length < 1) return message.channel.send("**I need some text to clapify.** `ium clap <sentence>`")
			message.channel.send(args.map(randomizeCase).join(' '));
		}
		if (command === "urban") {
			if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
			if (!args[0]) return message.channel.send(`***Please specify some text!***`);
			let res = await urban(args.join(' ')).catch(e => {
				return message.channel.send('***Sorry, that word was not found!***');
			});

			const embed = new Discord.RichEmbed()
				.setColor('RANDOM')
				.setTitle(res.word)
				.setURL(res.urbanURL)
				.setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
				.addField('Author', res.author, true)
				.addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)
			if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
				embed.addField('Tags', res.tags.join(', '), true)
			}


			message.channel.send(embed);

		}
		if (command === "fireworks") {
			const magic = [
				"https://media.giphy.com/media/IjmMzurYulKEw/giphy.gif",
				"https://media1.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
				"http://bestanimations.com/Holidays/Fireworks/fireworks/gold-fireworks-animated-gif.gif",
				"https://media.giphy.com/media/peAFQfg7Ol6IE/giphy.gif",
				"https://media.giphy.com/media/w5f56AhubQo8w/giphy.gif",
				"http://bestanimations.com/Holidays/Fireworks/fireworks/ba-awesome-colorful-fireworks-animated-gif-image-s.gif",
				"http://bestanimations.com/Holidays/Fireworks/fireworks/ba-blue-red-fireworks-colorful-pretty-gif-pic.gif",
			]
			const randomAnswer = magic[Math.floor(Math.random() * magic.length)];
			message.channel.send(randomAnswer);
		}
		if (command === "fusrodah") {
			const answers = [
				"https://media.giphy.com/media/fJcYJWdPPPNQI/giphy.gif",
				"https://i.imgur.com/bMBpsmx.gif",
				"http://giant.gfycat.com/HospitableConcreteAtlanticridleyturtle.gif",
				"http://i.imgur.com/IuKyJ.gif",
				"http://www.gifbin.com/bin/052011/1305030514_cooling-tower-implosion.webm",
				"https://i.kinja-img.com/gawker-media/image/upload/s--1nnLdy0K--/c_scale,f_auto,fl_progressive,q_80,w_800/18s8qh8utjx9qgif.gif",
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			message.channel.send(randomAnswer);
		}
		if (command === "haste") {
			hastebin(args.join(' '), "js").then(r => {
				var hastLink = r
				const hastEmb = new Discord.RichEmbed()
					.setColor(0xFFF000)

					.setURL(hastLink)
					.addField('Link: ', `${hastLink}`)
				message.channel.send({
					embed: hastEmb
				})
			}).catch(console.error);
		}


		if (command === "line") {

			message.channel.send("`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");

		}
		if (command === "lovecalc") {
			const mss = args.join(" ");
			const answers = [
				"10%, no way man",
				"25% This could work out, just be careful",
				"10%, no way man",
				"25% This could work out, just be careful",
				"10%, no way man",
				"25% This could work out, just be careful",
				"10%, no way man",
				"25% This could work out, just be careful",
				"10%, no way man",
				"25% This could work out, just be careful",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"25% This could work out, just be careful",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"50% I wish you luck, this is both good and bad",
				"90.09099% Great Match!! Go For it!!!",
				"75% This could work! Go For it!",
				"75% This could work! Go For it!",
				"75% This could work! Go For it!",
				"75% This could work! Go For it!",
				"75% This could work! Go For it!",
				"75% This could work! Go For it!",
				"200% This is the best match ive ever seen!! Wow!!!",
				"10%, no way man",
				"25% This could work out, just be careful",
				"10%, no way man",
				"25% This could work out, just be careful",
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			message.channel.send({
				embed: {
					color: 10834749,
					fields: [{
						name: "love",
						value: mss + randomAnswer
					}, ],
					timestamp: new Date(),
					footer: {
						icon_url: client.user.avatarURL,
						text: "© DeathBot"
					}
				}
			});


		}
		if (command === "ntl") {
			const oldMessage = args.join(" ");
			message.delete().catch(O_o => {});
			const a = oldMessage.replace(/1/g, "a");
			const b = a.replace(/2/g, "b")
			const c = b.replace(/3/g, "c")
			const e = c.replace(/4/g, "d")
			const f = e.replace(/5/g, "e")
			const g = f.replace(/6/g, "f")
			const h = g.replace(/7/g, "g")
			const i = h.replace(/8/g, "h")
			const j = i.replace(/9/g, "i")
			const k = j.replace(/10/g, "j")
			const l = k.replace(/11/g, "k")
			const m = l.replace(/12/g, "l")
			const n = m.replace(/13/g, "m")
			const o = n.replace(/14/g, "n")
			const p = o.replace(/15/g, "o")
			const q = p.replace(/16/g, "p")
			const r = q.replace(/17/g, "q")
			const s = r.replace(/18/g, "r")
			const t = s.replace(/19/g, "s")
			const u = t.replace(/20/g, "t")
			const v = u.replace(/21/g, "u")
			const w = v.replace(/22/g, "v")
			const x = w.replace(/23/g, "w")
			const z = x.replace(/24/g, "x")
			const aa = z.replace(/25/g, "y")
			const bb = aa.replace(/26/g, "z")
			const cc = bb.replace(/27/g, "a")
			const dd = cc.replace(/28/g, "b")
			const ee = dd.replace(/29/g, "c")
			const ff = ee.replace(/30/g, "d")
			const gg = ff.replace(/31/g, "e")
			const hh = gg.replace(/32/g, "f")
			const ii = hh.replace(/33/g, "g")
			const jj = ii.replace(/34/g, "h")
			const kk = jj.replace(/35/g, "i")
			const ll = kk.replace(/36/g, "j")
			const mm = kk.replace(/37/g, "k")
			const nn = mm.replace(/38/g, "l")
			const oo = nn.replace(/39/g, "m")
			const pp = oo.replace(/40/g, "n")
			const qq = pp.replace(/41/g, "o")
			const rr = qq.replace(/42/g, "p")
			const ss = rr.replace(/43/g, "q")
			const tt = ss.replace(/44/g, "r")
			const uu = tt.replace(/45/g, "s")
			const vv = uu.replace(/46/g, "t")
			const ww = vv.replace(/47/g, "u")
			const xx = ww.replace(/48/g, "v")
			message.channel.send(xx);
		}
		if (command === "lyon1") {
			const oldMessage = args.join(" ");
			message.delete().catch(O_o => {});
			const a = oldMessage.replace(/z/g, "ab");
			const b = a.replace(/y/g, "za");
			const c = b.replace(/x/g, "yz");
			const d = c.replace(/w/g, "xy");
			const e = d.replace(/v/g, "wx");
			const f = e.replace(/u/g, "vw");
			const g = f.replace(/t/g, "uv");
			const h = g.replace(/s/g, "tu");
			const i = h.replace(/r/g, "st");
			const j = i.replace(/q/g, "rs");
			const k = j.replace(/p/g, "qr");
			const l = k.replace(/o/g, "pq");
			const m = l.replace(/n/g, "op");
			const n = m.replace(/m/g, "no");
			const o = n.replace(/l/g, "mn");
			const p = o.replace(/k/g, "lm");
			const q = p.replace(/j/g, "kl");
			const r = q.replace(/i/g, "jk");
			const s = r.replace(/h/g, "ij");
			const t = s.replace(/g/g, "hi");
			const u = t.replace(/f/g, "gh");
			const v = u.replace(/e/g, "fg");
			const w = v.replace(/d/g, "ef");
			const x = w.replace(/c/g, "de");
			const y = x.replace(/b/g, "cd");
			const z = y.replace(/a/g, "bc");
			message.channel.send(z);
			message.channel.send("this is the lyonsCipher");
		}

		if (command === "magicify") {
			const annoyingmsg = args.join(" ");
			let reportEmbed = new Discord.RichEmbed()
				.setDescription("Embedded message!")
				.setColor("#15f153")
				.addField("Message:", annoyingmsg)
				.addField("Channel", message.channel)
				.addField("Time", message.createdAt)
			message.delete().catch(O_o => {});
			message.channel.send(reportEmbed);
		}

		if (command === "meme") {

			meme(function(data) {
				const embed = new Discord.RichEmbed()
					.setTitle(data.title[0])
					.setColor("RANDOM")
					.setImage(data.url[0])
				message.channel.send({
					embed
				});
			})
		};

		if (command === "morseslyon") {
			message.delete().catch(O_o => {});
			const oldMessage = args.join(" ");
			const a = oldMessage.replace(/z/g, "//////");
			const b = a.replace(/y/g, "/////.....");
			const c = b.replace(/x/g, "/////....");
			const d = c.replace(/w/g, "/////...");
			const e = d.replace(/v/g, "/////..");
			const f = e.replace(/u/g, "/////.");
			const g = f.replace(/t/g, "////.....");
			const h = g.replace(/s/g, "////....");
			const i = h.replace(/r/g, "////...");
			const j = i.replace(/q/g, "////..");
			const k = j.replace(/p/g, "////.");
			const l = k.replace(/o/g, "///.....");
			const m = l.replace(/n/g, "///....");
			const n = m.replace(/m/g, "///...");
			const o = n.replace(/l/g, "///..");
			const p = o.replace(/k/g, "///.");
			const q = p.replace(/j/g, "//.....");
			const r = q.replace(/i/g, "//....");
			const s = r.replace(/h/g, "//...");
			const t = s.replace(/g/g, "//..");
			const u = t.replace(/f/g, "//.");
			const v = u.replace(/e/g, "/.....");
			const w = v.replace(/d/g, "/....");
			const x = w.replace(/c/g, "/...");
			const y = x.replace(/b/g, "/..");
			const z = y.replace(/a/g, "/.");
			const zero = z.replace(/0/g, ".");
			const one = zero.replace(/1/g, "./");
			const two = one.replace(/2/g, ".//");
			const three = two.replace(/3/g, ".///");
			const four = three.replace(/4/g, ".////");
			const five = four.replace(/5/g, "../");
			const six = five.replace(/6/g, "..//");
			const seven = six.replace(/7/g, "..///");
			const eight = seven.replace(/8/g, "..////");
			const nine = eight.replace(/9/g, "../////");
			const space = nine.replace(/ /g, "X");
			message.channel.send(space);
		}
		if (command === "timer") {
			let Timer = args[0];

			if (!args[0]) {
				return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
			}

			if (args[0] <= 0) {
				return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
			}

			message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

			setTimeout(function() {
				message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())

			}, ms(Timer));
		}
		if (command === "tts") {
			module.exports.run = (client, message, args) => {
				const ra = args.join(" ");
				message.channel.send(ra, {
					tts: true
				});

			};
		}

		if (command === "o") {
			message.delete().catch(O_o => {});
			const oldMessage = args.join(" ");
			const a = oldMessage.replace(/a/g, "o")
			const aa = a.replace(/A/g, "O")
			const e = aa.replace(/e/g, "o")
			const ee = e.replace(/E/g, "O")
			const i = ee.replace(/i/g, "o")
			const ii = i.replace(/I/g, "O")
			const u = ii.replace(/u/g, "o")
			const uu = u.replace(/U/g, "O")
			message.channel.send(uu)
		}


		if (command === "purge") {
			const user = message.mentions.users.first();
			if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, you don\'t have permission to delete or purge messages!')
				.then(msg => msg.delete({
					timeout: 100000
				}));
			const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
			if (!amount) return message.channel.send('Specify an amount of messages to delete or purge!')
				.then(msg => msg.delete({
					timeout: 100000
				}));
			if (!amount && !user) return message.channel.send('Specify a user and amount, or just an amount, of messages to delete or purge!')
				.then(msg => msg.delete({
					timeout: 100000
				}));
			message.channel.fetchMessages({
					limit: amount,
				})
				.then((messages) => {
					if (user) {
						const filterBy = user ? user.id : client.user.id;
						messages = messages.filter(m => m.author.id === filterBy)
							.array()
							.slice(0, amount);
					}
					message.channel.bulkDelete(messages)
					message.channel.send(`${amount} messages removed Permanently by <@${message.author.id}>`)
						.catch(error => console.log(error.stack));
				});
		}
		if (command === "report") {
			try {
				function clean(text) {
					if (typeof(text) === 'string')
						return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
					else
						return text;
				}
				const bug = args.join(" ")
				if (!message.content.includes("@")) {
					return message.channel.send('Please tell me about the member.')
				}
				if (!bug) return message.channel.send('Please Specify an issue!!')
				const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) reported a bug:\n${bug}\nServer: **${message.guild.name}**\nSID: **${message.guild.id}**\n CID: **${message.channel.id}**`);
				const id = '475838383671738378';
				new Promise((resolve, reject) => {
					superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
						.set('Authorization', `Bot ${client.token}`).send({
							content
						})
						.end((err, res) => {
							if (err) {
								reject(err);
								message.reply('There was an error while sending report to Daebot Support. Please try again later.');
							} else {
								resolve(res);
								message.channel.send(`:white_check_mark: **${message.author.username}**,report has successfully been submitted to Daebot Support for review.Appropriate investigation will take place. Thank you!.`);
							}
						});
				});
			} catch (err) {
				console.log(err)
			}
		}
		if (command === "reverse") {
			if (args.length < 1) {
				throw 'You must input text to be reversed!';
			}
			message.channel.send(args.join(' ').split('').reverse().join(''));
		};
		if (command === "rickroll") {
			const answers = [
				"https://www.youtube.com/watch?v=bi5pOo_Z2GM",
				"https://www.youtube.com/watch?v=Uj1ykZWtPYI",
				"https://www.youtube.com/watch?v=xfr64zoBTAQ",
				"https://www.youtube.com/watch?v=V-_O7nl0Ii0",
				"https://www.youtube.com/watch?v=EE-xtCF3T94&list=PLnJhY7qfCqzMI5kO8skuRjpgrBujjjlz5&index=1",
			]
			const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
			message.channel.send(randomAnswer);
		}
		if (command === "role") {
			if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permissions.")
			let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
			if (!rMember) return message.reply("Please provide a user name")
			let role = args.join(" ").slice(22);

			if (!role) return message.reply("Please provide a role name.");
			let aRole = message.guild.roles.find(`name`, role);
			if (!aRole) return message.reply(`I can't find the role.`);

			if (rMember.roles.has(aRole.id)) return message.reply("The user already have this role!");
			await (rMember.addRole(aRole.id))
		}
		if (command === "say") {
			const sayMessage = args.join(" ");
			message.delete().catch(O_o => {});
			message.channel.send(sayMessage);
		}

		if (command === "asigh") {
			const ascii = `
\`\`\`
  _______   _________    _________   ,        ,
 /              |       /            |        |
|               |      |             |        |
|               |      |             |        |
 \\_____,        |      |  _______,   |________|
        \\       |      |         |   |        |
         |      |      |         |   |        |
         |      |      |         |   |        |
  ______/   ____|____   \\________|   |        |
\u200b
\`\`\`
`;


			message.channel.send(ascii);
		};
		if (command === "ss") {
			const mss = args.join('');
			const ttype = args[0]
			const tyype = ttype.toUpperCase().toString()
			const msss = mss.replace('Watching', ' ').replace('watching').replace('Playing').replace('playing').replace('Listening').replace('listening')
			if (!mss || !ttype) {
				message.channel.send("Please ensure you are using the command as so. .ss type text. EG: you can pick, Playing, Watching, or Listening. .ss playing with sum toyz")
			} else {
				client.user.setActivity(msss, {
					type: tyype
				});
				if (message.author.id === "347885325940424714") {
					message.channel.send("Yes, my ***True Liege***");
				} else {
					message.channel.send("Yes, my ~~subordinate~~ liege.");
				}
			}
		}
		///Fun///
		///misc///
		if (command === "inv") {
			return message.reply({
				embed: {
					color: 9198700,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
					title: "invite",
					description: "Invites to the bot and the server.",
					fields: [{
							name: "To invite me to another server:",
							value: "https://discordapp.com/api/oauth2/authorize?client_id=447588362350755840&permissions=8&scope=bot"
						},
						{
							name: "And to join my creators host server:",
							value: "https://discord.gg/HMbrGGy  Have fun! Everyone there likes to work on cryptology, Programming, and all things cyberSecurity!\n the creator of this bot is also a chemist/businessman."
						}
					],
					timestamp: new Date(),
					footer: {
						icon_url: client.user.avatarURL,
						text: "©DaeBot"
					}
				}
			});
		}
		///misc
		////////////////////////////////////////////////////MUSIC//////////////////////////////////////////////////////////////////////
		if (!message.content.startsWith(prefix)) return;
		var searchString = args.slice(1).join(' ');
		var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		var serverQueue = queue.get(message.guild.id);

		if (command === "play") {
			var voiceChannel = message.member.voiceChannel;
			if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
			var permissions = voiceChannel.permissionsFor(message.client.user);
			if (!permissions.has('CONNECT')) {
				return message.channel.send('Error! Check my permissions!');
			}
			if (!permissions.has('SPEAK')) {
				return message.channel.send('Error! Check my permissions!');
			}
			if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
				var playlist = await youtube.getPlaylist(url);
				var videos = await playlist.getVideos();
				for (const video of Object.values(videos)) {
					var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
					await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
				}
				return message.channel.send(`Perfect! **${playlist.title}** Ill just dd to the queue!`);
			} else {
				try {
					var video = await youtube.getVideo(url);
				} catch (error) {
					try {
						var videos = await youtube.searchVideos(searchString, 10);
						var index = 0;
						message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
						// eslint-disable-next-line max-depth
						try {
							var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
								maxMatches: 1,
								time: 10000,
								errors: ['time']
							});
						} catch (err) {
							console.error(err);
							return message.channel.send('Sorry, no input detected. Shutting down');
						}
						var videoIndex = parseInt(response.first().content);
						var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					} catch (err) {
						console.error(err);
						return message.channel.send('Error!!! I could not obtain any results for that query');
					}
				}
				return handleVideo(video, message, voiceChannel);
			}
		}
		if (command === "skip") {
			if (!message.member.voiceChannel) return message.channel.send('I cant play through nothing! Join  Voice Channel!');
			if (!serverQueue) return message.channel.send('Gotta have a song to skip before I can skip it.');
			serverQueue.connection.dispatcher.end('Sure thing! I hated that song anyways!');
			return undefined;
		}
		if (command === "stop") {
			if (!message.member.voiceChannel) return message.channel.send('I cant play through nothing! Join  Voice Channel!');
			if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
			serverQueue.songs = [];
			serverQueue.connection.dispatcher.end('Stop command has been used!');
			return undefined;
		}
		if (command === "vol") {
			if (!message.member.voiceChannel) return message.channel.send('I cant play through nothing! Join  Voice Channel!');
			if (!serverQueue) return message.channel.send('Nothin\' playin\' I\'m afraid.');
			if (!args[0]) return message.channel.send(`Volume at: **${serverQueue.volume}**`);
			serverQueue.volume = args[0];
			serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 10);
			return message.channel.send(`*screams* Is ThIs BeTtEr?`);
		}
		if (command === "np") {
			if (!serverQueue) return message.channel.send('There is nothing playing.');
			return message.channel.send(`That sick jam youre listening to is: **${serverQueue.songs[0].title}**`);
		}
		if (command === "queue") {
			if (!serverQueue) return message.channel.send('There is nothing playing.');
			return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
		}
		if (command === "pause") {
			if (serverQueue && serverQueue.playing) {
				serverQueue.playing = false;
				serverQueue.connection.dispatcher.pause();
				return message.channel.send('Well, I guess paused the music for you!');
			}
			return message.channel.send('There is nothing playing. Like. Anywhere');
		}
		if (command === "resume") {
			if (serverQueue && !serverQueue.playing) {
				serverQueue.playing = true;
				serverQueue.connection.dispatcher.resume();
				return message.channel.send('I have resumed the music for you!');
			}
			return message.channel.send('There is nothing playing.');
			return undefined;
		}
		async function handleVideo(video, message, voiceChannel, playlist = false) {
			var serverQueue = queue.get(message.guild.id);
			console.log(video);
			var song = {
				id: video.id,
				title: video.title,
				url: `https://www.youtube.com/watch?v=${video.id}`
			};
			if (!serverQueue) {
				var queueConstruct = {
					textChannel: message.channel,
					voiceChannel: voiceChannel,
					connection: null,
					songs: [],
					volume: 5,
					playing: true
				};
				queue.set(message.guild.id, queueConstruct);

				queueConstruct.songs.push(song);

				try {
					var connection = await voiceChannel.join();
					queueConstruct.connection = connection;
					play(message.guild, queueConstruct.songs[0]);
				} catch (error) {
					console.error(`I could not join the voice channel: ${error}`);
					queue.delete(message.guild.id);
					return message.channel.send(`Sorry I could not join the voice channel: ${error}`);
				}
			} else {
				serverQueue.songs.push(song);
				console.log(serverQueue.songs);
				if (playlist) return undefined;
				else return message.channel.send(`Radical! **${song.title}** has been added to the queue!`);
			}
			return undefined;
		}

		function play(guild, song) {
			var serverQueue = queue.get(guild.id);

			if (!song) {
				serverQueue.voiceChannel.leave();
				queue.delete(guild.id);
				return;
			}
			console.log(serverQueue.songs);

			const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
				.on('end', reason => {
					message.channel.send('``The queue of song is end.``');
					if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
					else console.log(reason);
					serverQueue.songs.shift();
					play(guild, serverQueue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);

			serverQueue.textChannel.send(`Started playing: **${song.title}**`);
		}
		////////////////////////////////////////////////////////////////MUSIC/////////////////////////////////////////////////////
		//No More Spam Plz//
		const slowmode_mentions = new Map();
		const slowmode_links = new Map();
		const slowmode_attachments = new Map();
		const ratelimit = 3500; // within 7.5 seconds
		const logChannel = "484022637551550464"; // logs channel id




		// set the max mentions/links/attachments that are allowed
		let banLevel = {
			"mentions": 10,
			"links": 10,
			"attachments": 10
		};

		// Ignore bots, DMs, Webhooks, if this bot has no perms, and Mods
		if (message.author.bot || !message.guild || !message.member || !message.guild.member(client.user).hasPermission("BAN_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES")) return;

		// Ignore if 1 mention and it's a bot (bot interaction)
		if (message.mentions.users.size == 1 && message.mentions.users.first().bot) return;

		// If there is no trace of the author in the slowmode map, add them.
		let entry_mentions = slowmode_mentions.get(message.author.id);
		let entry_links = slowmode_links.get(message.author.id);
		let entry_attachments = slowmode_attachments.get(message.author.id);

		if (!entry_mentions) {
			entry_mentions = 0;
			slowmode_mentions.set(message.author.id, entry_mentions);
		}
		if (!entry_links) {
			entry_links = 0;
			slowmode_links.set(message.author.id, entry_links);
		}
		if (!entry_attachments) {
			entry_attachments = 0;
			slowmode_attachments.set(message.author.id, entry_attachments);
		}

		// Count the unique user and roles mentions, links and attachments
		entry_mentions += message.mentions.users.size + message.mentions.roles.size;
		entry_links += message.embeds.length;
		entry_attachments += message.attachments.size;
		// Set all the amounts in the slowmode maps
		slowmode_mentions.set(message.author.id, entry_mentions);
		slowmode_links.set(message.author.id, entry_links);
		slowmode_attachments.set(message.author.id, entry_attachments);

		// If the total number of links in the last ratelimit is above the server ban level, ban user
		if (entry_links > banLevel.links) {
			message.member.ban(1).then(member => {
					message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`link spam\``);
					log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many links (${entry_links}x)`));
					slowmode_links.delete(message.author.id);
				})
				.catch(e => {
					log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
				});
		} else {
			setTimeout(() => {
				entry_links -= message.embeds.length;
				if (entry_links <= 0) slowmode_links.delete(message.author.id);
			}, ratelimit);
		}

		if (entry_mentions > banLevel.mentions) {
			message.member.ban(1).then(member => {
					message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`mention spam\``);
					log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Mentioning too many users (${entry_mentions}x)`));
					slowmode_mentions.delete(message.author.id);
				})
				.catch(e => {
					log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
				});
		} else {
			setTimeout(() => {
				entry_mentions -= message.mentions.users.size + message.mentions.roles.size;
				if (entry_mentions <= 0) slowmode_mentions.delete(message.author.id);
			}, ratelimit);
		}

		if (entry_attachments > banLevel.attachments) {
			message.member.ban(1).then(member => {
					message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`image spam\``);
					log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many images (${entry_attachments}x)`));
					slowmode_attachments.delete(message.author.id);
				})
				.catch(e => {
					log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
				});
		} else {
			setTimeout(() => {
				entry_attachments -= message.attachments.size;
				if (entry_attachments <= 0) slowmode_attachments.delete(message.author.id);
			}, ratelimit);
		}


		process.on("unhandledRejection", err => {
			console.error("Uncaught Promise Error: \n" + err.stack);
		});

	}
});
client.login(process.env.BOT_TOKEN);
