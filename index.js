const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground",{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connected to Mongodb.."))
  .catch((err) => console.log("Could not connect to Mongodb..", err));

const courseSchema = new mongoose.Schema({
  //keyvalue pairs we should have for course documents
  //course documents schema
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCustomer(){
  try{
    const course = new Course({
      name: 'NodeJs',
      author: 'roopam',
      tags: ["Node", "Backend"],
      isPublished: true,
    })
    const result = await course.save();
    console.log(result);
  }
  catch(err){
    console.log(err)
  }
  }
 
createCustomer();

