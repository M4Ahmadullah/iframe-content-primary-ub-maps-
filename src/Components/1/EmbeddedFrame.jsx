import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame.css'
import { client , urlFor } from '../../client' 


const EmbeddedFrame = () => {
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
          src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=521837.1629714966,182920.05062103271&end=519780.68351745605,183989.66789245605&linked_id=geoxphere_11070171`}
          className='app__iframe'
          title = 'Embedded Content'
          allowFullScreen
        />
      ))}
      </>
  );
}

export default EmbeddedFrame
