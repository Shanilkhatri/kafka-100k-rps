// import { kafka } from "./kafka-client/client.js";
const {kafka} = require("./kafka-client/client.js")
async function initadmin() {
    try{
        const admin = kafka.admin();
        console.log('admin connecting...')
        admin.connect();
        console.log('admin connected')
    
        console.log('creating topic => [rider-updates]')
        await admin.createTopics({
            topics: [
                {
                    topic: 'rider-updates',
                    numPartitions: 2,
                    // replicationFactor: 1
                }
            ]
        })
        console.log('topic created successfully')
        await admin.disconnect()
    }catch(err){
        console.log("Admin connection and topic creation errored out ===>",err)
    }
    
}

module.exports = {initadmin}