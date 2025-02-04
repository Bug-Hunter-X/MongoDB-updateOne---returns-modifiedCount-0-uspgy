```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument(uri, dbName, collectionName, filter, update) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.updateOne(filter, update);
    if (result.modifiedCount === 0) {
      console.error("No documents matched the filter. Check your filter criteria.");
      //Further checks to see if the filter is correct or not.  
      //If the filter is not correct, throw an error here. 
    } else {
      console.log(`Modified count: ${result.modifiedCount}`);
    }
  } catch (error) {
    console.error(`Error updating document: ${error}`);
  } finally {
    await client.close();
  }
}

// Example usage (replace with your actual values)
const uri = "mongodb://localhost:27017/"; // Replace with your MongoDB connection string
const dbName = "myDatabase";
const collectionName = "myCollection";
//Ensure filter is correct and the types are matching with the document in collection.
const filter = { _id: 1 }; 
const update = { $inc: { count: 1 } };

updateDocument(uri, dbName, collectionName, filter, update).catch(console.dir);
```