const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB Server..."))
  .catch((err) => console.log("Not able to connect to the server", err));

//Schema:To define shape of documents
const courseSchema = new mongoose.Schema({
  //we pass an object to an instance of this class
  _id:String,
  name: String, //keyvalue pairs in c documents
  author: String,
  tags: [String], //array of strings
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

//Compile this schema into a  model which gives us a class and then create a object based on that class
const Course = mongoose.model('Course', courseSchema);

//Query 1-----------------------------------
// async function getCourse() {
//     return await Course.find({isPublished:true, tags: 'backend'})
//     .sort('name:1') //'name'
//     .select({name:1, author:1 }) //'name author'
// }
// async function run(){
//     const courses = await getCourse();
//      console.log(courses)
// }
// run()

//Query 2---------------------------------------------
// async function getCourse() {
//   return await Course.find({ isPublished: true, tags: { $in: ['frontend','backend']} })
//     .sort("price:-1") //'name'
//     .select({ name: 1, author: 1 }); //'name author'
// }
// async function run() {
//   const courses = await getCourse();
//   console.log(courses);
// }
// run();

//Query 3---------------------------------------------
// async function getCourse() {
//     return await Course.find({isPublished: true})
//         .or(
//             {price: {$gte: 15}},

//         {name: /.*by.*/i}
//         )
//       .sort("price:-1") //'name'
//       .select({ name: 1, author: 1 }); //'name author'
//   }
//   async function run() {
//     const courses = await getCourse();
//     console.log(courses);
//   }
//   run();




//approach 1 update: QUERY FIRST

// async function updateCourse(id){
//     const c =  await Course.findById(id);
//     //console.log(c);
//    try{
//     //    console.log(isPublished);
       
//     c.isPublished = false;
//     c.author = 'Another Author';
//     // c.set({
//     //     isPublished:true,
//     //     author: 'Another Author'
//     // })
    
//     const result = await c.save()
//     console.log(result)
//    }
//    catch(err){
//        console.log(err)
//    }
    
// }
//updateCourse("5a68fdc3615eda645bc6bdec");
//approach 1 update: Update FIRST

// async function updateCourse(id){
//   const c =  await Course.update({_id:id}, {
//    $set:{
//      author:'Mosh',
//      isPublished:false
//    }
//   })
  
//   console.log(c)
 
 
  
// }
// updateCourse("5a68fdc3615eda645bc6bdec");


async function removeCourse(id){
// const result = await Course.deleteOne({_id: id})
 const result = await Course.findByIdAndRemove(id)
 console.log(result)
  
}
removeCourse("5a68fdc3615eda645bc6bdec");


