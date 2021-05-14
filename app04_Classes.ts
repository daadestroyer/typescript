class Customer{
    // Properties
    fname : string
    lname : string

    constructor(fname:string,lname:string){
        this.fname = fname
        this.lname = lname
    }
}
// creating object of Customer class
let cust = new Customer("shubham","nigam");

console.log("Customer First Name : "+cust.fname);
console.log("Customer Last Name : "+cust.lname);