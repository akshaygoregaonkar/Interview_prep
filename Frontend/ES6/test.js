// function normal(){
//     var name='akshay'
// }


// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//output 10 times 10

// for(let i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
//output 0 to 9



//diff between let and var

// function another(){
//     var name="akshay"
//     function normal(){
//         if(true){
//             let name="jack"
//             console.log(name) //jack
//         }
//         console.log(name) //akshay
//     }
//     normal()
// }
// another()



// const
// const data={name:"akshay",add:"goregaon"}
// data.age=24
// console.log(data)

 //mutation is allowed
// console.log(data) 

// const data={name:"akshay",add:"goregaon" ,age:24} //reassignmnet is not allowed
// console.log(data)


// const arr=[1,2,3,4,5]
// console.log(arr)
// arr[2]=10
// console.log(arr)
// arr[10]=34
// console.log(arr)



//arrow
//diff between arrow and normal
//1. no name ,no binding in arrow fuction


// const test=()=>{

// }


// var obj={
//     firstname:"Akshay",
//     lastname:"Goregaonkar",
//     fullname:()=>{
//         return this.firstname +" "+this.lastname

//     }
// }

// console.log(obj.fullname())

//output is undefiend undefiend bcz there is no binding (dot operator , call apply and, bind dont work) in arrow fuction
// meaning there is no deafult value as window  in case of arrow function 
//in case of arrow value of 



//spread opertor =>use to make copy 

// var arrr=[1,3,4,5,6]
// var newarr=[...arrr.slice(0,2),10,...arrr.slice(2)]

//destructuring

// var testobj={
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
// const {id,name,username,...items}=testobj
// console.log(items)


// const arr=[1,3,4,5,6,8,90,101,3]
// const[,,,...ele]=arr
// console.log(ele)



//find

var arr=[1,3,5,7,8]
// var val=arr.find(item=>item==3)
// console.log(val)




//findIndex

const index=arr.findIndex(item=>item==1)
console.log(index)

