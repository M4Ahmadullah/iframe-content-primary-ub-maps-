import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame5.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=535605.1921844482,180179.5244216919&end=535583.1861495972,180897.20010757446&linked_id=geoxphere_11075276'
const EmbeddedFrame5 = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame5
