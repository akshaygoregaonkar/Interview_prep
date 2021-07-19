
var obj={
    first_name:"aks",
    last_name:"gore"
}
function anothorEx(){
    console.log(this,"1")
    function normal(){
        console.log(this,"2")
    }
    normal()
}
anothorEx.call(obj)