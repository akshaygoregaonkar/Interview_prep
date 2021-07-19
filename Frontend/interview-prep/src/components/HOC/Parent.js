import React from 'react'
import CrazyChild,{YellowChild,PinkChild,ChildA} from './ChildA'


function Parent(Props) {
   
    return (
        <div>
               <h1>Parent Componets</h1>
            <ChildA name="Akshay"/>
            <CrazyChild name="Akshay" />
            <YellowChild  />
            <PinkChild/>
            
            
        </div>
    )
}

export default Parent
