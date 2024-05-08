// --- Import MongoClient ---
import {  MongoClient} from "../deps.ts";

//NOTE - New MongoClient
const client = new MongoClient();

//NOTE - Connect
await client.connect("mongodb://localhost:27017/oak-test");
const db = client.database();

export default db