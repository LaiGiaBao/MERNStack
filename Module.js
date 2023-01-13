var FirstUser = {
  fName: "First",
  lName: "First Last",
  getUserDetail: function (params) {
    return { Name: this.fName + this.lName };
  },
};

var SecondUser = {
  fName: "Second",
  lName: "Second Last",
  getUserLastName: function (params) {
    return { Name: this.lName };
  },
};
console.log(FirstUser.getUserDetail());

module.exports = {
  SecondUser,
  FirstUser,
};
