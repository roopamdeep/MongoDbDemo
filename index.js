const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to Mongodb.."))
  .catch((err) => console.log("Could not connect to Mongodb..", err));

const courseSchema = new mongoose.Schema({
  //keyvalue pairs we should have for course documents
  //course documents schema
  name: {
    type: String,
    //required: true,
    minlength: 5,
    maxlength: 255,
    //match: /pattern/
  },
  category: {
    type: String,
    enum: ["web", "mobile"],
  },
  author: String,
  tags: 
    {
      type: Array,
      validate: {
        validator: function(v) { return  v && v.length > 0 },
          message: "Course should have atleast one tag..",
      
      }
    },
  
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    //required: function () {
    //  return this.isPublished;
    //},
    min: 10,
    max: 20,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCustomer() {
  const course = new Course({
    name: "Angular Course",
    //category:'-',
    author: "roopam",
    tags: ["Angular"],
    isPublished: true,
    //price:30
  });

  try {
    const result = await course.save(); //mongodb assigns its a unique identifier
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

createCustomer();

// async function getCourses(){
//   const courses = await Course.find()
//   console.log(courses)
// }
// getCourses();
