function constFuction(fname,sname){
    this.firstname=fname,
    this.lastname=sname
}
constFuction.prototype.fullname=function(){
    return this.firstname+" "+this.lastname
}

function personInfo(fname,sname){
    constFuction.call(this,fname,sname)

}
personInfo.prototype=Object.create(constFuction.prototype)

const pInfo=new personInfo("a","g")
console.log(pInfo.fullname())



// const akshay= new ("A","G")
// console.log(akshay.fullname())