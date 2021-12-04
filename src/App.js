import logo from './logo.svg';
import './App.css';

import MapChart from "./MapChart";
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div id="timeline">
          <Timeline />
        </div>
        <div id="mapchart">
          <MapChart />
        </div>
      </div>
    </div>
  );
}

export default App;
