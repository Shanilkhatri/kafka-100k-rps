const express = require("express");
const app = express();

const {initConsumer,run} = require("./consumer.js")


app.listen(3001, () => {
    console.log("Consumer service started on port 3000");
    initConsumer()
    run()
});