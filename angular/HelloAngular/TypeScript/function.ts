

// 이 function은 숫자(number) 타입만 리턴할 것임을 명시
function getAddResult():number {
    return 10 + 50;
}

// function의 parameter에도 Type 명시
function getAddResultTwoNumbers(one:number, two:number):number {
    return one + two;
}

let result:number = getAddResult();
console.log(result);

let resultTwo:number = getAddResultTwoNumbers(10, 50);
console.log(resultTwo);


