import React, { useState } from 'react';
import { getResponse } from './Redux/appSlice';
import { useDispatch } from 'react-redux';

function Audio() {
  const [audioFile, setAudioFile] = useState(null);
  const dispatch=useDispatch();

  const handleFileChange = (e) => {
    
    const file=e.target.files[0];
    setAudioFile(file);

  }
  const handleSubmit=()=>{
    dispatch(getResponse({
      audioBytes:audioFile
    }
));
  }
  return (
    <div>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {audioFile && (
        <div>
          <h2>Uploaded Audio:</h2>
          <audio controls>
            <source src={URL.createObjectURL(audioFile)} />
          </audio>
        </div>
      )}
    </div>
  );
}

export default Audio;
