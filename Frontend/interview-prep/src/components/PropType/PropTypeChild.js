import React from 'react'
import propTypes from 'prop-type'

 function PropTypeChild(Props) {
    return (
        <div>
            <h1> IN child</h1>
            {Props.name}
            {Props.marks.map((item,index)=><div style={{border:'1px solid black',padding:'5px'}}>
              <div>
              {item.sub} 
              </div>
              <div>
          
                {item.score}
              </div>
                
               
            </div>)}
            
        </div>
    )
}

PropTypeChild.defaultProps={
    name:'',
    marks:[]
}
PropTypeChild.propTypes={
    name:propTypes.string,
    marks:propTypes.array
}

export default PropTypeChild