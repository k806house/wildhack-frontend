import logo from './logo.svg';
import './App.css';

import MapChart from "./MapChart";
import TimelineComp from './Timeline';

import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <Row>
          <Col span={12}>
            <TimelineComp />
          </Col>
          <Col span={12}>col-6</Col>
      </Row>
      {/* <div className="main-container">
        <div id="mapchart">
          <MapChart />
        </div>
        <div id="timeline">
          <TimelineComp />
        </div>
        
      </div> */}
    </div>
  );
}

export default App;
