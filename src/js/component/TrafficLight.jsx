import React, { useState } from 'react';
import '../../styles/index.css'; 

export function TrafficLight() {
  const [lights, setLights] = useState([
  { color: 'red', label: 'Stop' },
  { color: 'yellow', label: 'Slow' },
  { color: 'green', label: 'Go' },
]);

const [activeLight, setActiveLight] = useState(null);
  
  const cycleLight = () => {
        const colors = lights.map(light => light.color);
        const currentIndex = colors.indexOf(activeLight);
        const nextIndex = (currentIndex + 1) % colors.length;
        setActiveLight(colors[nextIndex]);

  };

  const addPurpleLight = () => {
    if (!lights.some(light => light.color === 'purple')) {
      setLights([...lights, { color: 'purple', label: 'Extra' }]);
    }
  };


  const handleLightClick = (color) => {
    setActiveLight(color === activeLight ? null : color);
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        {lights.map(({ color, label }) => (
          <div
            key={color}
            className={`light ${color} ${activeLight === color ? 'active shine' : ''}`}
            onClick={() => handleLightClick(color)}
          >
            <span className="sr-only">{label}</span>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={cycleLight}>Cycle Light</button>
        <button onClick={addPurpleLight}>Add Purple Light</button>
      </div>
    </div>
  );
}