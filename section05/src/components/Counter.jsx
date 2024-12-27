import './App.css';
import { useState } from "react";
import Counter from './components/Counter.jsx';


const Counter = () => {
    const [count12, setCount12] = useState(0); 
    console.log(`Counter12 ${count12}`);
    return (
    <div>
      <h1>{count12}</h1>
      <button onClick={() => {setCount12(count12 + 1);}}>
        +(버튼12)
      </button>
    </div>
    );
  }
  

export default Counter;