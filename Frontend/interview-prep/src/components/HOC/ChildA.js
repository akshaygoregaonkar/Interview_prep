import React from 'react'
import Hoc_setColor from './Hoc_setColor'
import Hoc from './Hoc'

 function ChildA(Props) {
     console.log(Props,"childA")
    return (
        <div>
         
            <h1 style={Props.backColor}>This is my child A</h1>
            <h1>{Props.name}</h1>
            {Props.userList && Props.userList.map((item,index)=><div>
                {item.name}
            </div>)}
        </div>
    )
}
const PinkChild=Hoc(Hoc_setColor('pink')(ChildA))
const YellowChild=Hoc_setColor('yellow')(ChildA)
export {PinkChild ,YellowChild,ChildA}
export default Hoc_setColor('red')(ChildA)