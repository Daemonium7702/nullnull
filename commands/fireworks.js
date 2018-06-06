module.exports.run = async (client, message, args) => {
	const magic = [
		"https://media.giphy.com/media/IjmMzurYulKEw/giphy.gif",
		"https://media1.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif",
		"http://bestanimations.com/Holidays/Fireworks/fireworks/gold-fireworks-animated-gif.gif",
		"https://media.giphy.com/media/peAFQfg7Ol6IE/giphy.gif",
		"https://media.giphy.com/media/w5f56AhubQo8w/giphy.gif",
		"http://bestanimations.com/Holidays/Fireworks/fireworks/ba-awesome-colorful-fireworks-animated-gif-image-s.gif",
		"http://bestanimations.com/Holidays/Fireworks/fireworks/ba-blue-red-fireworks-colorful-pretty-gif-pic.gif",
	]
      const randomAnswer = magic[Math.floor(Math.random() * magic.length)];
  message.channel.send(randomAnswer);
}
	exports.conf = {
  aliases: ['Fireworks', 'fireworks']
  };
  exports.help = {
  name: "Fireworks", description: "Sends some cool fireworks!"
  }
