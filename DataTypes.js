var globalVar = "Global";
var SomeValue = function () {
  console.log(globalVar);
  var globalVar = "No more";
  console.log(globalVar);
};
SomeValue();
