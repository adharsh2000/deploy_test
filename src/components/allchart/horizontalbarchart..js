import React from 'react'
import ReactEcharts from 'echarts-for-react';
import { useTheme } from 'next-themes';

export default function Horizontalbarchart({ data, label, label1, legend, minv, maxv, xAxisData, yAxisData, yAxisStatus, yAxisLable, grid, barcolor, gradiantColor }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const option = {
        tooltip: {
            show: false,
            trigger: 'axis',
        },
        legend: legend,
        grid: grid,
        xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: data.label,
            splitLine: {
                show: false
            },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                show: true,
                color: "#9CA1AB",
                fontSize: 12,
            }
        },
        series: [
            {
                name: 'IOS',
                type: 'bar',
                stack: 'total',
                color: "#376FFF",
                label: {
                    show: false
                },
                data: data.value1,
                itemStyle: {
                    borderRadius: [8, 0, 0, 8],
                }
            },
            {
                name: 'ANDROID',
                type: 'bar',
                stack: 'total',
                color: "#C26DC2",

                label: {
                    show: false
                },
                data:  data.value2,
                itemStyle: {
                    borderRadius: [0, 0, 0, 0],
                }
            },
            {
                name: 'Windows',
                type: 'bar',
                stack: 'total',
                color: "#162E6E",
                label: {
                    show: false
                },
                emphasis: {
                    show: false,
                },
                data:  data.value3,
                itemStyle: {
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