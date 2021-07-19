
var obj={
    first_name:"aks",
    last_name:"gore"
}

function anothorEx(){
    console.log(this,"1")
    function normal(){
        console.log(this,"2")
    }
    const arrowNormal=()=>{
        console.log(this,"3")
    }
    normal()
    arrowNormal()
}

anothorEx.call(obj)




// const arrowFunc=()=>{
//     console.log(this,"4")
// }
// arrowFunc()