module.exports.run = async (client, message, args, level) => { 
var caesarShift = args[0] 
var amount = args[1]

	// Wrap the amount
	if (!amount){
		message.channel.send("include a shift value.");
}
	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < caesarShift.length; i ++) {

		// Get the character we'll be appending
		var c = caesarShift[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
}
			// Lowercase letters
			else{ if ((code >= 97) && (code <= 122)){
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}
		}
		}

		// Append
		output += c;

	}

	// All done!
	message.channel.send(output);

};
exports.conf = {
    aliases: ['Caesar', 'caesar']
};
exports.help = {
    name: "Caesar",
    description: "shifts text."
}
