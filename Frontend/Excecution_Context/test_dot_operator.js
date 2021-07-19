// console.log(this)
// var data="shh"
function test(){
    console.log(this) 
}
test()
//value of this change by  1. dot operator ,bind call, new keyword 



// 1dot operator

var obj={
    first_name:"Akshay",
    last_name:"Goregaonkar",
    full_name:function(){
        console.log(this)
        return this.first_name +" "+this.last_name
    }
}

console.log(obj.full_name()) // value of this become object  bcz we are doing dot on obj

var temp=obj.full_name
temp() //value of this in this case is window bcz we are doing .opertaor on obj and storing complete thing into temp and callng( we are not appkying dot operator on function call)
