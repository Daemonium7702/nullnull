const mongoose = require("mongoose")
	  const lvlSchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		exp: Number,
		level: Number,
		exists: Number,
		  username: String
	})

module.exports = mongoose.model("lvl", moneySchema)
