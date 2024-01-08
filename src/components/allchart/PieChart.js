import React from "react";
import ReactEcharts from "echarts-for-react";

export const PieChart = ({legend,color,radius,center,data,labelShow=true,borderRadius=10,fontSize=14,borderWidth=5,data1,radius1,center1}) => {
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
        itemStyle: {
        borderRadius: borderRadius,
        borderColor: '#fff',
        borderWidth: borderWidth
        },     
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: labelShow,
          alignTo: "labelLine",
          padding: [10, 10, 10, 10],
          borderRadius: [4, 4, 4, 4],
          length: 30,
          formatter: '{c} %',
          position: 'inner',
          fontSize:fontSize,
         
        },
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
