

let number: number = 50; // Type 명시 
let string: string = 'asdf'; // Type 명시
let bool: boolean = true;

let nameStr: string|number = ''; // 한 변수에 여러 가지 Type 명시 가능
nameStr = 30;

console.log(number);
console.log(string);
console.log(bool);

let age: any = '';
age = 10;
age = true;
age = function(){};