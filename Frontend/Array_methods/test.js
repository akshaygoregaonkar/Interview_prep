// var my_list=[1,3,5,7,8,9,0,3]
// my_list.push(10)
// console.log(my_list,"push")
// my_list.pop()
// console.log(my_list,"pop")

// my_list.forEach((item,index)=>console.log(item))
// console.log("using normal fuction")
// function iterateVal(item,index,my_list){
//     console.log(item)

// }
// my_list.forEach(iterateVal)

// var filterlist=my_list.filter((item,index)=>item>2)
// console.log("using arrow",filterlist)
// function filterVal(item,index,my_list){
//     if(item>3){
//         return true
//     }
// }
// console.log("using normal func",my_list.filter(filterVal))


// var resultMap=my_list.map((item,index)=>item*2)
// console.log("using arrow",resultMap)

// function Mapdemo(item,index,my_list){
//     return item**2
// }
// console.log(my_list.map(Mapdemo))


// var findResult=my_list.find(item=>item==9)
// console.log("Using arrow find",findResult)

// function findDemo(item,index,my_list){
//     if(item==9){
//         return true
//     }
// }
// console.log("using find demo using normal func",my_list.find(findDemo))

// resultReduce=my_list.reduce((a,b)=>a+b)
// console.log("reduce demo using arrow",resultReduce)
// function DemoReduce(a,b,my_list){
//     return a+b
// }
// console.log("reduce demo using normal func",my_list.reduce(DemoReduce))







//unique elements fro array

// Array.prototype.allreadyPresent=function(item){
//     for(let i=0;i<this.length;i++){
//         if(this[i]==item){
//             return true
//         }
//         return false
//     }
// }


// Array.prototype.unique=function(){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(!result.allreadyPresent(this[i])){
//             result.push(this[i])
//         }
//     }
//     return result

// }

// var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
// console.log(duplicates.unique())


//     const flatten = (list) =>
//   list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
// console.log(
//   flatten([
//     [1, 3],
//     [5, 6, 7],
//     [3, 6],
//   ])
// );


 

const fatten=(list)=> list.reduce((a,b)=>a.concat(Array.isArray(b)? fatten(b):b),[])
console.log(
    fatten([
        [1,2,4],
        [[1,2]],
        [[[[1,4,5]]]]
    ]))