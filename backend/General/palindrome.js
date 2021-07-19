// var s="nitin"
// var rev=s.split("").reverse().join("")
// console.log(rev)



// var obj={a:1,b:2,c:3}


// var test=Object.entries(obj)
// console.log(test)

function facto(n){
    if(n==1){
        return 1
    }
    else{
    return n* facto(n-1)
    }
}

console.log(facto(10))
