var students = [
    { id: 23, name: "salman khan" },
    { id: 33, name: "sharukh khan" },
    { id: 43, name: "amir khan" },
    { id: 53, name: "ranbir kappor" }
]
const id = students.map(s => s.id)
console.log(id);
const name = students.map(s => s.name)
console.log(name);

const biggerId = students.filter(x => x.id > 40)
console.log(biggerId);

const bigger = students.find(x => x.id > 40)
console.log(bigger);
