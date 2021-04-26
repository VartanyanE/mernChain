import mongoose from "mongoose";

// we build our schema
const mernSchema = mongoose.Schema({
  
  title: "String",
  message: "String",
//   likeCount: {
//     type: Number,
//     default: 0,
//   },
//   selectedFile: "String",
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
// turn our schema into a model
const mernModel = mongoose.model("Mern", mernSchema);
// export our model to our controller
export default mernModel;
