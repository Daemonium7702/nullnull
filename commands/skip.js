const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const opus = require('node-opus');
const youtube = new YouTube('AIzaSyB23US7bJ7DJvqt_qTPZaXAdy9RV2GKJxg');
const queue = new Map();

var servers = {};
var prefix = '.';
module.exports.run = async (client, message, args) => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
    var searchString = args.slice(1).join(' ');
    var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
        case "skip":
            if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
            if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
            serverQueue.connection.dispatcher.end('Skip command has been used!');
            return undefined;
            break;
    }
}
exports.conf = {
    aliases: ['Skip', 'skip']
};
exports.help = {
    name: "Skip",
    description: "Skips music."
}
