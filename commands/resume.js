const Discord = require("discord.js");
const client = new Discord.Client();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const opus = require('node-opus');
const youtube = new YouTube('AIzaSyB23US7bJ7DJvqt_qTPZaXAdy9RV2GKJxg');
client.queue = new Map();
var prefix = '.';
module.exports.run = async (client, message, args) => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
    var searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = client.queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
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
        var serverQueue = client.queue.get(message.guild.id);
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
           client.queue.set(message.guild.id, queueConstruct);

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
        var serverQueue = client.queue.get(guild.id);

        if (!song) {
            serverQueue.voiceChannel.leave();
            client.queue.delete(guild.id);
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
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);

        serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
    }
}
exports.conf = {
    aliases: ['Resume', 'resume']
};
exports.help = {
    name: "Resume",
    description: "Resumes music."
}
