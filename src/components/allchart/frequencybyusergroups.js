import React from 'react'
import ReactEcharts from 'echarts-for-react';
import { useTheme } from 'next-themes';

export default function Frequencybyusergroups({ data, label, legend, minv, maxv, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: {
            bottom:0,
            left:'3%',
            textStyle: {
              color: "#9CA1AB"
            }
          },
          grid: {
            left: '-5%',
            right: '0%',
            bottom: '3%',
            width:"100%",
            height:"100%",
            containLabel: true
          },
          xAxis: {
            type: 'value',
            show:false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          yAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed'],
            show:false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            type: 'category',
            data: ['High', 'Medium', 'Medium',],
            axisLabel: {
                color: "#4B586E",
                show: true,
              },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          ],
          series: [
            {
              name: 'Group 1',
              type: 'bar',
              stack: 'total',
              color:'#210A0B',
              emphasis: {
                focus: 'series'
              },
              data: [320, 302, 301,],
              itemStyle: {
                  borderRadius: [8, 0, 0, 8],
              }
            },
            {
              name: 'Group 2',
              type: 'bar',
              color:'#541A1C',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101,],
              itemStyle: {
                  borderRadius: [0, 0, 0, 0],
              }
            },
            {
              name: 'Group 3',
              type: 'bar',
              color:'#B1484C',
              stack: 'total',
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191,],
              itemStyle: {
                  borderRadius: [0, 8, 8, 0],
              },
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                borderRadius: [0, 8, 8, 0],
              }
            },
          ]
    };
    return (
        <ReactEcharts
            option={option}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}