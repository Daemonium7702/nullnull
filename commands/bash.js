    
module.exports.run = async (client, message, args) => {
    var cmmd = args.join(" ").replace("bash ", "");
            (cmmd, (err, stdout, stderr).exec => {
                if (err) {
                    message.channel.send("err");
                    return;
                }
                if (stdout != null) {
                    message.channel.send("```\n" + stdout + "\n```")
                }
                if (stderr != null) {
                    message.channel.send("```\n" + stderr + "\n```")
                }
            }
            )};
              exports.conf = {
  aliases: ['bash', 'Bash']
  };
  exports.help = {
  name: "Bash", description: "Evaluates code."
  }
