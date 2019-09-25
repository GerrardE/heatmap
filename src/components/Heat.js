import React from 'react';
import PropTypes from 'prop-types';
import HeatMap from 'react-heatmap-grid';

const xLabels = new Array(52).fill(0).map((_, i) => `${i}`);

const xLabelsVisibility = new Array(52)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

export default function Heat (transactions) {

  return (
    <div style={{ fontSize: '13px' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation='bottom'
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(191, 13, 62, ${1 - (max - value) / (max - min)})`,
          fontSize: '11.5px',
          color: '#000'
        })}
        cellRender={value => value && `${value}%`}
      />
    </div>
  );
}
