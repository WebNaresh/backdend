const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.LOCALHOST).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
// npm i mongoose
