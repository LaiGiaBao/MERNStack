var { SecondUser, FirstUser } = require("./Module");

console.log(SecondUser.getUserLastName());
SecondUser.lName = "Bao";
console.log(SecondUser.getUserLastName());
FirstUser.lName = "Lai";
console.log(FirstUser.getUserDetail());
