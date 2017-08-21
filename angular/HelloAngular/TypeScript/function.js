// 이 function은 숫자(number) 타입만 리턴할 것임을 명시
function getAddResult() {
    return 10 + 50;
}
function getAddResultTwoNumbers(one, two) {
    return one + two;
}
var result = getAddResult();
console.log(result);
var resultTwo = getAddResultTwoNumbers(10, 50);
console.log(resultTwo);
