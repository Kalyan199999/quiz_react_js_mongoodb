const mongoose = require("mongoose");

const url = process.env.CONNECTION_STRING

const connection = async ()=>{

    try {
        
        await mongoose.connect(`${url}/quiz`);
        console.log("connected to quiz database");
        
    } 
    catch (error) {
        console.log(`error in connecting to database ${error.message}`);
        
    }
}

module.exports = connection;