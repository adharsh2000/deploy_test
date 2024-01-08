import React from 'react'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

export default function Linecharttimeliness() {
    const option = {
        legend: {
            bottom:0,
            left:0,
            icon: "circle",
            data: ['Expected value', 'Actual value'],
            textStyle: {
              color: "#9CA1AB"
            }
          },
          grid: {
            top:"12%",
            left: '2%',
            right: '2%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              axisLabel: {
              color: "#9CA1AB"
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              max: 500,
              axisLabel: {
              color: "#9CA1AB"
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true
              }
            }
          ],
          series: [
            {
              name: 'Expected value',
              type: 'line',
              stack: 'Total',
              symbol: "none",
              color:'#210A0B',
              smooth:true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#81B4E3'
                  },
                  {
                    offset: 1,
                    color: '#fff'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [190, 250, 100, 300, 150, 350, 380]
            },
            {
              name: 'Actual value',
              type: 'line',
              stack: 'Total',
              color:'#1F3F71',
              data: [100, 80, 90, 70, 80, 70, 20],
              symbolSize: 9,
              symbol: "circle",
              lineStyle: {
              type: "dashed"
              }
            },
          ]
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
