import React, { useState } from 'react';

import { useParams } from "react-router-dom";


function TextInput({text,setText}) {
   

  const handleChange = (event) => {
    setText(event.target.value);
    };
    
     return (
      <>
      <input  className="customInput" type="text" value={text} onChange={handleChange} />
            {/* <button onClick={handleClick}>submit</button> */}
            </>
  );
}

export default TextInput;
