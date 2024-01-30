import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame3.css'
import { client , urlFor } from '../../client'

const EmbeddedFrame3 = () => {
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
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=535252.320766449,178553.71236801147&end=535596.2038040161,180852.1032333374&linked_id=geoxphere_11070188`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      ></iframe>
    ))}
    </>
  );
}

export default EmbeddedFrame3
