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
const meme = require('memejs);


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
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	let msg = message.content.toLowerCase() || message.content.toUpperCase();
	if (message.author.bot) return undefined;
let cmd;
	if (client.commands.has(command)) {
		cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
		cmd = client.commands.get(client.aliases.get(command));
	}
		cmd.run(client, message, args);
	

  
  
  
	
	//nsfw
	
	

	
//nsfw
 
	
	
	
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

if(command === "joinclass"){
		message.channel.reply({embed: { color: 9198799, author: { name: client.user.username, icon_url: client.user.avatarURL }
                              , title: "Thank You!", description: "You have joined the class", 
                              fields: [{ name: "Topic:", value: "Today we will be doing SQL injection." }],
				        timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" }  } });
				       }
	
	//////////////////////////ASCII///////////////

  if(command === "shrink"){
	const mappings = (function (object) {
    let output = [];

    for (let key in object) {
        output.push({
            regex: new RegExp(key, 'ig'),
            replacement: object[key]
        });
    }

    return output;
})({
    a: '\u1D00',
    b: '\u0299',
    c: '\u1D04',
    d: '\u1D05',
    e: '\u1D07',
    f: '\uA730',
    g: '\u0262',
    h: '\u029C',
    i: '\u026A',
    j: '\u1D0A',
    k: '\u1D0B',
    l: '\u029F',
    m: '\u1D0D',
    n: '\u0274',
    o: '\u1D0F',
    p: '\u1D18',
    q: '\u0071',
    r: '\u0280',
    s: '\uA731',
    t: '\u1D1B',
    u: '\u1D1C',
    v: '\u1D20',
    w: '\u1D21',
    x: '\u0078',
    y: '\u028F',
    z: '\u1D22'
});

    let output = args.join(' ');
    mappings.forEach(replacer => output = output.replace(replacer.regex, replacer.replacement));

    message.delete();
    message.channel.send(output);
}
if(command === "dice"){
  const  answers = [
":dice: you rolled a 1. Ouch. Can you do any worse?",
      ":dice: you rolled a 2... You make me wanna break the dice.",
  ":dice: you rolled a 3.... Disgraceful.",
    ":dice: you rolled a 4 Thats it?! ",  
      ":dice: you rolled a 5. Nice!",
      ":dice: you rolled a 6!!!",
  "Uh oh, the die fell off the table. I guess you can do worse than 1.",]
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
	if(command === "8ball"){
  const  answers = [
"Yes",
      "Not a Chance!",
  "No",
    "Maybe",  
      "Could Be!",
      "Yes, but only on Tuesdays",
  "Ummmm I forgot?",]
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
	if(command === "clap"){
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (client, message, args) => {
    if (args.length < 1) {
        throw 'Please provide some text to clapify';
    }

    message.channel.send(args.map(randomizeCase).join(':clap:'));
};
	}
	    if(command ==="rr1"){
		      const  answers = [
"Whats his name just died",
  "<@" + message.author.id + ">" + " is cheating!!!! ***SHOOT HIM***",
  "*click click*... balsy guy clicked twice",
    "Pop! goes " +"<@" + message.author.id + ">"+ "'s brains",  
      "you Got lucky...",
      "Psst! Dont tell" + "<@" + message.author.id + ">"  + " but I slipped 2 bullets in there" ,
  "*click, You lived!",]
		       const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
				 

	if(command === "js"){
			const answers= [
				"https://vignette.wikia.nocookie.net/fnaf-sister-location/images/c/c8/Ballora_Jumpscare.gif/revision/latest/scale-to-width-down/640?cb=20161013031551",
				"https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/5/50/Nightmare_Mangle_Jumpscare.gif/revision/latest/scale-to-width-down/640?cb=20151101181331",
				"https://media1.tenor.com/images/3ea9480e4f8903c86e77f13a9c70c306/tenor.gif?itemid=7273400",
				"https://media0.giphy.com/media/28aGE5xerXkbK/giphy.gif",
				]
		  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(randomAnswer);
  }
    if(command === "ss") {


    const mss = args.join(" ");



    client.user.setActivity(mss);
	   if(message.author.id === "347885325940424714"){
		   message.channel.send("Yes, my ***True Liege***");
		   return} else{
    message.channel.send("Yes, my ~~subordinate~~ liege.");
  }
    }
      if(command === "alert"){
	      const alerttxt = args.join(" ");
	      console.log(alerttxt);
	      message.reply({embed: {color: 32790, author: {name: client.user.username, icon_url: client.user.avatarURL}
					     , title: "Alert", description:"You have requested an alert....>>>Pending>>>",
					     fields:[{name: "Alert sent:", value: "Your alert has successfully been sent. The True liege will see it soon.",}],
					     timestamp: new Date(), footer: {icon_url: client.user.avatarURL, text:"©DaeBot"} } });
      }
    if(command == "inv") {
    return message.reply({embed: {color: 9198700, author: {name: client.user.username, icon_url: client.user.avatarURL }
                                  , title: "invite", description: "Invites to the bot and the server.",
                                  fields:[{ name: "To invite me to another server:", value:"https://discordapp.com/api/oauth2/authorize?client_id=447588362350755840&permissions=8&scope=bot" },
                                            { name: "And to join my creators host server:", value: "https://discord.gg/f7Ntjek  Have fun! Everyone there likes to work on cryptology!" }],
                                 timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "©DaeBot" } } });
  }
    if(command === "test"){
     message.channel.send('I promise you, I am working');
  }
  if(command === "helpsay"){
    message.channel.send('This command makes the bot repeat after you. It also deletes the original. `usage: .say[word or phrase here]`')
  }
 
  if(command === "rickroll"){
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
       if(command === "forcecrush"){
   const answers = [
       "https://media.giphy.com/media/fJcYJWdPPPNQI/giphy.gif",
       "https://i.imgur.com/bMBpsmx.gif",
   "http://giant.gfycat.com/HospitableConcreteAtlanticridleyturtle.gif",
      "http://i.imgur.com/IuKyJ.gif",
     "http://www.gifbin.com/bin/052011/1305030514_cooling-tower-implosion.webm",
      "https://i.kinja-img.com/gawker-media/image/upload/s--1nnLdy0K--/c_scale,f_auto,fl_progressive,q_80,w_800/18s8qh8utjx9qgif.gif",]
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
  if(command === "fusrodah"){
   const answers = [
      "https://media1.tenor.com/images/e89d77b375fae6a3f67bb381721d0ffd/tenor.gif?itemid=3432683",
      "https://i.imgur.com/3HoiVCz.mp4",
  "https://i.imgur.com/2zHvWBA.gif",
      "https://i.imgur.com/pjFhsfR.gif",
      "https://i.imgur.com/nCLO8h3.gif",
      "https://i.imgur.com/IbV7JPq.mp4",
      "https://i.imgur.com/m1Y3QNS.gif",
     "https://i.imgur.com/TuNJ6lU.gif",
      "https://i.imgur.com/BSwy9E9.gif",]
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  }
  if(command === "meme"){
  const answers = [
"https://i.imgur.com/MqJS7ck.jpg",
     "http://i.imgur.com/9zZl5CU",
     "https://i.imgur.com/JFtqeKU.jpg",
  "https://i.imgur.com/23JdUcs.jpg",
    "https://i.imgur.com/OqrKKIa.jpg",
     "https://i.imgur.com/lh4MIWg.jpg",
     "https://i.imgur.com/pwIROUC.jpg",
     "https://i.imgur.com/eiEFvPK.png",
     "https://i.imgur.com/N5uUhQf.jpg",
     "https://i.imgur.com/Hxfr9JP.jpg",
     "https://i.imgur.com/tXybERr.jpg",
     "https://i.imgur.com/tsnoDjw.jpg",
     "https://i.imgur.com/M8bRkOd.jpg",
     "https://i.imgur.com/3DsU2cd.jpg",
     "https://i.imgur.com/KniLNcY.jpg",
  "https://i.imgur.com/iDfyrD7.jpg",
"https://i.imgur.com/uTOdvm3.jpg",
  "https://i.imgur.com/AgGPeqE.jpg",
  "https://i.imgur.com/zYvH9Ij.jpg",
  "https://i.imgur.com/ECXQRKO.jpg",
  "https://i.imgur.com/suXMTk5.jpg",
    "https://i.imgur.com/JHKwCao.jpg",
    "you found the secret jeff https://i.imgur.com/3oIm2JK.mp4",
  "https://i.imgur.com/6YDI376.jpg",]
   const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer); 
  
  }
     if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage); 
  }
	if(command === "DontPingMe") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage); 
		message.channel.send(sayMessage);
		message.channel.send(sayMessage);
		message.channel.send(sayMessage);
		message.channel.send(sayMessage);
		message.channel.send(sayMessage);
		message.channel.send(sayMessage);
		message.channel.send(sayMessage, + "This is for pinging people");
		message.channel.send("Stop Pinging People. If people are abusing this command, please report it to the owner, DVMors#7029");
  }
  if(command === "lovec"){
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
      message.channel.send({embed: {color: 10834749
                                  ,fields:[{ name: "love", value: mss + randomAnswer },],
                                 timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
    
    
  }
  if(command == "o") {
    const oldMessage = args.join(" ");
    const newMessage = oldMessage.replace(/a|e|i|o|u/gi, "o");
    message.channel.send(newMessage);
  }
  if(command ==="lyon"){
    message.channel.send("what did you say? oh Nevermind");
  }
if(command ==="secretcmd"){
  message.channel.send("no easy way out");
}
  if(command == "lyon1") {
    const oldMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
    const a = oldMessage.replace(/z/g, "ab");
     const b = a.replace(/y/g, "za");
     const c = b.replace(/x/g, "yz");
     const  d = c.replace(/w/g, "xy");
     const  e = d.replace(/v/g, "wx");
     const f = e.replace(/u/g, "vw");
     const  g = f.replace(/t/g, "uv");
     const  h = g.replace(/s/g, "tu");
       const i = h.replace(/r/g, "st");
     const  j = i.replace(/q/g, "rs");
     const  k = j.replace(/p/g, "qr");
     const  l = k.replace(/o/g, "pq");
    const m = l.replace(/n/g, "op");
    const n = m.replace(/m/g, "no");
    const  o = n.replace(/l/g, "mn");
    const  p = o.replace(/k/g, "lm");
    const q = p.replace(/j/g, "kl");
    const  r = q.replace(/i/g, "jk");
    const s = r.replace(/h/g, "ij");
    const  t = s.replace(/g/g, "hi");
    const  u = t.replace(/f/g, "gh");
    const  v = u.replace(/e/g, "fg");
    const  w = v.replace(/d/g, "ef");
    const x = w.replace(/c/g, "de");
    const y = x.replace(/b/g, "cd");
    const z = y.replace(/a/g, "bc");
    message.channel.send(z);
    message.channel.send("this is the lyonsCipher");
  }
 if(command == "2noyl") {
    const oldMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
    const a = oldMessage.replace(/y/g, "ab");
     const b = a.replace(/x/g, "za");
     const c = b.replace(/w/g, "yz");
     const  d = c.replace(/v/g, "xy");
     const  e = d.replace(/u/g, "wx");
     const f = e.replace(/t/g, "vw");
     const  g = f.replace(/s/g, "uv");
     const  h = g.replace(/r/g, "tu");
       const i = h.replace(/q/g, "st");
     const  j = i.replace(/p/g, "rs");
     const  k = j.replace(/o/g, "qr");
     const  l = k.replace(/n/g, "pq");
    const m = l.replace(/m/g, "op");
    const n = m.replace(/l/g, "no");
    const  o = n.replace(/k/g, "mn");
    const  p = o.replace(/j/g, "lm");
    const q = p.replace(/i/g, "kl");
    const  r = q.replace(/h/g, "jk");
    const s = r.replace(/g/g, "ij");
    const  t = s.replace(/f/g, "hi");
    const  u = t.replace(/e/g, "gh");
    const  v = u.replace(/d/g, "fg");
    const  w = v.replace(/c/g, "ef");
    const x = w.replace(/b/g, "de");
    const y = x.replace(/a/g, "cd");
    const z = y.replace(/z/g, "bc");
    message.channel.send(z);
    message.channel.send("this is the lyonsCipher V2.0");
 }
  
   if(command == "morse") {
    const oldMessage = args.join(" ");
       message.delete().catch(O_o=>{}); 
     const exc = oldMessage.replace(/!/g, "..--.|");
     const com = exc.replace(/,/g, "--..--|");
     const one = com.replace(/1/g, ".----|");
     const two = one.replace(/2/g, "..---|");
     const three = two.replace(/3/g, "...--|");
     const four = three.replace(/4/g, "....-|");
     const five = four.replace(/5/g, ".....|");
     const six = five.replace(/6/g, "-....|");
     const seven = six.replace(/7/g, "--...|");
     const eight = seven.replace(/8/g, "---..|");
     const nine = eight.replace(/9/g, "----.|");
     const zero = nine.replace(/0/g, "-----|");
    const a = zero.replace(/z/g, "--..|");
     const b = a.replace(/y/g, "-.--|");
     const c = b.replace(/x/g, "-..-|");
     const  d = c.replace(/w/g, ".--|");
     const  e = d.replace(/v/g, "...-|");
     const f = e.replace(/u/g, "..-|");
     const  g = f.replace(/t/g, "-|");
     const  h = g.replace(/s/g, "...|");
       const i = h.replace(/r/g, ".-.|");
     const  j = i.replace(/q/g, "--.-|");
     const  k = j.replace(/p/g, ".--.|");
     const  l = k.replace(/o/g, "---|");
    const m = l.replace(/n/g, "-.|");
    const n = m.replace(/m/g, "--|");
    const  o = n.replace(/l/g, ".-..|");
    const  p = o.replace(/k/g, "-.-|");
    const q = p.replace(/j/g, ".---|");
    const  r = q.replace(/i/g, "..|");
    const s = r.replace(/h/g, "....|");
    const  t = s.replace(/g/g, "--.|");
    const  u = t.replace(/f/g, "..-.|");
    const  v = u.replace(/e/g, ".|");
    const  w = v.replace(/d/g, "-..|");
    const x = w.replace(/c/g, "-.-.|");
    const y = x.replace(/b/g, "-...|");
    const z = y.replace(/a/g, ".-|");
     const space = z.replace(/ /g, " STOP ");
    message.channel.send(space);
  }
  if(command === "new") {
    message.channel.send("yes its newww")
  }
});

client.login(process.env.BOT_TOKEN);
