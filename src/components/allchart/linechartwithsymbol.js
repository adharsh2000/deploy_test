import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useTheme } from 'next-themes';


export default function Linechartwithsymbol({ data, grid, yAxisName, yAxisNameGap, yAxisNamePosition, color1, lineColor, lineType, color2,
    shadowColor, color3,color4,  xAxisName, xAxisNameGap, xAxisNamePosition, }) {
        const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
    const options = {
       
        xAxis: {
            name: xAxisName,
            nameLocation: xAxisNamePosition,
            nameGap: xAxisNameGap,
            type: 'category',
            data: data.labels,
            nameTextStyle: {
              color: '#344054',
            },
            axisLine:{
                show: true,
                lineStyle: {
                    color: '#9CA1AB'
                }
            },
            label: {
                show: true // show labels for all data points
              },
              axisTick: { show: false },
              data: data.labels,
              nameTextStyle: {
                color: "#9CA1AB"
              },
              axisLabel: {
                interval: 0,
                color: '#9CA1AB',
                fontSize: 8,
                fontWeight: 400,
              }
  
          },
        grid: grid,
        yAxis: {
            type: 'value',
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
                color: '#344054',
            },
            axisLabel: {
                color: '#344054',
                fontSize: 8,
                formatter: '{value} %',
            },
            nameTextStyle: {
                color: currentTheme == "dark" ? "#ffff" : '#344054',
              },
        },
        legend:
        {
            show: false,
            bottom:0,
            left:5,
            data: ['High', 'Medium', 'Low'],
            textStyle: {
                color: currentTheme == "dark" ?'#ffff'  :'#344054',
        
            },
        },
        series: [
            {
                name: 'High',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    show: false,
                    focus: 'series'
                },
                symbol: 'none',
                itemStyle: {
                    color:color2,
                    borderWidth: 2,
                    shadowBlur: 1,
                    shadowColor:shadowColor
                },
                label: {
                    show: false,
                },
                lineStyle: {
                    color:'#1F3F71',
                    width: 2,
                    type:"dashed",
                    itemStyle: {
                        borderColor: '#1F3F71',
                        borderWidth: 2
                    },
                },
                data:data.values1
            },
            {
                name: 'Medium',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    show: false,
                },
                symbol: 'circle',
                symbolSize: 7,
                itemStyle: {
                    color:'#A93439',
                    borderWidth: 2,
                    shadowBlur: 1,
                    shadowColor:shadowColor
                },
                label: {
                    show: false,
                },
                lineStyle: {
                    color:'#A93439',
                    width: 2,
                    type:'line',
                    itemStyle: {
                        borderColor: '#A93439',
                        borderWidth: 2
                    },
                },
                data:data.values2
            },
            {
                name: 'Low',
                type: 'line',
                stack: 'Total',
                emphasis: {
                    show: false,
                    focus: 'series'
                },
                symbol: 'circle',
                symbolSize: 7,
                itemStyle: {
                    color:'#768FB5',
                    borderWidth: 2,
                    shadowBlur: 2,
                    shadowColor:shadowColor
                },
                label: {
                    show: false,
                },
                lineStyle: {
                    color:"#768FB5",
                    width: 2,
                    type:lineType,
                    itemStyle: {
                        borderColor: '#768FB5',
                        borderWidth: 2
                    },
                },
                data:data.values3
            },
           
        ]
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            opts={{renderer:'svg'}}
            style={{ height: "100%", width: "100%" }}
        />
    )
};