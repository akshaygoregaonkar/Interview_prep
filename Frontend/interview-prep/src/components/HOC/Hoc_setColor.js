import React from 'react'
const Hoc_setColor=(color)=>(Wrappedcomponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={backColor:{color:color}}

        }
        render(){
            return <Wrappedcomponent {...this.props} backColor={this.state.backColor}/>
        }
    }


}
export default Hoc_setColor