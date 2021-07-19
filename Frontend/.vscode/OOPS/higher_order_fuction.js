var redius=[1,3,5,7,8,10]


const area=(redius)=>{
return Math.PI * redius * redius
}
 const diameter=(redius)=>{
     return 2*redius
 }

 const circumferance=(redius)=>{
     return 2*Math.PI*redius

 }
const calculate=(redius,logic)=>{
    var output=[]
    for(let i=0;i< redius.length;i++){
        output.push(logic(redius[i]))
    }
    return output
}


console.log(calculate(redius,area))
console.log(calculate(redius,diameter))
console.log(calculate(redius,circumferance))