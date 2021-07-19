// function fibo(){
//     var n1=0 ,n2=1, next;
   
//  for(let i=0;i<10;i++){
    
//     console.log(n1)
//      next=n1+n2
//      n1=n2
//      n2=next
     
//  }

// }
// fibo()

// function fibo(n){
//     if(n==1){
//         return 0
//     }
//     if(n==2){
//         return 1
//     }
//     else  if(n>2){
//         return fibo(n-1)+fibo(n-2)
//     }

// }

// for(let i=0;i<10;i++){
//     console.log(fibo(i))
// }


// function test(n){
//     var n1=0,n2=1,next;
//     for(let i=0;i<n;i++){
//         console.log(n1)
//         next=n1+n2
//         n1=n2
//         n2=next
//     }
// }

// test(10)

const test=(n)=>{
    if(n==1){
        return 0

    }
    else if(n==2){
        return 1
    }
    else if(n>2){
        return test(n-1)+test(n-2)
    }
}

for(let i=0;i<10;i++){
    console.log(test(i))

}

