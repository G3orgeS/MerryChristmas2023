import React from 'react';
import './SnowEffect.css';

function App() {
  const snowflakes = Array.from({ length: 50 }, (v, i) => i);

  return (
    <section className="xmas">
      {snowflakes.map((index) => (
        <div key={index} className="snowflake" style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 2 + 1}s`, animationDelay: `${Math.random()}s`, zIndex: 2 }}></div>
      ))}
      <div className="centertextdiv">
        <h1>Merry christmas</h1>
        <h2>And a happy new year</h2>
      </div>
    </section>
  );
}

export default App;