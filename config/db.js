const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {

    // await mongoose.connect(process.env.MONGO_URL)

    await mongoose.connect('mongodb+srv://pushpamgaurav3:BcQyJf5zWg4ruaMJ@doctor.5hfywgd.mongodb.net/?retryWrites=true&w=majority&appName=Doctor');

    //local server ka db
    // await mongoose.connect('mongodb://localhost:27017/DoctorAppointment')

    //local server ka db
    // await mongoose.connect('mongodb://localhost:27017/DoctorAppointment')

    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);

  } catch (error) {
    console.log(`Mongodb server issue is ${error}`.bgRed.white);
  }
}
module.exports = connectDB;