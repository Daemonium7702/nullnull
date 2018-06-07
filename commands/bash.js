    
module.exports.run = async (client, message, args) => {
    var cmd = args.join(" ").replace("bash ", "");
            exec(cmd, (err, stdout, stderr) => {
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
            });
              exports.conf = {
  aliases: ['bash', 'Bash']
  };
  exports.help = {
  name: "Bash", description: "Evaluates code."
  }
