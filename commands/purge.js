module.exports.run = async (client, message, args, level) => {
 const user = message.mentions.users.first();
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Sorry, you don\'t have permission to delete or purge messages!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.channel.send('Specify an amount of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	if (!amount && !user) return message.channel.send('Specify a user and amount, or just an amount, of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	message.channel.fetchMessages({
			limit: amount
		, })
		.then((messages) => {
			if (user) {
				const filterBy = user ? user.id : client.user.id;
				messages = messages.filter(m => m.author.id === filterBy)
					.array()
					.slice(0, amount);
			}
			message.channel.bulkDelete(messages)
		message.channel.send(`${amount} messages removed Permanently by <@${message.author.id}>`)
				.catch(error => console.log(error.stack));
		});
}
 exports.conf = {
  aliases: ['Purge', 'purge']
  };
  exports.help = {
  name: "Purge", description: "Deletes messages permanently."
  }
