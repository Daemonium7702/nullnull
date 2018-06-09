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

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
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

let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
client.on('message', message => {
    let sender = message.author;
    let prefix = "."
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = JSON;
    fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) => {
        if (err) console.log(err)
    })
    client.on("ready", () => {
        console.log("Economy launched....")
    });
    if (message === prefix + "bal" || message === prefix + "balance") {
        message.channel.send({
            embed: {
                title: "Bank",
                color: 0xF1C40F,
                fields: [{
                        name: "Account Holder",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Account Balance",
                        value: userData[sender.id + message.guild.id].money,
                        incline: true
                    }
                ],
            }
        })
    }
});

const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const opus = require('node-opus');
const youtube = new YouTube('AIzaSyB23US7bJ7DJvqt_qTPZaXAdy9RV2GKJxg');
const queue = new Map();

var servers = {};
var prefix = '.';
client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
    var searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
        case "play":
            var voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            var permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has('CONNECT')) {
                return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
            }
            if (!permissions.has('SPEAK')) {
                return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
            }
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                var playlist = await youtube.getPlaylist(url);
                var videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                    await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
                }
                return message.channel.send(`✅ Playlist: **${playlist.title}****${video2.duration()}** has been added to the queue!`);
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
                            return message.channel.send('No or invalid value entered, cancelling video selection.');
                        }
                        var videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return message.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, message, voiceChannel);
            }
            break;
        case "skip":
            if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
            if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
            serverQueue.connection.dispatcher.end('Skip command has been used!');
            return undefined;
            break;
        case "stop":
            if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
            if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('Stop command has been used!');
            return undefined;
            break;
        case "volume":
            if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
            if (!serverQueue) return message.channel.send('There is nothing playing.');
            if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 10);
            return message.channel.send(`I set the volume to: **${args[1]}**`);
            break;
        case "np":
            if (!serverQueue) return message.channel.send('There is nothing playing.');
            return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
            break;
        case "queue":
            if (!serverQueue) return message.channel.send('There is nothing playing.');
            return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}}
		`);
            break;
        case "pause":
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return message.channel.send('I have paused the music for you!');
            }
            return message.channel.send('Sorry, Nothings playing bud.');
            break;
        case "resume":
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return message.channel.send("Resumed Song!");
            }
            return message.channel.send('You gotta play something first ;-;.');


            return undefined;
            break;
    }
    async function handleVideo(video, message, voiceChannel, playlist = false) {
        var serverQueue = queue.get(message.guild.id);
        console.log(video);
        var song = {
            id: video.id,
            title: video.title,
            url: `https://www.youtube.com/watch?v=${video.id}`,
            duration: video.duration
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
                console.error(`There was an error: ${error} If it repeats, report it by doing .bugreport [Put The error here] without the []`);
                queue.delete(message.guild.id);
                return message.channel.send(`There was an error: ${error} If it repeats, report it by doing .bugreport [Put The error here] without the []`);
            }
        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            if (playlist) return undefined;
            else return message.channel.send(` **${song.title}** has been added to the queue!`);
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
                message.channel.send('``The queue has ended.``');
                if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                else console.log(reason);
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

        serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
    }

});


client.login(process.env.BOT_TOKEN);
