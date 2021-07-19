
var my_list=[1,2,4,5,6,7,8 ,1,2]
// Array.prototype.customMap=function(callback){
//     var result=[]

//     for(let i=0;i<this.length;i++){
//         result.push(callback(this[i]))
//     }
//    return result 

// }

// console.log(my_list.customMap(item=>item*2))


// Array.prototype.present=function(item){
//     for(let i=0;i<this.length;i++){
//         if(item==this[i]){
//             return true
//         }
//     }
// }



// Array.prototype.Unique=function(){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(!result.present(this[i])){
//             result.push(this[i])

//         }
//     }
//      return result
// }
// console.log(my_list.Unique())


//custom filter

// Array.prototype.customFilter=function(callback){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }

//     }
//     return result
// }


// console.log(my_list.customFilter(item=>item>2))


// Array.prototype.customReduce=function(callback){
//     var result=0
//     for(let i=0;i<this.length;i++){
//        result=callback(result,this[i])
//     }
//     return result

// }


// console.log(my_list.customReduce((a,b)=>a+b))




function binarysearch(arr,num){
    var first=0,last=arr.length-1
    while(first<=last){
        var mid=Number((last+first)/2)
        if (arr[mid]==num){
            return "found"
        }
        else{
            if(arr[mid]<num){
                first=mid+1
            }
            else{
                last=mid-1
            }
        }

    }
    return "not found"
}

console.log(binarysearch(my_list.sort(),1))