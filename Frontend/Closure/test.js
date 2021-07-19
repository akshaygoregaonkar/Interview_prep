// function tempFirst(){
//     var num=10
//     return function(){
//         return num+15

//     }
// }
// var tempF=tempFirst()

// console.log(tempF())


//first function is created in memory 
//function => 1.tempFirst 
//tempF=>// 1stundefined // 2nd whaterver value return from tempFirst(function) 



// function tempSecond(){
   
//     return function(){
//         var num=10
//         return num+15

//     }
// }

// var tempS=tempSecond()






// function A(){
//     var num=10
//     function B(){
//         console.log(num+3)
//     }
// B()
// }

// A()



function B(){
    var num=10
    function C(){
        console.log(num+3)
    }
return C
}

var tempd=B()
console.log(tempd)