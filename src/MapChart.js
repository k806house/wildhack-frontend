import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/blizliz/map/main/kamchatka.json";

const colors = ["", "#ff7877", "#92ea8f", "#8ce95f"]
const colorsFill = ["", "#f5071d", "#1a90ff", "#47da14"]

const MapChart = (props) => {
  var markers = [];
  var markerColor;
  var markerColorFill;

  props.coords.map(({ name, x, y, color }) => {
    markers.push({ markerOffset: -10, name: name, coordinates: [y, x] });
    markerColor = colors[color];
    markerColorFill = colorsFill[color];
  });

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-90, -20, 0],
        center: [50, 132],
        scale: 1500,
      }}
      width={400}
      height={420}
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
              style={{
                default: { outline: "none" },
                hover: { outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={7} fill={markerColorFill} stroke={markerColor} strokeWidth={3} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 12 }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
