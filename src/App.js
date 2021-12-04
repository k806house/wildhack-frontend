import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";

import MapChart from "./MapChart";
import TimelineComp from "./Timeline";

import { Row, Col } from "antd";

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

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];

function App() {
  const [curYearIndex, setCurYearIndex] = useState(
    Math.floor(years.length / 2)
  );
  const [curData, setCurData] = useState(data[curYearIndex]);
  const [curTableIndex, setCurTableIndex] = useState(-1);
  const [coords, setCoords] = useState([]);

  return (
    <div className="App">
      <Row>
        <Col id="header">
          <h1>Hello zapovednik!</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <TimelineComp
            years={years}
            data={curData}
            onClick={(x) => {
              setCurYearIndex(x);
              setCurData(data[x]);
              console.log("onClick",coords);
            }}
            onTableClick={(x) => {
              setCurTableIndex(x);
              var c = curData[x];
              if (coords.length==0 || coords[0].name !== c.name)
                setCoords([{ name: c.name, x: c.x, y: c.y }]);
            }}
          />
        </Col>
        <Col span={12} justify="left">
          <MapChart coords={coords} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
