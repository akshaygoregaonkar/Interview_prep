// function A(num){
//     return function B(numB){
//         return num+numB
    
//     }
// }
// temp=A(5)
// console.log(temp)
// console.log(temp(10))

// console.log(A(5)(20))



function A(num){
    return function B(numB){
        return function C(numC){
            return num+numB+numC
        }
    
    }
}
// temp=A(5)
// temp(10)
// console.log(temp)
// console.log(temp(10))


console.log(A(5)(20)(2))