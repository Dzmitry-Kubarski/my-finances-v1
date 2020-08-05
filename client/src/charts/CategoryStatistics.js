// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


const ChartComponent = ({ data }) => {
  const newArr = data.map(i => ({ label: i._id, value: i.sum }));

  const chartConfigs = {
    type: "column3d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Расходы по категориям",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Категории",
        //Set the y-axis name
        yAxisName: "Сумма расходов",
        numberSuffix: "руб",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data: newArr
      // newArr
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;