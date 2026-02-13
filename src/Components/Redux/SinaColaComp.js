import React from 'react'
import { useSelector } from 'react-redux'
import { sinacolaSlice } from './sinacolaSlice';
import { useDispatch } from 'react-redux';

const SinaColaComp = () => {
    const sinanum = useSelector((state)=>state.sinacola.counter);

const dispatch = useDispatch();

  return (
    <>
      <h2>counter :{sinanum}</h2>
      <button onClick={()=>dispatch(sinacolaSlice.actions.ordersinacola())}>Order</button>
      <button onClick={()=>dispatch(sinacolaSlice.actions.reStocksinacola())}> Restock</button>
    </>
  )
}

export default SinaColaComp
