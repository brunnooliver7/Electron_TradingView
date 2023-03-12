import { createChart } from "lightweight-charts";
import React from "react";

export const Chart1 = () => {
  var chartElement = document.createElement("div-chart1");

  const chart1 = createChart(
    chartElement,
    { width: 200, height: 150 }
  );

  const lineSeries = chart1.addLineSeries();

  lineSeries.setData([
    { time: "2019-04-11", value: 80.01 },
    { time: "2019-04-12", value: 96.63 },
    { time: "2019-04-13", value: 76.64 },
    { time: "2019-04-14", value: 81.89 },
    { time: "2019-04-15", value: 74.43 },
    { time: "2019-04-16", value: 80.01 },
    { time: "2019-04-17", value: 96.63 },
    { time: "2019-04-18", value: 76.64 },
    { time: "2019-04-19", value: 81.89 },
    { time: "2019-04-20", value: 74.43 },
  ]);

  document.body.appendChild(chartElement);

  return <></>;
};
