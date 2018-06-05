///bottom///
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
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
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
	
	if(command === "tts"){
		const ra = args.join(" ");
		message.channel.send(ra, {tts: true});
	}
  	if(command === "timer"){
      const ms = require("ms");
module.exports.run = async (client, message, args, level) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
	}
 if(command === "purge"){
 const user = message.mentions.users.first();
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, you don\'t have permission to delete or purge messages!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.channel.send('Specify an amount of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	if (!amount && !user) return message.channel.send('Specify a user and amount, or just an amount, of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	message.channel.messages.fetch({
			limit: amount
		, })
		.then((messages) => {
			if (user) {
				const filterBy = user ? user.id : client.user.id;
				messages = messages.filter(m => m.author.id === filterBy)
					.array()
					.slice(0, amount);
			}
			message.channel.bulkDelete(messages)
				.catch(error => console.log(error.stack));
		});
}
	if(command == "magicify"){
    ///change const to let?///
	const annoyingmsg = args.join(" ");
	    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Embedded message!")
    .setColor("#15f153")
    .addField("Message:", annoyingmsg)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    message.delete().catch(O_o=>{});
  message.channel.send(reportEmbed);
}
	
	if(command === "kick"){

    //!kick @daeshan cuz tht b was askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

 

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send("kicked");

    return;
  }
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

  if(command === "report"){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;

  }


  if(command === "serverinfo"){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

if(command === "fireworks"){
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
	
  if(command === "botinfo"){

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt);

    return message.channel.send(botembed);
  }




  
 
/////////if(message.author.id === "350693449722232832") return;

	if(command === "lyonsCipher"){

message.channel.send("Now now. You are fairly close. but you've earned a hint. This cipher is quite the secret but has a portion in it that is a known cipher.");
}
	 if(command === "caesar1"){
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
    a: '\u0042',
    b: '\u0043',
    c: '\u0044',
    d: '\u0045',
    e: '\u0046',
    f: '\u0047',
    g: '\u0048',
    h: '\u0049',
    i: '\u004A',
    j: '\u004B',
    k: '\u004C',
    l: '\u004D',
    m: '\u004E',
    n: '\u004F',
    o: '\u0050',
    p: '\u0051',
    q: '\u0052',
    r: '\u0053',
    s: '\u0054',
    t: '\u0055',
    u: '\u0056',
    v: '\u0057',
    w: '\u0058',
    x: '\u0059',
    y: '\u005A',
    z: '\u0041'
});

    let output = args.join(' ');
    mappings.forEach(replacer => output = output.replace(replacer.regex, replacer.replacement));

    message.delete();
    message.channel.send(output);
}
	if(command == "classdismissed"){
		message.channel.send("Class Is Over!");
	}
	
  if(command == "morseslyon") {
message.delete().catch(O_o=>{}); 
    const oldMessage = args.join(" ");    
    const a = oldMessage.replace(/z/g, "//////");
     const b = a.replace(/y/g, "/////.....");
     const c = b.replace(/x/g, "/////....");
     const  d = c.replace(/w/g, "/////...");
     const  e = d.replace(/v/g, "/////..");
     const f = e.replace(/u/g, "/////.");
     const  g = f.replace(/t/g, "////.....");
     const  h = g.replace(/s/g, "////....");
       const i = h.replace(/r/g, "////...");
     const  j = i.replace(/q/g, "////..");
     const  k = j.replace(/p/g, "////.");
     const  l = k.replace(/o/g, "///.....");
    const m = l.replace(/n/g, "///....");
    const n = m.replace(/m/g, "///...");
    const  o = n.replace(/l/g, "///..");
    const  p = o.replace(/k/g, "///.");
    const q = p.replace(/j/g, "//.....");
    const  r = q.replace(/i/g, "//....");
    const s = r.replace(/h/g, "//...");
    const  t = s.replace(/g/g, "//..");
    const  u = t.replace(/f/g, "//.");
    const  v = u.replace(/e/g, "/.....");
    const  w = v.replace(/d/g, "/....");
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
         if(command === "role"){
		 if (args[0] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Couldn't find that role.");

  if (rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`role added `);
	  await message.channel.send(gRole.id `was added`);
  } catch (e) {
    console.log(e.stack);

  }
}
if(command === "joinclass"){
		message.channel.reply({embed: { color: 9198799, author: { name: client.user.username, icon_url: client.user.avatarURL }
                              , title: "Thank You!", description: "You have joined the class", 
                              fields: [{ name: "Topic:", value: "Today we will be doing SQL injection." }],
				        timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" }  } });
				       }
	if(command === "reverse"){
		  if (args.length < 1) {
        throw 'You must input text to be reversed!';
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));
};
	
	//////////////////////////ASCII///////////////
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

if(command === "sigh") {
    message.channel.send(ascii);
};
///////////////////ASCII/////////////////////
		if(command === "space"){
message.delete().catch(O_o=>{});
   if (args.length < 1) {
        throw 'You must provide text to space out!';
    }

    let amount = 2;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }

    message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
};
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
				       if(command === "help"){
message.channel.send({embed: { color: 9198799, author: { name: client.user.username, icon_url: client.user.avatarURL }
                              , title: "CommandList", description: "Currenly, I only have a few commands, and will get more soon.", 
                              fields: [{name: "alert", value: "Alerts the owner of an issue."}, 
				      { name: "Say", value: "This command is used as such `.say {word}`" }, 
                                       { name: "inv", value: "This invites you to both the bt, and the server!"},
                                       { name: "tts", value: "sends a text to speech message"},
                                       { name: "ping", value: "You can ping the server, and return api, and normal latency values. Usage:`.ping`" },
				       {name: "botinfo", value: "displays info on the bot"},
				       {name: "serverinfo", value: "displays basic info on the server"},
				       { name: "kick", value: "Kicks a user. usage:`.kick {@mention}`" }, 
                                       { name:  "ban", value: "This will ban a member from your server. Usage:`.ban {@mention}`"},
                                       { name: "line", value: "Makes a nice squiggly line"},
                                       { name:"rickroll", value: "Do I really have to explain this?"},
                                       { name:"morse", value: "Converts a string to morse code"},
                                       { name:"meme", value: "sends a random meme"},
                                       { name:"ss", value: "compete with other users in different servers to set my bots Status"},
                                       { name: "forcecrush", value: "random crush gif"},
                                        {name: "lovec", value: "calculates the probability of love between to things. `Usage: .lovec @mention+@mention`"},
                                       {name: "dice", value: "rolls some dice"},
                                       {name: "o", value: "replaces all values in a string with an 'o;"},
				       {name:"Purge", value: "Deletes a specified number of messages"},
                                       {name:"timer", value: "sets a timer"},
                                      {name: "fusrodah", value: "makes a fus ro dah meme"},
				       {name: "sigh", value: "sighs"},
				       {name: "bomb", value: "Explodes"},
				       {name: "DontPingMe", value: "Pings the person you choose. Please do .DontPingMe [ID] e.g. .DontPingMe <@73918461794>"},
                                       {name: "shrink", value: "makes stuff tiny"},
				       {name: "js", value: "Shows you some JavaScript code"},
               {name: "8Ball", value: "It's Basketball..... what do you expect me to say?"},
				       {name: "magicify", value:"Sends your message.... but ***embeded***"},
				       {name: "kick", value:"kicks"},
				       {name: "ban", value: "bans"},
				       {name: "fireworks", value: "shoots fireworks, requested by eitanwass#0607"},
				       {name: "report", value: "reports user to admins in the server"},
               {name: "clap", value: "claps that text ***REDACTED: NO LONGER IN USE"},
				       {name: "reverse",value: "it reverses text"},
                                        { name:  "`_ _ _ _ _ _ _ _ _ _`", value: "This is a secret command"}, 
                                       { name: "`_ _ _ _ 1`", value: "This is also a secret command"}],
                              timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
  message.channel.send({embed: { color: 475744, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "Notes:", description: "See below",
                              fields: [{ name: "notes", value: "All secret commands, when discovered, will make solving this puzzle much ***MUCH*** easier. The first person to figure out what they are, may choose to keep them secret, or reveal them for all to see. Good Luck! *You're going to need it.*"}],
                              timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
}
	if(command === "bomb"){
			const answers= [
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
	  if(command === "ping"){
  const m = await message.channel.send("Ping?");
const answers = [
 "**A porta potty in the Sajara Desert**",
      "**Utopia**",
      "**Bugs Bunny's Rabbit Hole**",
      "**My moms basement**",
      "**NASA's private server**",
      "**Santa's sleigh**",
    "**That thugs wallet**",
  ]
const namaste = [
 "**A dog**",
      "**Jeff**",
      "**A ••••• wit a rocket launcha**",
      "**The lost land of Atlantis**",
      "**That one guy**",
      "**My money",
  ]
 const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
const randomNamaste = namaste[Math.floor(Math.random() * answers.length)];
 m.edit(`Pong! It took ${m.createdTimestamp - message.createdTimestamp}ms to find ${randomNamaste} in ${randomAnswer} after ${Math.round(client.ping)} counts of felony!!`)

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
