const Discord = require("discord.js");
const fs= require('fs');
let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
module.exports.run = async (client, message, args) => {
    let sender = message.author;
    let prefix = "."
    if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
    if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;
    fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) => {
        if (err) console.log(err)
    })
    

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
        console.log('Econ. Deployed');
    }

    
  exports.conf = {
  aliases: ['Bal', 'bal']
  };
  exports.help = {
  name: "Bal", description: "Shows balance."
  }
