import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default function Documenttreechat({grid,legend,data}) {
    const option = {
        grid: grid,
          legend: legend,
          series: [
            {
              type: "treemap",
              width: "100%",
              height: "100%",
              breadcrumb: {
                show: false,
              },
              label: {
                show: true,
                position: "insideTopLeft", 
                rich: {
                  larger: {
                    fontSize: 12,
                    color: "#FFFFFF",
                    lineHeight: 1.2,
                  },
                  normal: {
                    fontSize: 14,
                    color: "#FFFFFF",
                    fontWeight: 600,
                    lineHeight: 1,
                  },
                },
                formatter: "\n{larger|{b}}\n\n {normal|{c}%}",
              },
              data: data,
            },
          ],
    };
  return (
    <>
    <ReactEcharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    </>
  )
}
