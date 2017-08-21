

// Javascript에서 Class를 만들 수 있다 (에크마 스크립트 6부터)
class Car {
    // 속성(변수) 정의시 let, var등 생략
    private tiresCount:number;
    private handleType:string;

    /*
     *   생성자 
     */
    constructor() {

    }

    // function을 제외하고 메소드 생성 가능
    getTiresCount():number {
        return this.tiresCount;
    }

    setTiresCount(tiresCount:number):void {
        this.tiresCount = tiresCount;
    }

    getHandleType():string {
        return this.handleType;
    }

    setHandleType(handleType:string):void {
        this.handleType = handleType;
    }
}

// 객체는 const
const car:Car = new Car();
car.setHandleType('Good Handle');
car.setTiresCount(4);

console.log(car.getHandleType());
console.log(car.getTiresCount());