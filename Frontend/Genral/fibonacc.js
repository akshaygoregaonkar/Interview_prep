// 0,1,1,2,3,5,8....


const fibo=(n)=>{
    if(n==1){
        return 1
    }
    else if(n==2){
        return 1
    }
    else if(n>2){
        return fibo(n-1)+fibo(n-2)
    }
}

for(let i=0;i<10;i++){
   console.log( fibo(i))
}




// function fibotest(n){
//     var n1=0 ,n2=1,next
//     for(let i=1;i<n;i++){
//         console.log(n1)
//         next=n1+n2
//         n1=n2
//         n2=next
//     }
// }

// fibotest(10)








