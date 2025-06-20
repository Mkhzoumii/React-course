import React from 'react'
import { useSelector } from 'react-redux'
function DestinationList() {
    const destinatiomList = useSelector((state)=>state. destinationStore. destinations)
  return destinatiomList.map((destination,index)=>
    {
return(
    <div className='row text-center text-white'style={{borderBottom:"1px solid #333"}}
    
    key={index}
    >
        <div className='col-8 col-md-3 offset-md-3 pt-3'>
            
        </div>
    </div>
)
    }) 
}

export default DestinationList
