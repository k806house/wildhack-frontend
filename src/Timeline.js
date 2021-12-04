import {React, useState} from "react";
import "./Timeline.css"

import { Chrono } from "react-chrono";

import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
} from '@merc/react-timeline';

const items = [
    {
      name: "Кликни",
      active: false
    },
    {
      name: "Step 2",
      active: false
    },
    {
      name: "Step 3",
      active: false
    },
    {
      name: "Step 4",
      active: false
    }
  ];


const TimelineComp = () => {
    // added state called item and update state function
  const [item, setItems] = useState(items);

  const totalItems = items.length;

  // for progressbar changes
  const numberOfActiveItems = item.filter(o => o.active).length;
  const progressBarWidth =
    totalItems > 1 && numberOfActiveItems > 0
      ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100
      : 0;

  // on click handler changes state
  const click = index => {
    const items = item;
    items.forEach((item, i) => {
      if (i <= index) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setItems([...item], [...items]);
  };
    return (
        // <Chrono
        //     items={items}
        //     mode="VERTICAL_ALTERNATING"
        //     theme={{ 
        //         primary:"#F00",
        //         secondary:"white",
        //         // textColor: "#F00",
        //         // cardBgColor: "#F00",
        //         // cardForeColor: "#F00",
        //         titleColor: "#F00",
        //       }}
        // />
        <div>
            <div className="timeline">
                <div
                className="timeline-progress"
                style={{ width: `${progressBarWidth}%` }}
                />
                <div className="timeline-items">
                {item.map((item, i) => (
                    <div
                    key={i}
                    className={"timeline-item" + (item.active ? " active" : "")}
                    onClick={() => click(i)}
                    >
                    <div className="timeline-contain">{item.name}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>

    );
  };
  
  export default TimelineComp;