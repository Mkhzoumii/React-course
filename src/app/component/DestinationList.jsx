import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {destinationClicked} from "../redux/slic/DestinationSlice";

function DestinationList() {
    const destinatiomList = useSelector((state)=>state. destinationStore. destinations)
    const dispatch = useDispatch();
  return destinatiomList.map((destination,index)=>
    {
return(
    <div className='row text-center text-white'style={{borderBottom:"1px solid #333"}}
    
    key={index}
    >
        <div className='col-8 col-md-3 offset-md-3 pt-3'>
            {destination.name}
        </div>
        <div className='col-4 col-md-2 '>
            <button className=' btn btn-success form-control m-2'
            onClick={()=>dispatch(destinationClicked(destination))}>Details</button>
        </div>
    </div>
)
    }) 
}

export default DestinationList
