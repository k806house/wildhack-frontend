import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

import MapChart from "./MapChart";
import TimelineComp from "./Timeline";

import { Row, Col } from "antd";

import JsonData from './data.json';
import JsonDataBatches from './dates.json';

const data = [
  [
    {
      key: "1",
      date: "10.05.2000",
      event: "New York No. 1 Lake Park",
      location: "New York",
      name: "Заповедник1",
      x: 54.75,
      y: 160.957,
    },
    {
      key: "2",
      date: "12.08.2000",
      event:
        "London No. 1 Lake Parkли илавитовив aвли илавитовив arаломвли илавитовив arkоомвли илавитовив arkормвли илавитовив arkор илавитовив",
      location: "New York",
      name: "Заповедник2",
      x: 54.75,
      y: 160.957,
    },
    {
      key: "3",
      date: "13.10.2000",
      event: "Sidney No. 1 sfLake Park",
      location: "New York",
      name: "Заповедник3",
      x: 54.75,
      y: 161.957,
    },
    {
      key: "4",
      date: "10.05.2000",
      event: "New York No. 1 Lake Park",
      location: "New York",
      name: "Заповедник1",
      x: 54.75,
      y: 160.957,
    },
    {
      key: "5",
      date: "12.08.2000",
      event:
        "London No. 1 Lake Parkли илавитовив aвли илавитовив arаломвли илавитовив arkоомвли илавитовив arkормвли илавитовив arkор илавитовив",
      location: "New York",
      name: "Заповедник2",
      x: 54.75,
      y: 160.957,
    },
    {
      key: "6",
      date: "13.10.2000",
      event: "Sidney No. 1 sfLake Park",
      location: "New York",
      name: "Заповедник3",
      x: 54.75,
      y: 162.957,
    },
  ],
  [
    {
      key: "1",
      date: "12.08.2000",
      event:
        "London No. 1 Lake Parkли илавитовив aвли илавитовив arаломвли илавитовив arkоомвли илавитовив arkормвли илавитовив arkор илавитовив",
      location: "New York",
      name: "Заповедник2",
      x: 54.75,
      y: 160.957,
    },
  ],
  [
    {
      key: "1",
      date: "13.10.2000",
      event: "Sidney No. 1 sfLake Park",
      location: "New York",
      name: "Заповедник3",
      x: 54.75,
      y: 190.957,
    },
  ],
  [
    {
      key: "1",
      date: "13.10.2000",
      event: "Sidney No. 1d Lake Park",
      location: "New York",
      name: "Заповедник4",
      x: 57,
      y: 160.957,
    },
  ],
  [
    {
      key: "1",
      date: "13.10.2000",
      event: "Sidney No. 1 Lake Park",
      location: "New York",
      name: "Заповедник5",
      x: 58,
      y: 160.957,
    },
  ],
  [
    {
      key: "1",
      date: "13.10.2000",
      event: "Sidney No. 1 Lake Park",
      location: "New York",
      name: "Заповедник6",
      x: 51.75,
      y: 160.957,
    },
  ],
  [
    {
      key: "1",
      date: "13.10.2000",
      event: "Sidney No. 1 Lake Park",
      location: "New York",
      name: "Заповедник7",
      x: 54.75,
      y: 167,
    },
  ],
];

const dateBuckets = [
  "02.2015",
  "01.2016",
  "08.2016",
  "09.2018",
  "04.2019",
  "03.2020",
  "05.2021",
  "07.2025",
  "08.2026",
  "03.2067",
  "09.2098",
  "03.2119",
  "04.2120",
  "08.2121",
];

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
                setCoords([{ name: c.location, x: c.lat, y: c.lon }]);
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
