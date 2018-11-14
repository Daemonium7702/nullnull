const mongoose = require("mongoose")
	  const invenSchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		Millionaire: Number,
    RichBoi: Number,
    BoiWithADollar: Number,
    Skull: Number,
		exists: Number,
		  username: String
	})

module.exports = mongoose.model("inven", moneySchema)
