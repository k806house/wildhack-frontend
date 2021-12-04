import logo from './logo.svg';
import './App.css';

import MapChart from "./MapChart";
import TimelineComp from './Timeline';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div id="mapchart">
          <MapChart />
        </div>
        <div id="timeline">
          <TimelineComp />
        </div>
        
      </div>
    </div>
  );
}

export default App;
