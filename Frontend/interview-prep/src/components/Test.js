import React from 'react'
import ChildA from './ChildA'
import ErrorBoundary from './ErrorBoundary'

 export default class Test extends React.Component{
     constructor(Props){
         super(Props)
         this.state={num:0,timer:0,toggle:true,commentList:["hi",'hello'],temp:''}
     }

    //  componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/comments').then(res=>res.json())
    //     .then(data=>this.setState({commentList:data}))
 
    // }
 
     handleClick(){
         this.setState({num:this.state.num-1})
     }
     handleClickSubmit=()=>{
         this.setState({commentList:[...this.state.commentList,this.state.temp],temp:''})

     }
     render(){
         console.log(this.state.commentList)
         return(
             <div>
                 <h1>{this.state.num}</h1>
                 {/* <h1>{this.state.timer}</h1> */}
                 <button onClick={()=>this.setState({num:this.state.num+1})}>Increase</button>
                 <button onClick={()=>this.handleClick()}>Decrease</button>
                 <div>
                 <input onChange={(e)=>this.setState({temp:e.target.value})}></input>
                 <button onClick={()=>this.handleClickSubmit()}>ADD</button>
                 </div>
                 
                 
                 <button onClick={()=>this.setState({toggle:!this.state.toggle})}>hide childA</button>

                {/* <div>
                    {this.state.commentList.map((item,index)=><div key={index}>
                        {item}

                    </div>)}
              
                </div> */}
                <ErrorBoundary>
                  {this.state.toggle && <ChildA num={this.state.num} commentList={this.state.commentList}/> }
                  </ErrorBoundary>
                
                 
             </div>
         )
     }
 }