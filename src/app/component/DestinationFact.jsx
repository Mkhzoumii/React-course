import React from 'react'
import { useSelector } from 'react-redux'


function DestinationFact() {
    const destinationSelected = useSelector((state)=>state. destinationStore. destinationSelected);
    if( destinationSelected==undefined)
        {
            return (
                <div className='text-center text-warning pt-4'>Select a Destaniation</div>
            )
            
        }
        else
        {
            return (
                <div className=' text-center border p-3 m-3 text-success '>
                <h4 className='text-success'> {destinationSelected.name}</h4>
                Days Recommended : {destinationSelected.days}<br/>
                Fact : {destinationSelected.fact} 
                </div>
            )
        }
 
}

export default DestinationFact
