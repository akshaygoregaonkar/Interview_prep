var arr=[2,10,11,15,1,2,4,5]

//forEach
// arr.forEach((item,index)=>console.log(item,index))
// function testcall(item,index){
//     console.log(item)

// }
// arr.forEach(testcall)
// console.log(arr)
// arr.push(10)
// arr.pop()
// console.log(arr)

//filter
// var result=arr.filter(item=>item<3)
// function testcaall(item,index){
//     if(item>2){
//         return true
//     }
//     return false

// }
// var result=arr.filter(testcaall)
// console.log(result)




// Array.prototype.Customfilter=function(callback){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }

//     }
//     return result
// }

// var resultArr=arr.Customfilter(item=>item>2)
// console.log(resultArr)

function flatten(arr){
    return arr.reduce(a,b=>a.concat(Array.isArray(b)?flatten(b):b),[])

}
console.log(flatten([2[[[1,2,4,]]]]))