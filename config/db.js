const mongoose = require('mongoose');

const colors = require('colors')




const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(`MongoDB connected : ${conn.connection.host}`.green.inverse);
    } catch (error) {
        console.error(`Error:${error.message}`.red.inverse);
        process.exit(1);
    }
};

module.exports = connectDB