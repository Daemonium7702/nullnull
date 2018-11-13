	const mongoose = require("mongoose")
  const moneySchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		bal: Number,
		bankbal: Number
	})

module.exports = mongoose.model("Money", moneySchema)
