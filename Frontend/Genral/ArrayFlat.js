var mylist=[1,2,[[[1,3]]],[1,2]]



function flatDeep(arr){
    return arr.reduce((a,b)=>a.concat(Array.isArray(b)?flatDeep(b):b),[]   
    )
}
console.log(flatDeep(mylist))