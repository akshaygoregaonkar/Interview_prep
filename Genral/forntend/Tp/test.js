var arr=[1,2,3,4,6, 2,10,3,6,7]


// Array.prototype.getSum=function(){
//      var sum=0
//     for(let i=0;i<this.length;i++){
//       sum=sum+this[i]
//     }

//     return sum
// }

// console.log(arr.getSum())


// Array.prototype.ispresent=function(num){
//     for(let i=0;i<this.length;i++){
//         if(this[i]==num){
//             return true
//         }
//     }
//     return false
// }
// Array.prototype.testUnique=function(){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(!result.ispresent(this[i])){
//             result.push(this[i])
//         }

//     }
//     return result
// }

// console.log(arr.testUnique())
// console.log()



// Array.prototype.CustomMAp=function(callback){
//     var result=[]
//     for(let i=0;i<this.length;i++){
      
//         result[i]=(callback(this[i],i))
    
//     }
//     return result
// }


// console.log(arr.CustomMAp((item,index)=>item*2))
// var arara=[1,3,44,5,78,8]

// Array.prototype.Customreduce=function(callback){
//     var result=0
//     for(let i=0;i<this.length;i++){
//         result=callback(result,this[i])
        
//     }
//     return result
// }
// console.log(arara.Customreduce((a,b)=>a+b))









// Array.prototype.CustomMethod=function(callback){
//     var result=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i)){
//             result.push(this[i])
//         }
//     }
// return result
// }

// console.log(arr.CustomMethod((item,index)=>item>=2))




// var strrr="Akshay"
// var rev=strrr.split("").reverse().join("")
// console.log(rev)

// function testArrayToDict(mylist){
//     var result={}
//     for(let i=0;i<mylist.length;i++){
//         let count=0
//         if(result[mylist[i]]){
//             count+=1
//             result[mylist[i]]=count
//         }
//         else{
//             result[mylist[i]]=1
//         }
//     }
//     return result
// }

// console.log(testArrayToDict(arr))


// var dulicate=[1,3,4,6,4,7,2,7]

// function indexOfSecounDuplicate(mylist){
//     var result={}
    
//     for(let i=0;i<mylist.length;i++){
//         var count=0
//         if(result[mylist[i]]){
//         if(count<=2){
//         result[mylist[i]]=i
//         }
//     }else{
//         result[mylist[i]]=i
//     }
//     }
//      return result

// }
// console.log(indexOfSecounDuplicate(dulicate))

// //curring
// function testcurrying(){
//     var a=10
//     console.log(a)
//   return function B(){
//         console.log("ets")
//         return  function C(){
//             console.log("im in c")
//         }

//     }

// }
// testcurrying()()()


//promises
// function add(num1,num2){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{reslove(num1+num2)},3000)

//     })
// }
   


// add(10,3).then(res=>console.log(res)).catch(err=>console.log(err))







// function sub(num1,num2){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{reject(num1-num2)},3000)

//     })
// }

// sub(10,5).then(res=>console.log(res)).catch(err=>console.log(err))
// var test=Promise((reslove,reject)=>{setTimeout()})



// function test_debounce(){
//     var timer;
//     clearTimeout(timer)
//     timer=setTimeout(()=>{console.log("im called")},3000)

// }

// test_debounce()



// function test_Throttle(){
//     var timer;
//     if(timer){
//         clearInterval(timer)
//     }
//     timer=setInterval(()=>{console.log('hi'),1000})
// }
// test_Throttle()


//closure
// function testA(){
//     var b=10
//     function test(){
//       console.log(b+10)
//     }
//     test()
// }
// testA()


// function testClo(){
//     var a=10
//     return function(){
//         return a+10
//     }
// }

// var result=testClo()
// console.log(result())









