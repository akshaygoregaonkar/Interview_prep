var num=12345678


var sumOfDigits=(num)=>{
    let strnum=String(num)
    let sum=0
    for(let i=0;i<strnum.length;i++){
        sum=sum+Number(i)
    }
    return sum

}
console.log(sumOfDigits(num))