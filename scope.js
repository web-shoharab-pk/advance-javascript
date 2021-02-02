let bonus = 20; //global variables

function sum(first, second) {
    const result = first + second + bonus;

    if(result > 9){
        const mood = "happy";
        var moo = "sad";
        let mo = "nothing";
        console.log(mood);
    }
    console.log(moo);
    return result;
} 
const output = sum(18, 46);
//console.log(bonus);
console.log(output);