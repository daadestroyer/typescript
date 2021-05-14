for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log();
var reviews = [5, 4, 3.2, "shubham", true, "nigam"]; // any type array
var rating = [5, 4, 3.2, 3, 2, 1]; // any type array
reviews.forEach(function (e) {
    if (e == "shubham") {
        console.log(e + " found");
    }
    else if (e == "nigam") {
        console.log(e + " found");
    }
    else {
        console.log(e);
    }
});
// Growable arrays:
reviews.push("RVCE");
reviews.push(560059);
console.log(reviews);
