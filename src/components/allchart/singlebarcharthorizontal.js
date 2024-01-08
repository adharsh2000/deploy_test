import React from 'react'
import ReactEcharts from 'echarts-for-react';
import { useTheme } from 'next-themes';

export default function SignleBarcharthorizontal({ data, label, legend, minv, maxv, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'value',
            data: data.label,
            min: minv,
            max: maxv,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#EAEDF3"
                }
            },
            axisLabel: {
                show: false,
                color:"#53565A",
                fontSize: 9,
                interval: 0
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
            interval: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#EAEDF3",
                }
            },
            data: data.label,
            axisLabel: {
                color: "#53565A",
                show: false,
                lineHeight: 16,
                width: 70,
                fontSize:9.5,
                overflow: "breakAll"
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(219, 212, 212, 1)"
                }
            }
        },
        {
            type: 'category',
            data: ['Storage Usage'],
            axisLabel: {
              color: "#53565A",
              show: false,
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
        }
        ],
        series: [
            {
                name: 'Clean',
                type: 'bar',
                stack: 'total',
                color: '#FF8C38',
                barWidth: "80%",
                label: label,
                emphasis: {
                    focus: 'series'
                },
                data: data.value,
                showBackground: true,
                backgroundStyle: {
                borderRadius: [12, 12, 12, 12],
                color: 'rgba(180, 180, 180, 0.2)',
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