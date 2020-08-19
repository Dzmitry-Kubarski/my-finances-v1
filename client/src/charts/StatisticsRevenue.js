
import React from "react";

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

const ChartComponent = ({ data = [] }) => {
  const newArr = data.map(i => ({ label: i._id, value: i.sum }));

  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Доходы по категориям",
        // subCaption: "In MMbbl = One Million barrels",        
        xAxisName: "Категории",
        yAxisName: "Сумма доходов",
        numberSuffix: "руб",
        theme: "fusion",
        palettecolors: "#23d2e2",
        useplotgradientcolor: "0",
        // "showBorder": "1",
        // "borderColor": "#666666",
        // "borderThickness": "4",
        // "borderAlpha": "80",
        // "bgImage": "http://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg",
      },
      // Chart Data
      data: newArr
    }
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;