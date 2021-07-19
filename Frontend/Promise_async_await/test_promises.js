// const add=(num1,num2)=>{
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             reslove(num1+num2)},3000)
//     })
// }

// add(10,4).then(result=>console.log(result))


// const one=()=>{
//     console.log("Im one")
// }
// const two=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("im two")

//         },3000)
//     })
    
// }

// const three=()=>{
//     console.log("Im three")
// }


// const call= async()=>{
//     one()
//     const twocall=await two()
//     console.log(twocall)
//     three()

// }
// call()



const testReject=()=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{reject("Im rejected")},3000)

    })

}
testReject().then(res=>console.log(res)).catch(err=>console.log(err))