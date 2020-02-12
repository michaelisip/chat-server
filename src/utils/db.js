const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const URI = process.env.ATLAS_URI

const MongooseConnection = async () => {
    await mongoose.connect(URI, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    console.log("MongoDb connection established...")
}

module.exports = MongooseConnection