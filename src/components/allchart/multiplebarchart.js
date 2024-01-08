import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { useTheme } from 'next-themes';

export default function MultiplebarChart({ data, xAxisName, xAxisNamePosition, xAxisNameGap, yAxisName, yAxisNamePosition, yAxisNameGap, legend, grid, color1, color2, color3, color4, color5, lenght }) {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const myarray = [
        {
            type: 'bar',
            itemStyle: {
                borderRadius: [8, 8, 8, 8],
            },
            color: color1
        },
        {
            type: 'bar',
            itemStyle: {
                borderRadius: [8, 8, 8, 8],
            },
            color: color2
        },
        {
            type: 'bar',
            itemStyle: {
                borderRadius: [8, 8, 8, 8],
            },
            color: color3
        },
    ]

    if (lenght === 5) {
        myarray.push(
            {
                type: 'bar',
                itemStyle: {
                    borderRadius: [8, 8, 8, 8],
                },
                color: color4
            },
            {
                type: 'bar',
                itemStyle: {
                    borderRadius: [8, 8, 8, 8],
                },
                color: color5
            },
        )
    }

    const multiplebarChart = {
        legend: legend,
        grid: grid,
        tooltip: {},
        dataset: {
            dimensions: data.labels,
            source: data.values
        },
        xAxis: {
            type: 'category',
            interval:0,
            axisTick: { show: false },
            nameTextStyle: {
                color: currentTheme == "dark" ? "#ffff" : "#344054"
            },
            axisLabel: {
                show:true,
                color: '#626262',
                fontSize: 7,
                fontWeight: 400
            },
            name: xAxisName,
            nameLocation: xAxisNamePosition,
            nameGap: xAxisNameGap,
            axisLine: {
                show:false
            }
        },

        yAxis: {
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: currentTheme == "dark" ? "#ffffff26" : "#E0E0E0",
                }
            },
            name: yAxisName,
            nameLocation: yAxisNamePosition,
            nameGap: yAxisNameGap,
            nameTextStyle: {
                color: currentTheme == "dark" ? "#ffff" : '#344054',
                fontSize: 10
            },
            axisLabel: {
                color: '#626262',
                fontSize: 10
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: myarray
    };

    return (
        <>
            <ReactEcharts
                option={multiplebarChart}
                opts={{ renderer: 'svg' }}
                style={{ height: "100%", width: "100%" }}
            />
        </>
    );
}