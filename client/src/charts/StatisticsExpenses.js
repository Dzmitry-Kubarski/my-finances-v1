// core
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({ data = [] }) => {
  const newArr = data.map(i => ({ label: i._id, value: i.sum }));

  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Расходы по категориям",
        xAxisName: "Категории",
        yAxisName: "Сумма в бел.руб",
        theme: "fusion",
        useplotgradientcolor: "0",
      },
      data: newArr
    }
  };

  return <ReactFC {...chartConfigs} />
};

export default ChartComponent;