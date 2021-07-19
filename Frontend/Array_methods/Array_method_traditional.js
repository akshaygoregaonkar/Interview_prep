var mylist=[ 1, 3, 4, 2, 8 ]
//custom method for sum of element of array

// Array.prototype.getSum=function(){
//     var sum=0
//     for(let i=0;i<this.length;i++){
//         sum=sum+this[i]
//     }
//     return sum
// }

// console.log(mylist.getSum())



//filter
// Array.prototype.customFilter=function(callback){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             result.push(this[i],i)
//         }
//     }
//     return result
// }

// console.log(mylist.customFilter(item=>item>2))

//map

// Array.prototype.customMap=function(callback){
//      var result=[]
//     for(let i=0;i<this.length;i++){
//         result[i]=callback(this[i],i)
//     }
//     return result
// }

// console.log(mylist.customMap(item=>item*2))

Array.prototype.CustomReduce=function(callback,result){
    for(let i=0;i<this.length;i++){
        result=callback(result,this[i])
    }
    return result
}

console.log(mylist.CustomReduce((a,b)=>a+b,0))