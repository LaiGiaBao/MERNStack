//create class
var User = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.getUserDetails = function () {
    return {
      name: this.name,
      age: this.age,
      session: this.session,
    };
  };
};

//create object
var user = new User("Gia B. Lai", 21, "GA");
//create new properties
user.__proto__.hobbies;
user.hobbies = "Playing Games";
user.__proto__.getName;
user.setName = function (name) {
  this.name = name;
  return;
};

console.log(user);
user.setName("Khanh");
console.log(user);
