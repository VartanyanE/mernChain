import mongoose from "mongoose";
import mernModel from "../models/model.js";
import dotenv from "dotenv";
dotenv.config();
// This file empties the Books collection and inserts the books below.

mongoose.connect(
  "mongodb+srv://lakers:lakers323@cluster0.cfxqh.mongodb.net/blockchain?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const seedData = [
  new mernModel({
    title: "seeded title",
    message: "seeded message",
    
  }),
  
];
var done = 0;
for (var i = 0; i < seedData.length; i++) {
  seedData[i].save(function (err, result) {
    done++;
    if (done === seedData.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
