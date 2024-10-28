# kafka-practice

### This is a POC for how to use kafka here I have created two services exactly demonstarting how kafka works on PUBSUB 

> 1. producer-service : has admin connections and producer connections and is used to produce messages
> 2. consumer-servuce : has consumer connection and subscribes to topic and then listens for updates and console logs the input as and when an event `in this case a request` is triggered.

## pre-requisites
- Docker basics
- Nodejs

## pull zookeeper docker image and start on port 2181

> sudo docker run -p 2181:2181 zookeeper 

## pull kafka docker image and start on port 9092

> sudo docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

