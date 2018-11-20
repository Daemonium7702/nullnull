const mongoose = require("mongoose")
	  const lvlSchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		bal: Number,
		bankbal: Number,
		exists: Number,
		  username: String
	})

module.exports = mongoose.model("lvl", moneySchema)
