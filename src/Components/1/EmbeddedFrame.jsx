import React from 'react'
import { useEffect } from 'react';
import './EmbeddedFrame.css'

const URLFor = 'https://assess.xmap.cloud/assess?user=f5ca749d-8c45-436b-8199-482957b3ef95&start=521837.1629714966,182920.05062103271&end=519780.68351745605,183989.66789245605&linked_id=geoxphere_11070171'
const EmbeddedFrame = () => {
  
  return (
      <iframe 
        src = {URLFor}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
  );
}

export default EmbeddedFrame
