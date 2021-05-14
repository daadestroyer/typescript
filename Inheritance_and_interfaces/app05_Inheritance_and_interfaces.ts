export class Parent{
    public car(){
        console.log("4 wheel car only no airbag")
    }
    public bike(){
        console.log("one bikes")
    }
}

export class Child extends Parent{
    public car(){
        console.log("4 wheel + 4 airbag car")
    }
}

let child = new Child();
child.car();
child.bike();