```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument(uri, dbName, collectionName, filter, update) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(filter, update);
    console.log(`Modified count: ${result.modifiedCount}`);
  } finally {
    await client.close();
  }
}

// Example usage (replace with your actual values)
const uri = "mongodb://localhost:27017/"; // Replace with your MongoDB connection string
const dbName = "myDatabase";
const collectionName = "myCollection";
const filter = { _id: 1 };
const update = { $inc: { count: 1 } };

updateDocument(uri, dbName, collectionName, filter, update).catch(console.dir);
```