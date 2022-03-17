const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
      type: String,
      required : [1, "Please check your data entry , no name specified"]
  },
  rating: { type: Number,
    min: 1,
    max: 10
},
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const passionFruit = new Fruit ({
    name:"Passion Fruit",
    rating:7,
    review:"Awesome."
})
passionFruit.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {  
      console.log(fruit.name);
    });
  }
});



Person.updateOne({name:"John"}, {favouriteFruit:passionFruit}, function(err){
    if(err){
        console.log(err);
    } else { 
        console.log("Succes")
    }
})

// Fruit.deleteOne({name: "Pineapple"}, (err) =>{
//     if(err){
//         console.log(err);
//     } else { 
//         mongoose.connection.close();
//         console.log("Success")
//     }
// })
