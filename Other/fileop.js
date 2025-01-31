const fs = require("fs");
const https = require("https");

// const data = fs.readFileSync("./Text/sabaz.txt", "utf-8");
// console.log(data);  // Hello world my name is Sabaz Alam, I like to eat fish and goat meat in meal in any time.

// fs.writeFileSync("./Text/kk.txt", "utf-8", "Hello alam Bhai");

// try {
//   const data = fs.readFileSync("./Text/sabaz.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

///////////////////////////  Write file Synchronous /////////////////

// const data = "Hello my name is Sabaz Alam. I am from Bihar";
// try {
//   fs.writeFileSync("./Texts/kk.txt", data, "utf-8");
// } catch (err) {
//   console.log("Error Occured");
// }

////////////////////////// Wtrite file Asynchronous ////////////////

const data = "Hello World";
fs.writeFile("./Texts/abc.txt", data, "utf-8", (err) => {
  if (err) {
    console.log("Error Occured");
  } else {
    console.log("File writed Succesfully");
  }
});
