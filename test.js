const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://989994:Ab18955176911@cluster0.q4jov.mongodb.net/";   // update your own connection string here

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
