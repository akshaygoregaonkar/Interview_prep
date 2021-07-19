console.log(random,peter,'1') //undefind undefined 1
var random='jack'
var peter
console.log(random,peter,'2') //jack ,undefind 2
peter='Peter'
console.log(random,peter,normalA,normalB,'3') //jack peter function,undefined
function  normalA(){

}
var normalB=()=>{

}
console.log(random,peter,normalA,normalB,'4') //jack peter fun func


//MAP
// random=undefined
// perter=undefined
// functionA=>function 
// normalB=>undefined





// console.log(random, peter, '1') //und und 1
// var random = "Jack"
// var peter
// console.log(random, peter, '2') //jack und 2
// peter = "Peter"
// console.log(random, peter, normalA, normalB, '3') //jack  peter ,func normal A,function normalB, 3

// function normalA(){
//     console.log(random2,normalC,normalB,"5") //undefined, func normalc, fucc normalB func,5

//     var random2='Another Value' 
//     function normalC(){

//     }
//     var normalD=function(){

//     }
//     console.log(random2,normalC,normalB,normalD,"6") //another value,func normalC,fuct normal B,normalD
// }
//     var normalB=function(){

//     }

// console.log(random,peter,normalA,normalB,"4") //jack ,peter,fnormalA, fnormalB 4
// normalA()
//MAP
// random=undefined
// peter=undefined
// functionA=>functionA
// normalB=>undefined

//in normalA() MAP
// random2=undefined
// normalC=func normalC
// normalD=undefined


// let x=20,y=10
// let result=add(x,y)
// console.log(result)
// function add(a,b){
//     return a+b
// }

//MAP
// x,y un
// result //un
// fun//x=20,y=20


// console.log(fundec) //un
// var fundec=new add() //un //objec
// function add(){ 
//     this.name="bobby"    //fun
//     this.age="20"
// }
// console.log(fundec) //obje
// var ref=arrow()//un 
// console.log(ref) //fun
// var arrow =()=>{     //un //fu
//     console.log("excutes")
// }

//MAP
//

test()
const test=()=>{
    console.log("im called")
}