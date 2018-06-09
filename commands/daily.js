const fs = require('fs')
const moment = require('moment');

let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
module.exports.run = async (client, message, args) => {
    let sender = message.author;
    let prefix = "."
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;
    if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = 'Not Collected';
    fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) => {
        if (err) console.log(err)
    })
    if (message === prefix + "daily") {
        if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
            userData[sender.id + message.guild.id].lastDaily = moment().format('L')
            userData[sender.id + message.guild.is].money += 250
            message.channel.send({
                embed: {
                    title: "Daily Reward",
                    description: `You got 250 Dollars as your daily reward!`
                }
            })
        } else {
            message.channel.send({
                embed: {
                    title: "Daily Reward",
                    description: "Youve already collected your daily reward! Collect your next one in " + moment().endOf('day').fromNow
                }
            })
        }
    }
    fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) => {
        if (err) console.log(err)
    });
}
exports.conf = {
    aliases: ['Daily', 'daily']
};
exports.help = {
    name: "Daily",
    description: "Daily Money."
}
