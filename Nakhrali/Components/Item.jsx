import React from 'react'

const Item = ({text,color}) => {
  return (
    <div className='' style={{height:"300px", width:"300px" ,backgroundColor:`${color}`}}> 
            <p style={{fontSize:"55px"}}>

        {text}
            </p>
    </div>
  )
}

export default Item