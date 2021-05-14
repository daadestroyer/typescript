for(let i=0 ; i<5 ; i++){
    console.log(i)
}
console.log()

let reviews = [5,4,3.2,"shubham",true,"nigam"]; // any type array
let rating : number[] = [5,4,3.2,3,2,1]; // any type array

reviews.forEach((e)=>{
    if (e == "shubham"){
        console.log(e+" found")
    }
    else if(e == "nigam"){
        console.log(e+" found")
    }
    else{
    console.log(e);
    }
})


// Growable arrays:
reviews.push("RVCE")
reviews.push(560059)
console.log(reviews)