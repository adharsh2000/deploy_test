import React from 'react'
import ReactEcharts from 'echarts-for-react';

export default function Treemapchart() {
    const option = {
        grid: {
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          },
          legend: {
            show: false,
            bottom: "0",
            left: "",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color:"#222222",
            },
          },
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
                formatter: "\n{larger|{b}}\n\n {normal|{c}}",
              },
              data: [
                {
                  name: "Never Used",
                  value: "345",
                  itemStyle: {
                    color: "#3A2115",
                  },
                },
                {
                  name: "Too many changes",
                  value: "121",
                  itemStyle: {
                    color: "#834C31",
                  },
                },
                {
                  name: "Stuck in approval",
                  value: "190",
                  itemStyle: {
                    color: "#6E442F",
                  },
                },
                {
                  name: "Update to outdated document",
                  value: "43",
                  itemStyle: {
                    color: "#D08763",
                  },
                },
                {
                  name: "Deplayed beyond timelines",
                  value: "290",
                  itemStyle: {
                    color: "#9D5A38",
                  },
                },
                {
                  name: "Other",
                  value: "21",
                  itemStyle: {
                    color: "#F9EDE7",
                  },
                },
              ],
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
