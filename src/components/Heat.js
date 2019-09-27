import React, {Fragment} from "react";
import CalendarHeatmap from 'react-calendar-heatmap';
import dateList from "@helpers/dateList";

export default function Heat(values) {
  let transactions = values.transactions;
  
  let new_date_list = dateList(transactions);

  const percent = (value) => {
    if (value<0)return (Math.round(value/-1000));
    return (Math.round(value/1000));
  }

  return (
    <Fragment>
    <h1>Financial Transaction HeatMap</h1>
    <CalendarHeatmap
      startDate={new Date('2019-01-01')}
      endDate={new Date('2019-12-31')}
      values={new_date_list}
      showWeekdayLabels={true}
      onClick={value => alert(`Clicked on ${value.date} with net value: ${value.profit}`)}
      classForValue={
        (value) => {
          if (!value) {
            return 'color-empty';
          } 
          if(value.profit < 0) return `color-gitlab-${percent(value.profit)}`;
          if(value.profit > 0) return `color-github-${percent(value.profit)}`;
          if(value.profit === 0) return `color-github-${percent(value.profit)}`;
      }
    }
    tooltipDataAttrs={value => {
      return {
        'data-tip': `${value.date} has net-value: ${
          value.profit
        }`,
      };
    }}
    />
    </Fragment>
  );
}
