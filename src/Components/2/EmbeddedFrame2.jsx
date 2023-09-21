import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame2.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=535162.7469062805,180410.897731781&end=535635.1017951965,180144.96564865112&linked_id=geoxphere_11070187';
const EmbeddedFrame2 = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame2
