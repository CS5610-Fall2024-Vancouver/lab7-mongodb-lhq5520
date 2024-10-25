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

//insert the data
async function insertTasks(client) {
    const tasks = [
      {
        title: "Complete MongoDB CRUD activity",
        description: "Write a Node.js script that performs CRUD operations in MongoDB Atlas",
        completed: false,
        dueDate: "2024-11-15"
      },
      {
        title: "Learn Node.js",
        description: "Study and practice basic Node.js concepts",
        completed: false,
        dueDate: "2024-11-10"
      },
      {
        title: "Plan a vacation",
        description: "Plan an end-of-year vacation",
        completed: false,
        dueDate: "2024-12-01"
      }
    ];
  
    const result = await client.db("taskManagerDB").collection("task").insertMany(tasks);
    console.log(`${result.insertedCount} tasks were inserted`);
  }
  
  async function main() {
    const uri = "mongodb+srv://989994:Ab18955176911@cluster0.q4jov.mongodb.net/";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas!");
  
      // Insert tasks
      await insertTasks(client);
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
    }
  }
  
  main().catch(console.error);

  //read the data

  async function getTasks(client) {
    const tasks = await client.db("taskManagerDB").collection("task").find().toArray();
    console.log("All Tasks:");
    tasks.forEach(task => console.log(task));
  }
  
  async function main() {
    const uri = "mongodb+srv://989994:Ab18955176911@cluster0.q4jov.mongodb.net/";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas!");
  
      // Insert tasks
      await insertTasks(client);
  
      // Retrieve tasks
      await getTasks(client);
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
    }
  }
  
  main().catch(console.error);

  //update the data
  async function updateTask(client, taskTitle) {
    const result = await client.db("taskManagerDB").collection("task").updateOne(
      { title: taskTitle },
      { $set: { completed: true } }
    );
  
    if (result.matchedCount > 0) {
      console.log(`Task "${taskTitle}" was updated successfully.`);
    } else {
      console.log(`Task "${taskTitle}" not found.`);
    }
  }
  
  



  
