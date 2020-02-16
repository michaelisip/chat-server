const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.ATLAS_URI;

const MongooseConnection = async () => {
  try {
    await mongoose.connect(URI, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('MongoDb connection established...');
  } catch (error) {
    console.error(error);
  }
};

module.exports = MongooseConnection;
