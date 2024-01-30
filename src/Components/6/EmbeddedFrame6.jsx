import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame6.css'
import { client , urlFor } from '../../client'

const EmbeddedFrame6 = () => {
  
  const [abouts, setAbouts] = useState([]);
 
  useEffect(() => {
    const query = '*[_type == "mapUrl"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    {abouts.map(about => (
      <iframe 
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=534830.9516906738,180061.74564361572&end=534899.1394042969,178301.57279968262&linked_id=geoxphere_11096351`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      />
    ))}
    </>
  );
}

export default EmbeddedFrame6
