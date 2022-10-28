const person = {
  name : "souheil",
  address: {
    country : "Tunisia",
    city: "les berges du lac"
  }
};  

const numbers = [1,2,3];
const num_updated = numbers.map(x => ( x==2 ? 4: x));

const updated = {...person, name: "youssef"};
updated.address.city = "ariana";

console.log(person);
console.log(num_updated);
  
//module.exports = helloWorld;