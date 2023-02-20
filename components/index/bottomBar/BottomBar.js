import React from 'react'
import ImdbRiting from './ImdbRiting'
import Actions from './Actions'
import dynamic from 'next/dynamic';
const Swiber = dynamic(() => import("./Swiber"),
  { ssr: false }
);

const BottomBar = ({inner}) => {

  return (
    <div className="MDBSection" style={inner ? {position: 'relative' , top:'0'} : {}}>
      {/* imdb riting */}
      <ImdbRiting />

      {/* swiber */}  
      <Swiber />

       {/* swiber */}  
       <Actions />
    </div>
  )

}

export default BottomBar