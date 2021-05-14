class Customer{
    // Properties
    fname : string
    lname : string

    constructor(){
        console.log("Constructor calld...")
    }
    setCustomer(fname:string,lname:string){
        this.fname = fname
        this.lname = lname
    }
    getCustomer(){
        return this.fname+":"+this.lname;
    }
}
// creating object of Customer class
let cust = new Customer();
cust.setCustomer("shubham","nigam");
console.log(cust.getCustomer())