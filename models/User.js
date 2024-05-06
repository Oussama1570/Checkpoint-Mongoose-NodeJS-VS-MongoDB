// 1 - require mongoose 
const mongoose = require("mongoose");

// 1 - Create a person with this prototype:


let Schema = mongoose.Schema;

let personSchema = new Schema({
    name: String,
    age: Number,
    favoriteFoods: [String]
});


var Person = mongoose.model('person', personSchema);
  





// 2 - Create and Save a Record of a Model :

let createAndSavePerson = function (done) {
    var personInstance = new Person({name: 'Frank', age: 25, favoriteFoods: ['Sushi', 'Gluten free pasta']});
    personInstance.save((err, data) => err ? done(err) : done(null, data));
};




// 3 - Create Many Records with model.create() : 

let arrayOfPeople = [
    {name: "Test", age: 24, favoriteFoods: ['Pizza', 'Cheese']},
    {name: "TestPerson", age: 22, favoriteFoods: ['Coke', 'Garlic Bread']}
];

let createManyPeople = function (arrayOfPeople, done) {

    Person.create(arrayOfPeople, (err, data) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });
};


// 4 - Use model.find() to Search Your Database : 

let findPeopleByName = function (personName, done) {
    Person.find({name: personName}, (err, data) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });
};

// 5 - Use model.findOne() to Return a Single Matching Document from Your Database : 

let findOneByFood = function (food, done) {

    Person.findOne({favoriteFoods: food}, (err, data) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });

}; 


// 6 -  Use model.findById() to Search Your Database By _id : 


let findPersonById = function (personId, done) {

    Person.findById({_id: personId}, (err, data) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });

};

 
// 7 - Perform Classic Updates by Running Find, Edit, then Save : 

let findEditThenSave = function (personId, done) {
    let foodToAdd = 'hamburger';

    Person.findById(personId, function (err, data) {
        if (err) {
            done(err);
        }

        data.favoriteFoods.push(foodToAdd);
        data.save((err, data) => (err ? done(err) : done(null, data)));
    });
};


// 8 - Perform New Updates on a Document Using model.findOneAndUpdate() : 


let findAndUpdate = function (personName, done) {

    Person.findOneAndUpdate({name: personName}, {$set: {age: 20}}, {new: true}, function (err, data) {
        if (err) {
            done(err);
        }
        done(null, data);
    });
};


// 9 - Delete One Document Using model.findByIdAndRemove : 

let removeById = function (personId, done) {

    Person.findOneAndRemove(personId, function (err, data) {
        if (err) {
            done(err);
        }
        done(null, data);
    });

};

// 10 - MongoDB and Mongoose - Delete Many Documents with model.remove() : 


const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({ name: nameToRemove }, (err, data) =>
      err ? done(err, data) : done(null, data)
    );
  };



// 11 - Chain Search Query Helpers to Narrow Search Results : 

let queryChain = function (done) {
    var foodToSearch = "burrito";

    Person.find({favoriteFoods: foodToSearch}).sort({name: "asc"}).limit(2).select("-age").exec(function (err, data) {
        if (err) {
            done(err);
        }
        done(null, data);
    });
};

module.exports = User = mongoose.model("user", userschema);