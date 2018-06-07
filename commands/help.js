module.exports.run = (client, message, args) => {
	message.channel.send('I have Private Messaged you with a list of commands.');
message.author.send({embed: { color: 9198799, author: { name: client.user.username, icon_url: client.user.avatarURL }
                              , title: "CommandList", description: "Currenly, I only have a few commands, and will get more soon.", 
                              fields: [{ name:"morse", value: "Converts a string to morse code"},
				       {name: "o", value: "replaces all values in a string with an 'o;"},

				       {name: "report", value: "reports user to admins in the server"},
                                        { name:  "`_ _ _ _ _ _ _ _ _ _`", value: "This is a secret command"}, 
                                       { name: "`_ _ _ _ 1`", value: "This is also a secret command"}],
                              timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
					       
					       message.channel.send({embed: { color: 4744744, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "Fun!:", description: "Commands",
                              fields: [{name: "Bugreport", value: "Alerts the owner of an issue."},
				       { name: "Say", value: "This command is used as such `.say {word}`" }, 
                                       { name: "tts", value: "sends a text to speech message"},
                                       { name: "ping", value: "You can ping the server, and return api, and normal latency values. Usage:`.ping`" },
				       
				      { name: "line", value: "Makes a nice squiggly line"},
				       {name: "rr1", value: "Russian roulette (one bullet ---> will add more later. i am too lazy lol"},
                                       { name:"meme", value: "sends a random meme"},
                                       { name:"ss", value: "compete with other users in different servers to set my bots Status"},
                                        {name: "lovec", value: "calculates the probability of love between to things. `Usage: .lovec @mention+@mention`"},
                                       {name: "dice", value: "rolls some dice"},
				       {name: "dictionary", value:"Looks up a string in urban dictionary"},
                                      {name: "fusrodah", value: "makes a fus ro dah meme"},
				       {name: "sigh", value: "sighs"},
				       {name: "shrink", value: "makes stuff tiny"},
				       {name: "8Ball", value: "It's Basketball..... what do you expect me to say?"},
				       {name: "magicify", value:"Sends your message.... but ***embeded***"},
				    
				       {name: "fireworks", value: "shoots fireworks, requested by eitanwass#0607"}],
				timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });

					       
					        message.channel.send({embed: { color: 256744, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "Gifs:", description: "Commands",
                              fields: [{name: "bomb", value: "Explodes"},
				       {name: "forcecrush", value: "random crush gif"},
                                       { name:"rickroll", value: "Do I really have to explain this?"},
                                       ],
				timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });

				     
					       message.channel.send({embed: { color: 424344, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "Moderation:", description: "Commands",
                              fields: [{name:"Purge", value: "Deletes a specified number of messages (***UP TO 100***)"},
				        { name: "kick", value: "Kicks a user. usage:`.kick {@mention}`" }, 
                                       { name:  "ban", value: "***NOT WORKING ATM*** This will ban a member from your server. Usage:`.ban {@mention}`"},
                                       {name: "reverse",value: "it reverses text"},
				       { name: "inv", value: "This invites you to both the bt, and the server!"},
                                        {name: "botinfo", value: "displays info on the bot"},
				       {name: "serverinfo", value: "displays basic info on the server"},
				       {name: "calc", value: "calculates an expression"}
                                       ],
				timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });

  message.channel.send({embed: { color: 475744, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "NSFW:", description: "Commands",
                              fields: [{name:"ass", value: "nsfw ass"},
				       {name:"hentai", value: "nsfw Hentai"},
				       {name:"nsfw", value: "Sends NSFW pictures (only in NSFW channels)"}],
				timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
	
  message.channel.send({embed: { color: 451754, author: {name: client.user.username, icon_url: client.user.avatarURL }
                    , title: "Music:", description: "Commands",
                              fields: [{name:"play", value: "Plays Music"},
				       {name:"skip", value: "skips a song"},
				       {name:"np", value: "shows the song currently playing"},
				       {name:"pause", value: "pauses the music."},
				       {name: "resume", value: "resumes paused music"},
				       {name: "stop", value: "turns of the music"},
				       {name: "volume", value: "Displays volume"}
				      ],
				timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
				       }
	
                exports.conf = {
  aliases: ['Help', 'help']
  };
  exports.help = {
  name: "Help", description: "Ummmmm Sends help?"
  }
	
