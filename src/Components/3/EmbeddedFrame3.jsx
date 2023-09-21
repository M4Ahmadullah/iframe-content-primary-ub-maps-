import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame3.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=535252.320766449,178553.71236801147&end=535596.2038040161,180852.1032333374&linked_id=geoxphere_11070188';
const EmbeddedFrame3 = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame3
