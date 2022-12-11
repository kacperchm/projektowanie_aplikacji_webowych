let numArray = [1,2,3];
let stringArray = ['one','two','three'];
let booleanArray = [true, false, true, true, false];
let mixArray = [1, 'one', true];

console.log(numArray);
console.log(stringArray);
console.log(booleanArray);
console.log(mixArray);

console.log('--------------------------------');

let n = numArray[0];
console.log(n);

console.log('--------------------------------');

numArray[1]= 1000;
console.log(numArray)

console.log('--------------------------------');

console.log(numArray[3]);

console.log('--------------------------------');

console.log(numArray.includes(4));
console.log(numArray.includes(1));

console.log('--------------------------------');
numArray.push(4);
console.log(numArray);

console.log('--------------------------------');
console.log(typeof numArray);
console.log(numArray.length);