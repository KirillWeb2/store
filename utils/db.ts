import mongoose from "mongoose";

const { MONGO_URL } = process.env;

if (!MONGO_URL) throw new Error("MONGO_URL is not defined.");

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGO_URL);

  return cached.conn;
};
