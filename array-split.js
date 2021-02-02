const nums = [11, 13, 14, 16, 21, 72, 14, 15, 18, 16, 74];

//const part = nums.slice(2, 5); // 2 theke suru kore 5 porjonto rakhbe and original var thik thakbe
//console.log(part);

const remove = nums.splice(2, 5); // 2 theke suru korbe 5 ta element remove korbe and original var o change kore felbe
// const remove = nums.splice(2, 5, 44, 55, 66, 77); // 2 ar por 5 tala element remove korar por 5 ar pore inject kora element add kore diye array moddg=he
console.log(remove);
console.log(nums);

const together = nums.join("+");
console.log(together);