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
  _id : String,
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
  tags: String,
    // {
    //   type: Array,
    //   validate: {
    //     isAsync:true,
    //     validator: function(v,callback) { 
    //       setTimeout(() =>{
    //         //do some async work
    //         const result = v && v.length > 0
    //         callback(result)
    //       },4000)
          
          
    //      },
    //       message: "Course should have atleast one tag..",
      
    //   }
    // },
  
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    //required: function () {
    //  return this.isPublished;
    //},
    min: 10,
    max: 20,
    get: v => Math.round(v),
    set: v => Math.round(v)
  },
});

const Course = mongoose.model("Course", courseSchema);

// async function createCustomer() {
//   const course = new Course({
//     name: "Angular Course",
//     //category:'-',
//     author: "roopam",
//     tags: ['web'],
//     isPublished: true,
//     price:15.8
//   });

//   try {
//     const result = await course.save(); //mongodb assigns its a unique identifier
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// createCustomer();

async function getCourses(id){
  try{
    const courses = await Course.findOne(id)
   console.log(courses)
    //console.log(courses[0].price)
  }
 catch(err){
   console.log(err.message)

}
}
getCourses("5a68fdd7bee8ea64649c2777");
