const express = require("express");
const app = express();

const {initProducer,sendMessage} = require("./producer-connect")
const {initadmin} = require("./admin-connect")

async function init(){
    try{
        await initadmin()
        await initProducer()
    }catch(error){
        console.log("Error initializing ==> ",error)
    }
    
}

init();

app.get("/produce", async (req, res) =>  {
    try{
         // random message
        const key = "rider-co-ordinates";
        const value = Math.random().toString();
        // produce message
        await sendMessage("rider-updates",key,value)
        res.json({success:true, msg:"Message sent successfully"})
    }catch(error){
        console.log("Error sending message ==> ",error)
        res.status(500).json({success:false, msg:"Error sending message"})
    }
   
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
});