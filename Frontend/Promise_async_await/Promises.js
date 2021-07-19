//call back hell!!


// function getUsername(callback){
//     callback({name:"Akshay"},getEmail)   // call to getGender data={name:Akshay}

// }
// function getEmail(data,callback){
//     callback({...data,email:"akshay@gmail.com"},getAge)
// }
// function getAge(data,callback){
//     callback({...data,age:24})
// }
// function getAddress(data,callback){
//     callback({...data,address:"goregon"},printInfo) // call goes to prininfo data={name,gender,address}
    
// }
// function getGender(data,callback){
//     callback({...data,gender:"male"},getAddress) //call goes to getEmail data={name,gender}
    
// }
//  function printInfo(data){
//      console.log(data)
//  }
//  getUsername(getGender)



// function add(num1,num2){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>resolve(num1+num2))
// },3000)
// }
// add(10,23).then(res=>console.log(res)).catch(err=>console.Console.log(err))

var promise=new Promise((resolve,reject)=>resolve(20)).then(res=>console.log("success",res)).catch(err=>console.log("error",err))