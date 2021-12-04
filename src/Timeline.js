import React from "react";

import { Chrono } from "react-chrono";

const items = [{
    title: "May 2000",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "https://icdn.lenta.ru/images/2017/03/09/17/20170309175117910/detail_a830213b0536c057e346ee70008d2c50.jpg"
      }
    }
  },
  {
    title: "2005",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "May 2000",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "May 2000",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "May 2000",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  }];

const Timeline = () => {
    return (
        <Chrono
            onItemSelected={console.log(ite)}
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{ 
                primary:"#F00",
                secondary:"white",
                // textColor: "#F00",
                // cardBgColor: "#F00",
                // cardForeColor: "#F00",
                titleColor: "#F00",
              }}
        />
    );
  };
  
  export default Timeline;