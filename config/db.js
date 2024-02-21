const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {

    // await mongoose.connect(process.env.MONGO_URL)
    await mongoose.connect('mongodb+srv://pushpamgaurav3:JVbhKHVXDBFWebD0@cluster0.mlmlkis.mongodb.net/?retryWrites=true&w=majority')

    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);

  } catch (error) {
    console.log(`Mongodb server issue is ${error}`.bgRed.white);
  }
}
module.exports = connectDB;