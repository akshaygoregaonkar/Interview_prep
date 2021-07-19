
function anagram(s1,s2){
    if(s1.length!=s2.length){
      return false
    }
 var str1=s1.toLowerCase().split("").sort().join("")
 var str2=s2.toLowerCase().split("").sort().join("")
 if(str1==str2){
     return true
 }else{
     return false
 }

    
}

console.log(anagram("merry","yerrm"))
console.log(anagram("Indian","dianin"))