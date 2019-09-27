import React from "react";
import HeatMap from "react-heatmap-grid";
import dateList from "@helpers/dateList";

export default function Heat(values) {
  let transactions = values.transactions;
  
  let new_date_list = dateList(transactions);

  console.log(new_date_list.length)
  
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const xLabels = months.map((i) => i); 
  

  const xLabelsVisibility = new Array(52)
    .fill(0)
    .map((_, i) => (i % 4 === 0 ? true : false));

  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(52).fill(0).map(() => Math.floor(Math.random() * 100))
    );


  return (
    <div style={{ fontSize: "13px" }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation="bottom"
        // xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(191, 13, 62, ${1 - (max - value) / (max - min)})`
        })}
      />
    </div>
  );
}
