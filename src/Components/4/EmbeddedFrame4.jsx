import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame4.css'
import { client , urlFor } from '../../client'


const EmbeddedFrame4 = () => {

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
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=537490.8924102783,180560.44578552246&end=535567.0690536499,179761.09981536865&linked_id=geoxphere_11070189`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      />
    ))} 
    </>
  );
}

export default EmbeddedFrame4
