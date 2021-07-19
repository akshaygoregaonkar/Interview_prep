// function factFuction(fname,sname){
//     return{
//         first_name:fname,
//         last_name:sname
//     }
// }

// var akshay=factFuction("Akshay","gore")
// var sahil=factFuction("sahil","shukhwani")
// console.log(akshay)


function constFuction(fname,sname){
    this.first_name=fname //adding key firstname to empty object
    this.last_name=sname
}

var a= new constFuction('A','G')
var b=new constFuction('B','G')
console.log(a,b)

// when we use new keyword the new empty object is create and the value of this become empty object and this object has implicitly return
// and top that if we add dot opertaor it will key inside the empty object
//this.firstname=fname


