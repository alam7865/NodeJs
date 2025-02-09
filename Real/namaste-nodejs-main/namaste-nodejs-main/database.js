// const { MongoClient } = require("mongodb");

// const url =
//   "mongodb+srv://namastedev:ECXK5j0d4OuHZhs6@namastenode.rc211ms.mongodb.net/";

// const client = new MongoClient(url);

// const dbName = "HelloWorld";

// async function main() {
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   const collection = db.collection("User");

//   const data = {
//     firstname: "Ranveer",
//     lastname: "Singh",
//     city: "Mumbai",
//     phoneNumber: "987543210",
//   };

//   const insertResult = await collection.insertOne(data);
//   console.log("Inserted documents =>", insertResult);

//   // Read
//   const findResult = await collection.find({}).toArray();
//   console.log("Found documents =>", findResult);

//   const countResult = await collection.countDocuments({});
//   console.log("Count of documents in the User collection =>", countResult);

//   // Find all documents with a filter of firstname: Deepika

//   const result = await collection.find({ firstname: "Deepika" }).count();
//   console.log("result => ", result);

//   return "done.";
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete

/////////////////////////////////////////////////////////////////////////////////////////
// const url = "mongodb+srv://user1:user@cluster0.wamak.mongodb.net/";
const { MongoClient } = require("mongodb");

// const url = "mongodb+srv://user1:user@cluster0.wamak.mongodb.net/";
// const url = "mongodb+srv://sabbajalam5:alam@cluster0.yqupy.mongodb.net/";
const url = "mongodb+srv://sabbajalam5:alam@cluster0.kdvrm.mongodb.net/";
// const url =
//   "mongodb+srv://sabbajalam5:alam@cluster0.kdvrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // const data = {
  //   firstname: "Ranveer",
  //   lastname: "Singh",
  //   city: "Mumbai",
  //   phoneNumber: "987543210",
  // };

  // const data1 = {
  //   firstName: "Sabaz",
  //   lastName: "Alam",
  //   city: "Bihair",
  // };

  // const data2 = {
  //   firstName: "Sohail",
  //   lastName: "Alam",
  //   city: "Assam",
  // };

  // const data3 = {
  //   firstName: "Sony",
  //   lastName: "Khatun",
  //   city: "Delhi",
  // };

  // const data4 = {
  //   firstName: "Sahnawaz",
  //   lastName: "Alam",
  //   city: "Hydrabad",
  // };

  // const data5 = {
  //   firstName: "Gopal",
  //   lastName: "Das",
  //   city: "Kokrajhar",
  // };

  const data = [
    {
      firstName: "Ranveer",
      lastName: "Singh",
      city: "Mumbai",
      phoneNumber: "987543210",
    },
    {
      firstName: "Sabaz",
      lastName: "Alam",
      city: "Bihair",
    },
    {
      firstName: "Sohail",
      lastName: "Alam",
      city: "Assam",
    },
    {
      firstName: "Sony",
      lastName: "Khatun",
      city: "Delhi",
    },

    {
      firstName: "Sahnawaz",
      lastName: "Alam",
      city: "Hydrabad",
    },

    {
      firstName: "Gopal",
      lastName: "Das",
      city: "Kokrajhar",
    },
  ];

  // Q) Find the length of data?

  // const res = data.length;
  // console.log("Length: " + res);

  // Q)Insert data to database i.e MongoDB

  const dd = await collection.insertMany(data);
  // console.log(`Inserted ${dd.insertedCount} documents.`);

  // Q)Fetch all documents

  // const allUser = await collection.find().toArray();
  // console.log("Data: ", allUser);

  // Q) Update a user city
  // const updateResult = await collection.updateOne(
  //   { firstname: "Ranveer" },
  //   { $set: { city: "Assam" } }
  // );

  // console.log(`Modified ${updateResult.modifiedCount} document.`);

  // Q) Const delete One user
  // const deleteResult = await collection.deleteOne({ firstName: "Ranveer" });
  // console.log(`Deleted ${deleteResult.deletedCount} document.`);

  // const user = await collection.findOne({ firstName: "Ranveer" });

  // if (user) {
  //   console.log("Ranveer Singh is still in the database:", user);
  // } else {
  //   console.log("Ranveer Singh has been deleted.");
  // }

  // Q) Count the documents

  let count = await collection.countDocuments();
  console.log(count);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
