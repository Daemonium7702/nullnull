   if(command == "inv") {
    return message.reply({embed: {color: 9198700, author: {name: client.user.username, icon_url: client.user.avatarURL }
                                  , title: "invite", description: "Invites to the bot and the server.",
                                  fields:[{ name: "To invite me to another server:", value:"https://discordapp.com/api/oauth2/authorize?client_id=447588362350755840&permissions=8&scope=bot" },
                                            { name: "And to join my creators host server:", value: "https://discord.gg/f7Ntjek  Have fun! Everyone there likes to work on cryptology!" }],
                                 timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "©DaeBot" } } });
  }
   exports.conf = {
  aliases: ['Inv', 'inv']
  };
  exports.help = {
  name: "Inv", description: "Creates invites (bot support server) and bot invite."
  }
