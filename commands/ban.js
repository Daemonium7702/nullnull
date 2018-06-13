module.exports.run = async (client, message, args) => {
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("It appears you don't have permission to do this.")
            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("It appears I don't have permission to do this.")
            
            let user1 = message.mentions.users.first();
            let reason1 = message.content.split(" ").slice(2).join(" ");
            let modlog1 = client.channels.find("name", "incidents" || "Incidents");

            if(!modlog1) return message.reply("I've detected that this server doesn't have a mod-log channel.");
            if(message.mentions.users.size < 1) return message.reply("You must mention someone in order to ban them!");
            if(!reason1) return message.reply("Enter a reason for ban.");
            if(!message.guild.member(user1).kickable) return message.reply("I can't ban the owner!");
            message.guild.member(user1).ban(reason1);
        }
         exports.conf = {
  aliases: ['Ban', 'ban']
  };
  exports.help = {
  name: "Ban", description: "bans"
  }
