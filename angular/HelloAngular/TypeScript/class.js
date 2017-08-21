// Javascript에서 Class를 만들 수 있다 (에크마 스크립트 6부터)
var Car = (function () {
    /*
     *   생성자
     */
    function Car() {
    }
    // function을 제외하고 메소드 생성 가능
    Car.prototype.getTiresCount = function () {
        return this.tiresCount;
    };
    Car.prototype.setTiresCount = function (tiresCount) {
        this.tiresCount = tiresCount;
    };
    Car.prototype.getHandleType = function () {
        return this.handleType;
    };
    Car.prototype.setHandleType = function (handleType) {
        this.handleType = handleType;
    };
    return Car;
}());
// 객체는 const
var car = new Car();
car.setHandleType('Good Handle');
car.setTiresCount(4);
console.log(car.getHandleType());
console.log(car.getTiresCount());
