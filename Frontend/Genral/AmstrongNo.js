//amstrongNo=153 
// sumOfDigits=>1*1*1 +5*5*5 +3*3*3=153
 

var num=153

const AmstrongNo=(num)=>{
    var strnum=String(num)
    var sumOfDigits=0
    for(let i=0;i<strnum.length;i++){
        sumOfDigits=sumOfDigits+ Number(strnum[i])**3
        
      
    }

  if(num==sumOfDigits){
      console.log("Amstrong")
  }else{
      console.log("Not Amstrong")
  }
}

AmstrongNo(num)



