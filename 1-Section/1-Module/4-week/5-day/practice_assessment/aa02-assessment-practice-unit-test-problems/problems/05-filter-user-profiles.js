/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]

input arr of objects and a callback
output an array of names

plan:

return a filter users array
every element pass element into cb, if output is true return true,
then .map the array grabbing each user's name
***********************************************************************/

// function filterUserProfiles(users, filter) {
//   // return users
//   // .filter(user =>{
//   //   if(filter(user)){
//   //     return true
//   //   }
//   // })
//   // .map(user => user.name)

// }

const filterUserProfiles = (users, filter) => users.filter(user => filter(user) ? true : false).map(user => user.name);

// const facebookUsers = [
//   { name: "John", age: "21", state: "Florida" },
//   { name: "Mary", age: "57", state: "California" },
//   { name: "Judy", age: "47", state: "Texas" },
//   { name: "Mike", age: "32", state: "New York" }
// ];

// console.log(filterUserProfiles(facebookUsers, (user) => user.age > 30)); // ["Mary", "Judy", "Mike"]
// console.log(filterUserProfiles(facebookUsers, (user) => user.state === "New York")); // ["Mike"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
