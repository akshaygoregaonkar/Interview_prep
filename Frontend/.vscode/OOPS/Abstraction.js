
//Abstraction

function Book(title,author){
    let BookTitle=title //private variable
    let BookAuthor=author //private variable
    this.getTitle=function(){
        return BookTitle
    }
    this.getBookDetail=function(){
        return `${BookTitle} is by ${BookAuthor}`
    }
}
var Origin=new Book('Origin',"Akshay")


//in aboove case the BookTitle and BookAuthor is private varible we can accesss ith by only by getTitle and getBookDeatils  methods of  Origin



// function constFunc(fname,sname){
//     this.firstName=fname
//     this.lastName=sname
// }

// constFunc.prototype.fullName=function(){
//     return this.firstName+" "+this.lastName
// }


// function PersonDetails(fname,sname){
//     constFunc.call(this,fname,sname)
// }
// PersonDetails.prototype=Object.create(constFunc.prototype)

// var akshay=new PersonDetails("aks","gore")