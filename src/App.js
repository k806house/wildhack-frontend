import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

import MapChart from "./MapChart";
import TimelineComp from "./Timeline";

import { Row, Col } from "antd";

import JsonData from './data.json';
import JsonDataBatches from './dates.json';


function App() {
  const [curYearIndex, setCurYearIndex] = useState(
    Math.floor(JsonDataBatches.length / 2)
  );
  const [curData, setCurData] = useState(JsonData[curYearIndex]);
  const [coords, setCoords] = useState([]);

  var year = 2000;
  var buckets = JsonDataBatches.map((value) => {
    if (+value.slice(3, 7) !== year) {
      year = +value.slice(3, 7);
      return value;
    } 
    else {
      return value.slice(0,2)
    }
  });

  return (
    <div className="App">
      <Row justify="center">
        <Col span={14}>
          <TimelineComp
            dateBuckets={buckets}
            data={curData}
            onClick={(x) => {
              setCurYearIndex(x);
              setCurData(JsonData[x]);
            }}
            onTableClick={(x) => {
              var c = curData[x];
              if (coords.length === 0 || coords[0].name !== c.name)
                {console.log("new coords", c.location);
                  setCoords([{ name: c.location, x: c.lat, y: c.lon }]);}
                  else{console.log("old")}
            }}
          />
        </Col>
        <Col span={10} justify="left">
          <MapChart coords={coords} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
