var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Customer;
}());
// creating object of Customer class
var cust = new Customer("shubham", "nigam");
console.log("Customer First Name : " + cust.fname);
console.log("Customer Last Name : " + cust.lname);
