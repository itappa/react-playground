import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<p id="timer" class="circle">25:00<br />
          <a href="">Start</a>
        </p>
      </header>
      <p class="circle timer">5:00<br />
        <a href="">Break</a>
      </p>
    </div>
  );
}


export default App;
