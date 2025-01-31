const fs = require("fs");
const https = require("https");

// console.log("Hello Alam");
// https.get("https://dummyjson.com/products/users", (res) => {
//   console.log("Data Fetch Succesully");
// });

// setTimeout(() => {
//   console.log("Hello World");
// }, 5000);

//////////////////////////////////////////////////////////
fs.readFile("./Text/sab.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ERRoR");
    return;
  }
  console.log("File Read: ", data);
});

// fs.readFile("./Text/sab.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File Read:", data);
// });

// const data = fs.readFileSync("./Text/sab.txt", "utf-8");
// console.log("File Read:", data);
