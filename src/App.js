import { Slider } from '@material-ui/core';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import Box from './Box';

function App() {
  const [blur, setBlur] = useState(10);
  const [borderRadius, setBorderRadius] = useState(20);
  const [color, setColor] = useState({r: 0, g: 0, b:0, a: 0.5})
  return (
    <div className="app">
       <h1 className='title'>Glass UI</h1>
       <div className='app__controls'>
         <h1> Drag for the changes</h1>
         <div className="app__control">
           Blur:
           <Slider 
           style={{width: 200}} 
           className="slider"
           value={blur}
           onChange={(event, value) => setBlur(value)}
           />
            <input className='inputBox' type="text" value={blur}/> 
         </div>
         <div className="app__control">
           Border Radius: 
           <Slider 
           style={{width: 200}} 
           className="slider"
           value={borderRadius}
           onChange={(event, value) => setBorderRadius(value)}
           />
            <input className='inputBox' type="text" value={borderRadius}/> 
         </div>
         <div className="app__control">
           <SketchPicker color={color}
           onChangeComplete={col => setColor(col.rgb)}
           />
         </div>
         <textarea 
         className='app__code'
         value={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});\nborder-radius: ${borderRadius}px;`}
         ></textarea>
       </div>
        <Box blur={blur} borderRadius={borderRadius} color={color}/>
    </div>
  );
}

export default App;
