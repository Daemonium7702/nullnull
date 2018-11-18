	const mongoose = require("mongoose")
	  const ringringSchema = mongoose.Schema({
		ServerId: String,
		ChannelId: String,
		Active: Number,
		Talking: Number,
		ServerSpoken: Number
	})

module.exports = mongoose.model("ring", ringringSchema)
