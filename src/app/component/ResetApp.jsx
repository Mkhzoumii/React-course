import React from 'react'
import { useDispatch } from 'react-redux'
import {resetCounter} from '../redux/slic/CounterSlice';
import {resetDestination} from '../redux/slic/DestinationSlice'

function ResetApp() {
  const dispatch =useDispatch();
  const resetCounters = ()=>
  {
    
    dispatch(resetDestination());
  }
  return (
    <div className='text-center'>
      <button className='btn btn-warning' onClick={resetCounters}> Reset App</button>
    </div>
  )
}

export default ResetApp
