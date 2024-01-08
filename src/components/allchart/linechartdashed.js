import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function Linechartdashed({ data, grid,legend, xAxisLabeldata,name,linecolor,circlecolor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'category',
            data: xAxisLabeldata,
            interval: 0,
            axisLine: {
                show: false,
                lineStyle: {
                  color: "#CFCCC3"
                }
              },
              axisLabel: {
                color: "#626262",
                fontSize:9,
              },
              axisTick: {
                show: false
              }
        },
        yAxis: [
            {
            type: "category",
            show: true,
            axisTick: {
              show: false
            },
            axisLabel: {
                color: "#626262",
                show:true
              },
              splitLine: {
                show: false,
                lineStyle: {
                  type: "dashed",
                  color: "#E6E3D9",
                  width: 1
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#CFCCC3"
                }
              },
        }
        ],
        series: [
            {
                name: name[0],
                data: data[0],
                type: 'line',
                symbol: "none",
                smooth: true,
                itemStyle: {
                    color: circlecolor[0]
                },
                lineStyle: {
                    color: linecolor[0]
                },
                label: {
                    show: true,
                    color: "#6C768B"
                }
            },
            {
                name: name[1],
                data: data[1],
                type: 'line',
                symbol: "none",
                smooth: true,
                itemStyle: {
                    color: circlecolor[1]
                },
                lineStyle: {
                    color: linecolor[1],
                    type: "dashed",
                }
            },
        ]
    };
    return (
        <ReactEcharts
            option={options}
            style={{ height: "100%", width: "100%" }}
            opts={{ renderer: 'svg' }}
        />
    )
}