import React from "react";
import ReactEcharts from "echarts-for-react";

export const PieChartWebsite = ({legend,color,radius,center,data,label}) => {
  const option = {
    color:color,
    legend: legend,
    series: [
      {
        name: "In Process",
        type: "pie",
        radius: radius,
        center: center,
        width: "100%",
        height: "100%",
        data:data,
        avoidLabelOverlap: false,    
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: label,
      },
    ],
  
  };

  return (
    <ReactEcharts
      option={option}
      style={{  height: "100%" }}
    />
  );
};
