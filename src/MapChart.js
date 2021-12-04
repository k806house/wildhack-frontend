import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/blizliz/map/main/kamchatka.json";


const MapChart = (props) => {
  var markers = [];
  props.coords.map(({name, x, y}) => markers.push({ "markerOffset": -10, name: name, coordinates: [y, x]}));

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-90, -20, 0],
        center: [51, 133],
        scale: 1200,
      }}
      width={400}
      height={350}
      style={{
        width: "100%",
        height: "auto",
      }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}>
          <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 7 }}>
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
