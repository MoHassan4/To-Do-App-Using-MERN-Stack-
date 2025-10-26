const mongose = require("mongoose");


const connectMongodb = async()=>{
    try{

        await mongose.connect(process.env.CONNECTION_URL);
        console.log("Database Connected Successfully")

    }catch(error){
        console.log("Database Connection is failed");
        process.exit(1);
    }
}

module.exports = connectMongodb;