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
case "pause":
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return message.channel.send('I have paused the music for you!');
            }
            return message.channel.send('Sorry, Nothings playing bud.');
            break;
             }
}
exports.conf = {
    aliases: ['Pause', 'pause']
};
exports.help = {
    name: "Pause",
    description: "Pauses music."
}
