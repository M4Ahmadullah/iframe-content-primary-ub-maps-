import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame6.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=534830.9516906738,180061.74564361572&end=534899.1394042969,178301.57279968262&linked_id=geoxphere_11096351'
const EmbeddedFrame6 = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame6
