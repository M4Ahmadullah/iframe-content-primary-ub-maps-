import React from 'react'
import { useEffect, useState } from 'react';
import './EmbeddedFrame2.css'
import { client, urlFor } from '../../client'

const EmbeddedFrame2 = () => {
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
        src = {`https://assess.xmap.cloud/assess?user=${about.user}&start=535162.7469062805,180410.897731781&end=535635.1017951965,180144.96564865112&linked_id=geoxphere_11070187`}
        className='app__iframe'
        title = 'Embedded Content'
        allowFullScreen
      />
    ))}
    </>
  );
}

export default EmbeddedFrame2
