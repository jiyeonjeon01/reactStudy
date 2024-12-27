import './App.css'
import {useState} from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

// function Bulb() {
//   const [light, setLight] = useState('OFF');
//   console.log(`bulb ${light}`);

//   return (
//     <div>
//       {light === 'ON' ? (
//         <h1 style={{ backgroundColor: 'orange'}}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
//       )}

//       <button 
//         onClick={() => { setLight(light === 'ON' ? 'OFF' : 'ON'); }} >
//           {light === 'ON'? "끄기12" :  "켜기12"}
//       </button>

//     </div>
//   );
// }

// const Counter = () => {
//   const [count12, setCount12] = useState(0); 
//   console.log(`Counter12 ${count12}`);
//   return (
//   <div>
//     <h1>{count12}</h1>
//     <button onClick={() => {setCount12(count12 + 1);}}>
//       +(버튼12)
//     </button>
//   </div>
//   );
// }


function App() {
  // console.log('App함수 실행');
  // const [count, setCount] = useState(0); 
  // const [count2, setCount2] = useState(0); 
  // const [light, setLight] = useState('OFF');
  // const [light2, setLight2] = useState('OFF');
  // const [count3, setCount3] = useState(0); 
  

  // const buttonClickEvent2 = (e) => {
  //   setCount2(count2 + 1);
  // };

  return (
    <>
    {/* <div>
      <h1>{count}</h1>
      <button onClick={(e) => {setCount(count + 1)}}> + </button>

      <h1>{count2}</h1>
      <button onClick={buttonClickEvent2}> + </button>
    </div>

    <div>
    <h1>{light}</h1>
      <button onClick={() => { setLight(light === 'OFF' ? 'ON' : 'OFF')}}>
        {light === 'ON' ? ("끄기1") : ("켜기1")}
      </button>
    </div>

    <div>
      <Bulb light={light2}/>
      <button 
        onClick={() => { setLight2(light2 === 'ON' ? 'OFF' : 'ON'); }} >
          {light2 === 'ON'? "끄기2" :  "켜기2"}
        </button>
    </div>

    <div>
      <h1>{count3}</h1>
      <button onClick={() => { setCount3(count3 + 1);}}> 
        +(버튼3) 
      </button>
    </div> */}

    <div>
      <Bulb />
      <Counter />
    </div>
    </>
  )
}

export default App
