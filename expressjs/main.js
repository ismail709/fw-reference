// how to create an express app
const express = require("express");
const app = express();
// how to start the server
app.listen(3000, () => {
  console.log("Server is running...");
});

////////////////////////////////////////
// how to create endpoints
// GET
app.get("/users", (req, res) => {
  // your code here
});
// POST
app.post("/users", (req, res) => {
  // your code here
});
// PUT
app.put("/users", (req, res) => {
  // your code here
});
// DELETE
app.delete("/users", (req, res) => {
  // your code here
});
////////////////////////////////////////
// use parameters in routes
app.get("/users/:id", (req, res) => {
  // get the value of id
  let id = req.params.id;
  // your code here
});
////////////////////////////////////////
// access request body
// json requests ==========
// 1. use json middleware
app.use(express.json());
// 2. access the json data
app.post("/users", (req, res) => {
  let data = req.body;
});
// html form requests ==========
// 1. use urlencoded middleware
app.use(express.urlencoded({ extended: true }));
// 2. access the form data
app.post("/users", (req, res) => {
  let data = req.body;
});
////////////////////////////////////////
// send response
// json response ==========
app.get("/users", (req, res) => {
  res.json(/* data */);
});
// any type of data response ==========
app.get("/users", (req, res) => {
  res.send(/* data */);
});
// file response ==========
app.get("/users", (req, res) => {
  res.sendFile(/* file */);
});
////////////////////////////////////////
// set status code
app.get("/users", (req, res) => {
  res.status(200).send(/* data */);
});
