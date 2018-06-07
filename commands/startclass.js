module.exports.run = async (client, message, args) => {

	const ttt =args.join (' ');
	message.channel.send('<@&448095670394421259>, <@&453893282628632579>');
		message.reply({embed: { color: 9198799, author: { name: client.user.username, icon_url: client.user.avatarURL }
                              , title: "Thank You!", description: "WELCOME!", 
                              fields: [{ name: "Topic:", value: ttt }],
				        timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" }  } });
				       }
	  exports.conf = {
  aliases: ['Startclass', 'startclass']
  };
  exports.help = {
  name: "Startclass", description: "Starts a class."
  }
