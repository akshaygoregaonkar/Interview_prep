// let arr=[1,3,45,6,7]


// Array.prototype.getSum=function(){
    
//     sum=0
//     for(let i=0;i<this.length;i++){
//         sum=sum+this[i]
//     }
//     console.log(sum)
// }

// arr.getSum()






// const arr=[1,3,5,8,10]
// Array.prototype.myCustomFilterfunc=function(callback){
//     const newArr=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i])){
//             newArr.push(this[i])
//         }

//     }

//     return  newArr
// }

// console.log(arr.myCustomFilterfunc(element=> element==1))






// const arr=[1,3,5,8,10]
// Array.prototype.myCustomMapfunc=function(callback){
//     const newArr=[]
//     for(let i=0;i<this.length;i++){

//         newArr[i]=callback(this[i],i)
//     }
// return newArr
// } 

// console.log(arr.myCustomMapfunc(element=>++element))


// async function fetchdata(){

//     const data =await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(data.json())
// }
// fetchdata()



    
// there garbage picker truck
// Inital position of the truck - (3)
// [1, 1, 0, 0, 1] // 1 -  garbage bin present in the position [1, 2, 5]
// + 1 - 0
// + 1 - 2
// 2 (count)
// [ 0, 1, 1, 1, 1]
// 4
// 1
// +1 // 2 // 3
// +1 // 1 // 4
// 4
// 3
// 3
// P->3
// a -> [0,1,1,1,0]

// function(P, a) // count of the total bins picked



// function countBin(a,p){
//     let ind=p-1,count=0
//     if(a[ind]==1){
//         count+=1
//     }
//     for(let i=1;i<a.length;i++){
//         if(ind-1< 0 && ind + 1 <a.length && a[ind+i]==1){
//             count+=1
//         }else if(a[ind+1] >= a.length && ind-i >=0 && a[ind-1]==1){ 
//             count+=1
//         }
//         else if(a[ind+1]==a[ind-1] && a[ind+1]==1){
//             count+=1

//         }
//     }
//     return count 
// }

// console.log(countBin([0,1,1,1,0]))


// function add(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)

//         },3*10)
//     })
       
  
// }

//closure

// function testClosure(){
//     var num=10
//     return function(){
//         return 10+num
//     }

// }

// console.log(testClosure()())


// [3, 4, 5, 4, 3, 6, 6, 6, 9, 0] => function
// // { '3': 2, '4': 2, '5': 1, '6: 3, '9': 1, '0': 1 }

//  function test1(arr) {
//     let dict={}
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
           
//             if (arr[i]==arr[j]){
//                 count+=1}

//         }
//         dict[String(arr[i])]=count

//     }
//     console.log(dict)
// }

// test1([3, 4, 5, 4, 3, 6, 6, 6, 9, 0] )


// var a = [3, 4, 5, 4, 3, 6, 6, 6, 9, 0]
// var result = {}

// for(var i=0;i<a.length;i++){
    
//     if(result[a[i]]){
//         result[a[i]]++
//     }else{
//         result[a[i]] = 1
//     }
    

// }
// console.log(result)



// var obj={name:"akshay",age:23,add:"Goreagon"}

// function test(){
//     console.log(this)
// }
// test.call(obj)


// var arrowfunc=()=>{
//     console.log(this)
// }

// arrowfunc()

// var obj={name:"akshay",age:23,add:"Goreagon"}

// function test(){
//     // console.log(this)s
//     var arrowfunc=()=>{
//         console.log(this)
       
        
//     }
//     arrowfunc()

// }


// test.call(obj)


//currying

// function A(num){
//     return function B(numB){
//         return num+numB
//     }
// }

// console.log(A(5)(10))



// function funcA(num){
//     return function(){
//         return num+1
//     }
// }

// function anything(){
//     let arr=[]
//     for(var inc=3;inc<14;inc++){
//         arr.push(funcA(inc))
//     }
//     return arr
// }
// let data=anything()
// console.log(data)

// for(let i=0;i<data.length;i++){
//     console.log(data[i]())
// }
 

//hoisting 

// console.log(random "first")
// var name
// var random="akshay"

// console.log("second")
// name="Cool"
// console.log("third")
// function funcA(){
//     console.log("im inside function A")

// }
// var funcB=function(){

//     console.log("im inside function B")

// }


// debouncer

//  const debounce=()=>{
//      var timer
//      clearTimeout(timer)
//      setTimeout(()=>{console.log("hii") },3000)     


//  }

//  debounce()

//  const throttle=()=>{
//      var timer
//      if(timer){
//          clearInterval(timer)
        
//      }
//      setInterval(()=>{console.log("hii"),5000})

//  }
//  throttle()