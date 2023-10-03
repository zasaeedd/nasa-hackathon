const express = require("express");
const app = express();
// import all defined routes
const UserRouter = require("./routes/users");

// set view engine to render html using ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Request Obliged");
  res.render("index", { text: "text" });
});

// handle routes
app.use("/users", UserRouter);

// listen on port 3000
app.listen(3000, () => {
  console.log("Listening and serving on port 3000");
});
