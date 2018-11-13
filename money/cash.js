	const mongoose = require("mongoose")
	mongoose.connect('mongodb://DaemoniumAdmin:Dallasrules123.@daemonium-shard-00-00-u2ufm.mongodb.net:27017,daemonium-shard-00-01-u2ufm.mongodb.net:27017,daemonium-shard-00-02-u2ufm.mongodb.net:27017/test?ssl=true&replicaSet=Daemonium-shard-0&authSource=admin&retryWrites=true');
  const moneySchema = mongoose.Schema({
		UserId: String,
		ServerId: String,
		bal: Number,
		bankbal: Number
	})

module.exports = mongoose.model("Money", moneySchema)
