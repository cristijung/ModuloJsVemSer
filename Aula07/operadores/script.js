//operador spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

const originalArr = [1, 2, 3];
const cloneArr = [...originalArr];
console.log(cloneArr);

//operador rest
const obj1 = { a: 1, b: 2, c: 3};
const obj2 = { ...obj1, d: 4};
console.log(obj2);

function printItens(primeiro, segundo, ...resto) {
    console.log(primeiro);
    console.log(segundo);
    console.log(resto);
}

printItens(1,2,3,4,5,6);
