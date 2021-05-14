var Customer = /** @class */ (function () {
    function Customer() {
        console.log("Constructor calld...");
    }
    Customer.prototype.setCustomer = function (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    };
    Customer.prototype.getCustomer = function () {
        return this.fname + ":" + this.lname;
    };
    return Customer;
}());
// creating object of Customer class
var cust = new Customer();
cust.setCustomer("shubham", "nigam");
console.log(cust.getCustomer());
