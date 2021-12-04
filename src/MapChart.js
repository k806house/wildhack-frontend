import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/blizliz/map/main/kamchatka.json";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// 57.728908921353344, 162.90960838526547
var x = 54.75-75
var y = 160.957-36
const markers = [
  { markerOffset: -10, name: "Заповедник1", coordinates: [x, y]},
  { markerOffset: -10, name: "Заповедник2", coordinates: [-23, 122] },
//   { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//   { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
//   { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
//   { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//   { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//   { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//   { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//   { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const MapChart = () => {
  return (
    <ComposableMap
        projectionConfig={{
            rotate: [-90, -20, 0],
            center: [51, 135],
            scale: 1300
          }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => 
          <Geography 
            key={geo.rsmKey} 
            geography={geo}
            fill="#EAEAEC"
            stroke="#D6D6DA"/>)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker 
            key={name} 
            coordinates={coordinates} 
            projectionConfig={{
                rotate: [-100, -10, 0],
                center: [51, 135],
                scale: 1200
            }}>
          <circle r={5} fill="#F00" stroke="#fff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
