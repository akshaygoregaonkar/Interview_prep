const largest=(arr)=>{
    let largest=arr[1]
for(let i=0;i<arr.length;i++){
    if(largest<=arr[i]){
        largest=arr[i]
    }
}
return largest
}


my_arr=[1,6,8,104,4,6,8,74]
console.log(largest(my_arr))