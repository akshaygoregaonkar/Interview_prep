// function constFunction(fname,sname){
//     this.firstName=fname
//     this.lastName=sname
// }
// constFunction.prototype.fullName=function(){
//     return this.firstName+" "+this.lastName
// }


// var akshay=new constFunction("akshay","gore")
// var sahil=new constFunction("sahil","sss")


function constructFunc(fname,sname){
    this.firstName=fname
    this.lastName=sname
}
constructFunc.prototype.fullName=function(){
    return this.firstName+" "+this.lastName
}

function PersonDetails(fname,sname){
    //value of this changing  window to new instance created
    constructFunc.call(this,fname,sname)
}
PersonDetails.prototype=Object.create(constructFunc.prototype)
var akshay=new PersonDetails("akshay","gore")

//first call goes to personDetails and new empty object is created and value this becomes new intance i.e. empty object
//in personDetails by using call we are changing  empty object value to  keys having firstName and lastName
//to link prototye constructFunc we are creating object of it and attaching to PersonDetails


//same using class
class Person{
    constructor(fname,sname,age){
        this.firstName=fname
        this.lastName=sname
        this.age=age
    }

    fullName(){
        return this.firstName+" "+this.lastName
    }
    get ageDetails(){
        return this.age

    }
    set ageDetails(age){
        this.age=age
    }
}


var akshayobj=new Person("Akshay","Goregaonkar",24)