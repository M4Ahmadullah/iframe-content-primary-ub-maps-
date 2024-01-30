import React from 'react'
import { useEffect, useState } from 'react';
import '../EmbeddedFrame.css'
import { client , urlFor } from '../../../client'

const EmbeddedFrame101 = () => {
  
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
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=547005,184059&end=545510,183940&linked_id=geoxphere_11096351`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      />
    ))}
    </>
  );
}

export default EmbeddedFrame101
