// Task 1
let me = {
  name: 'Pavel',
  age: 21,
  jsKnowledgeLevel: 'Student',
  location: 'Latvia',
  // Task 2
  sayHello(name){
    return `${me.name} said - Hello, ${name}!`
  }
}
console.log(me.sayHello('Adrian'))

  // Task 3
let users = [
  {
    name: 'Jans',
    age: 23,
    isAdmin:true
  },
  {
    name: 'Olivers',
    age: 25,
    isAdmin:false
  },
  {
    name: 'Gustavs',
    age: 30,
    isAdmin:false
  },
  {
    name: 'Tomass',
    age: 19,
    isAdmin:false
  },
  {
    name: 'Ralfs',
    age: 34,
    isAdmin:true
  },
  {
    name: 'Emils',
    age: 21,
    isAdmin:false
  }
]
let basicUsers = 0;
for(let i = 0; i < users.length; i++){
  if(users[i].isAdmin == false){
    basicUsers++
  }
}
console.log(`There are ${basicUsers} basic users in array.`)