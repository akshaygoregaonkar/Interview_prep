import React from 'react'
export default class ChildA extends React.Component{
    constructor(props){
        super(props)
        this.state={num:this.props.num,timer:0}
        this.listRef=React.createRef()
        
    }
// mounting phase construvtor geteDerivedStateFromProps,render componentsDidMount,render
    
    static getDerivedStateFromProps(props,state){
        if (props.num!=state.num){
            return{
                num:props.num
            }
        }

   } 

//    componentDidMount(){
//    this.InternalValref= setInterval(()=>{
//         this.setState({timer:this.state.timer+1})

//     },1000)

// }


//unmounting phase

// componentWillUnmount(){
//     clearInterval(this.InternalValref)
// }


//updation phase => getDerivedStateFromProps shouldComponentsUpdate render getSnapshotbeforeUpdate,componetsDidUpdate

shouldComponentUpdate(nextprops,nextstate){
    if(this.props.num!=nextprops.num){
        return false
    }
    else{
        return true
    }

}

getSnapshotBeforeUpdate(prevprops,prevstate){
    if(this.props.commentList?.length >prevprops.commentList?.length && this.listRef.current){
        
        const heightOfdiv=this.listRef.current.scrollHeight -this.listRef.current.scrollTop
        return heightOfdiv
    }
    return null;
} 
componentDidUpdate(prevprops,prevstate,snapshot){
    if(snapshot!=null){
        const list=this.listRef.current
        list.scrollTop=list.scrollHeight-snapshot
    }

}
    render(){
        console.log( this.props.commentList)
     
        return(<div>
           <h1>childA</h1>
           {this.state.num}
           <h1>{this.state.timer}</h1>
           <div style={{height:"150px",overflow:"scroll" ,width:"50%"}}  ref={this.listRef}>
               {this.props?.commentList?.map((item,index)=><ul key={index}>
                  <li> {item}</li>
                   
               </ul>)}
           </div>

        </div>)
    }
}