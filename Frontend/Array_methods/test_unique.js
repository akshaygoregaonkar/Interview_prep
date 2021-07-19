var arr=[1,3,4,6,3,2,2,6,2,4,1]
const myset1=new Set()
for(let i=0;i<arr.length;i++){
    myset1.add(arr[i])
}
console.log(myset1)


Array.prototype.allreadyPresent=function(item){
    for(let i=0;i<this.length;i++){
       if(this[i]==item){
           return true
       }
       else false
    }
}

Array.prototype.uniqueElement=function(){
 var result=[]
 for(let i=0;i<this.length;i++){
     if(!result.allreadyPresent(this[i])){
         result.push(this[i])
     }

 }
return result
}


var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
console.log(arr.uniqueElement())
console.log(duplicates.uniqueElement())