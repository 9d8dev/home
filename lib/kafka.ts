import { Kafka } from "@upstash/kafka";

const kafka = new Kafka({
  url: process.env.KAFKA_URL || "",
  username: process.env.KAFKA_USERNAME || "",
  password: process.env.KAFKA_PASSWORD || "",
});

export const p = kafka.producer();
