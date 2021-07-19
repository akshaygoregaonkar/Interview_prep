import React from 'react'

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
      return{
          hasError:true
      }

    }


    render(){
        return(
            <div>
                {this.state.hasError?<div>Dude Component failed</div>: this.props.children}

            </div>
        )
    }
}
