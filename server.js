const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let facebookcounter = 5;
let twittercounter = 5;
let googlecounter = 5;
let symbaloocounter = 5;
let pinterestcounter = 5;
let emailcounter = 5;

app.get("/", (req, res) => {
  res.json({
    facebookcounter,
    twittercounter,
    googlecounter,
    symbaloocounter,
    pinterestcounter,
    emailcounter,
  });
});

app.put("/twitter", (req, res) => {
  twittercounter++;
  res.json({
    twittercounter,
  });
});
app.put("/facebook", (req, res) => {
  facebookcounter++;
  res.json({
    facebookcounter,
  });
});
app.put("/google", (req, res) => {
  googlecounter++;
  res.json({
    googlecounter,
  });
});
app.put("/symbaloo", (req, res) => {
  symbaloocounter++;
  res.json({
    symbaloocounter,
  });
});
app.put("/pinterest", (req, res) => {
  pinterestcounter++;
  res.json({
    pinterestcounter,
  });
});
app.put("/email", (req, res) => {
  emailcounter++;
  res.json({
    emailcounter,
  });
});

const uri =
  "mongodb+srv://me:al2@cluster0.5b17gly.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("server started");
});

const corsOptions = {
  origin: "*",
  methods: "GET,PUT",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/.netlify/functions/api", router);
