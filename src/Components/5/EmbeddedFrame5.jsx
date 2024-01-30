import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame5.css'
import { client , urlFor } from '../../client'

const EmbeddedFrame5 = () => {

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
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=539445,179195.5244216919&end=538734,181255&linked_id=geoxphere_11075276`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      />
    ))}
    </>
  );
}

export default EmbeddedFrame5
