// for(var i=0 ;i<10;i++){
//     setTimeout(()=>{

//         console.log(i)
//     },3000)
// }


// function test(){
//     console.log(this,"1")
//  function normal(){
//     console.log(this,"2")

//  }
//  const another=()=>{
//      console.log(this,"3")

//  }
 
//  normal()
//  another()
// }
// test()



// var obj={
//     firstname:"Akshay",
//     lastname:"Goregaonkar",
//     // fullname:()=>{
//     //     return this.firstname+" "+this.lastname
        
//     // }
//     fullname: function (){
//         return this.firstname+" "+this.lastname
        
//     }
// }

// console.log(obj.fullname())

const objj={
    a:1,
    b:2
}
objj.a=2
console.log(objj)