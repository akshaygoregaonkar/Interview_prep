
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