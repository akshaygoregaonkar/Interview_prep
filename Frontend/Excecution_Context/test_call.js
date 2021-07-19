var obj={
    first_name:"Akshay",
    last_name:"Goregaonkar"
}
 
function test(){
    console.log(this)
}
test() // value of this is window
test.call(obj) // value of this is obj
console.log("apply")
test.apply(obj)

 function test_para(a,b){
    console.log(this,a,b)
 }

 test_para('abc','edf')
 test_para.call(obj,'abc','def')
 // call and apply are almost simlar but thier is slight diff when argument is pass
 test_para.apply(obj,['apply','apply'])

 test=test.call(obj) //obj
//  /test()// thorw and error bcz test.call(obj) not returning anythig