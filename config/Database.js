const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://dipeshmehta2000:dipesh2000@cluster0.0gficir.mongodb.net/");
    console.log("Data base is connected");
}

module.exports = db;
