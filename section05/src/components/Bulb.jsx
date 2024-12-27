import './App.css';
import { useState } from "react";
import Bulb from './components/Bulb.jsx';


function Bulb({light}) {
    const [light, setLight] = useState('OFF');
    console.log(`bulb ${light}`);
  
    return (
      <div>
        {light === 'ON' ? (
          <h1 style={{ backgroundColor: 'orange'}}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
        )}
  
        <button 
          onClick={() => { setLight(light === 'ON' ? 'OFF' : 'ON'); }} >
            {light === 'ON'? "끄기12" :  "켜기12"}
        </button>
  
      </div>
    );
  }

export default Bulb;