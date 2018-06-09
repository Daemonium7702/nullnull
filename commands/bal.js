const Discord = require("discord.js");
const economy= require('discord-eco');
module.exports.run = async (client, message, args) => {
    
    let prefix = "."
   // Additional Tip: If you want to make the values guild-unique, simply add + message.guild.id whenever you request.
        economy.fetchBalance(message.author.id + message.guild.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts the data with it into i.
            // Lets use an embed for This
            const embed = new Discord.RichEmbed()
                .setDescription(`**${message.guild.name} Bank**`)
                .setColor(0xD4AF37) // You can set any HEX color if you put 0x before it.
                .addField('Account Holder',message.author.username,true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
                .addField('Account Balance',i.money,true)


            // Now we need to send the message
            message.channel.send({embed})

        })

    }




    
  exports.conf = {
  aliases: ['Bal', 'bal']
  };
  exports.help = {
  name: "Bal", description: "Shows balance."
  }
