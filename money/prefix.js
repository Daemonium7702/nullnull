const mongoose = require("mongoose")
	  const prefSchema = mongoose.Schema({
		ServerId: String,
		  Prefix: String
	})

module.exports = mongoose.model("pref", prefSchema)
