import React, { useState } from "react";

function showStatus(temperature){
    if(temperature < 0) return "Ice"
    if(temperature > 98) return "Steam"
    return "Water"
};


function Water(props) {
    const [temperature, setTemperature] = useState(props.temperature);
    
    const boil = () => setTemperature(100);
    const freeze = () => setTemperature(-5);

    return (
        <div>
            <div>{showStatus(temperature)}</div>   
            <button onClick={boil}>Boil</button>  
            <button onClick={freeze}>Freeze</button>  
        </div> 
    );
  }
  
  export default Water;
  