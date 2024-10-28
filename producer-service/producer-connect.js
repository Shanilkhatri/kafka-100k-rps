// import {kafka} from "./kafka-client/client.js"
const {kafka} = require("./kafka-client/client.js")

const producer = kafka.producer();
async function initProducer() {
    try{
        await producer.connect()
        console.log("Producer connected")
    }catch(error){
        console.log("Error connecting producer ==> ",error)
    }
}

async function sendMessage(topic, key, value) {
    try{
        await producer.send({
            topic,
            messages: [
                {
                    key,
                    value
                }
            ]
        })
        console.log("Message sent successfully")
    }catch(error){
        console.log("Error sending message ==> ",error)
    }
}

module.exports = {initProducer,sendMessage}