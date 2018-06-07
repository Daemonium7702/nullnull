module.exports.run = async (client, message, args) => {
    const mss = args.join(" ");
    const answers = [
      "10%, no way man",
      "25% This could work out, just be careful",
      "10%, no way man",
      "25% This could work out, just be careful",
      "10%, no way man",
      "25% This could work out, just be careful",
      "10%, no way man",
      "25% This could work out, just be careful",
      "10%, no way man",
      "25% This could work out, just be careful",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "25% This could work out, just be careful",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "50% I wish you luck, this is both good and bad",
      "90.09099% Great Match!! Go For it!!!",
      "75% This could work! Go For it!",
      "75% This could work! Go For it!",
      "75% This could work! Go For it!",
      "75% This could work! Go For it!",
      "75% This could work! Go For it!",
      "75% This could work! Go For it!",
      "200% This is the best match ive ever seen!! Wow!!!",
      "10%, no way man",
      "25% This could work out, just be careful",
      "10%, no way man",
      "25% This could work out, just be careful",
      ]
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      message.channel.send({embed: {color: 10834749
                                  ,fields:[{ name: "love", value: mss + randomAnswer },],
                                 timestamp: new Date(), footer: { icon_url: client.user.avatarURL, text: "© DeathBot" } } });
    
    
  }
  exports.conf = {
  aliases: ['Lovec', 'lovec']
  };
  exports.help = {
  name: "Lovec", description: "Calculates compatability."
  }
  
