import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame4.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=537490.8924102783,180560.44578552246&end=535567.0690536499,179761.09981536865&linked_id=geoxphere_11070189'
const EmbeddedFrame4 = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame4
