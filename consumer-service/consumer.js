const {kafka} = require("./kafka-client/client.js")
const consumer = kafka.consumer({ groupId: "test-group" });

async function initConsumer() {
    try{
        await consumer.connect()
        console.log("Consumer connected")
    }catch(error){
        console.log("Error connecting consumer ==> ",error)
    }
}
const run = async () => {
   try{
       await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });
   
       await consumer.run({
           eachMessage: async ({ topic, partition, message }) => {
               console.log("Message received",{
                   partition,
                   offset: message.offset,
                   value: message?.value?.toString(),
               });
           },
       });
   }catch(error){
       console.log("Error running consumer ==> ",error)
   }
};

module.exports = {initConsumer,run}