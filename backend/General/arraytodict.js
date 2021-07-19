
// var arr=[1,2,4,5,7,1,3,2,1]
// // console.log(arr.lastIndexOf(2))
// // console.log(arr.lastIndexOf(1))


// function test(my){
//     var obj={}
//    for(let i=0;i<my.length;i++){
//        var count=1
//        if(obj[arr[i]]){
//            obj[arr[i]]=count++
//        }else{
//         obj[arr[i]]=1
//        }
//    }
//    return obj
// }

// var result=test(arr)
// console.log(result)
// console.log(Object.keys(result))








var mystring="   I love My India"

var result=mystring.split(" ")
var count=0
for(let i=0;i<result.length;i++){
    if(result[i]){
        count+=1
    }
}

console.log(count)