import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(props.count);
    
    const subtraction = () => { 
        if(count > 0){
            setCount(count-1);
        }       
    }
    const sum = () => setCount(count+1);

    return (
        <div className="container">
            <div className="fs-1">Suma: {count}</div>   
            <button className="btn btn-primary me-5" onClick={subtraction} disabled={count<=0}>Restar</button>  
            <button className="btn btn-primary" onClick={sum}>Sumar</button>  
        </div> 
    );
  }
  
  export default Counter;