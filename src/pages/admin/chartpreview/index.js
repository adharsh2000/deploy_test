import React from 'react';
import ChartWrapper from "@/components/chartwrapper";
import { PieChart } from "@/components/allchart/PieChart";
import Barcharthorizontal from "@/components/allchart/barchart";
import Linechartdashed from "@/components/allchart/linechartdashed";



export default function index() {
    ////Specific Owners
      const PersonnelbyLanguages=[
        { value: 78, name: '78 %' },
        { value: 12, name: '12 %' },
        { value: 10, name: '10 %' },       
     ]
     const documentsstorage=[
        { value: 72, name: '72 %' },
        { value: 7, name: '7 %' },
        { value: 10, name: '10 %' },
        { value: 8, name: '8 %' },
        { value: 10, name: '10 %' },
        { value: 11, name: '11 %' },
     ]

     // customer count 
  const CustomerCountData = {
    label: ['Registered Users','Internal District Users','Parents','Unregistered',],
    value: [{
            value: 3,
            itemStyle: {
                color: '#F5DED3',
                borderRadius: [12, 12, 12, 12],
            }
            },
            {
            value: 10,
            itemStyle: {
                color: '#F5DED3',
                borderRadius: [12, 12, 12, 12],
            }
            },
            {
            value: 15,
            itemStyle: {
                color: '#F5DED3',
                borderRadius: [12, 12, 12, 12],
            }
            },
            {
            value: 70,
            itemStyle: {
                color: '#A93439',
                borderRadius: [12, 12, 12, 12],
            }
            },
    ]
  }
      
  return (
    <>
    
    <div className='flex flex-wrap gap-5 p-5'>
    {/***Specific Owners***/}
    <div className='bg-white rounded-[16px]'>
    <ChartWrapper
              title={"Documents Storage"}
              subtitle={"Documents by types"}
              ExportIcon={true}
              data={
                <div className='w-[200px] h-[200px] p-5'>
                <PieChart 
                legend={{
                show: false,
                }}
            
                radius={["58%", "100%"]}
                center={["50%", "50%"]}
                color={["#1B3865", "#8F9FB8", "#62789B",]}
                data={PersonnelbyLanguages}
            
                />
                </div> 
              }
            />
    </div>
    {/***Specific Owners***/}
    {/***Documents Storage***/}
    <div className='bg-white rounded-[16px]'>
    <ChartWrapper
              title={"Documents Storage"}
              subtitle={"Documents by types"}
              ExportIcon={true}
              data={
                <div className='w-[200px] h-[200px] p-5'>
                <PieChart 
                legend={{
                show: false,
                }}
            
                radius={["58%", "100%"]}
                center={["50%", "50%"]}
                color={["#320F11", "#E5C2C3", "#D4999C","#C27074","#B1484C","#541A1C"]}
                data={documentsstorage}
            
                />
                </div> 
              }
            />
    </div>
    {/***Documents Storage***/}
    <div className='w-[350px] h-[200px]'>
    <Barcharthorizontal
              legend={{
                show: false,
                icon: "roundRect",
                bottom: "0%",
                left: "0%",
                itemWidth: 10,
                itemHeight: 10
              }}
              grid={{
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "5%",
                containLabel: true,
              }}
              label={{
                show: false,
                color: "#53565A",
                position: 'outside',
              }}
              minv={0}
              maxv={80}
              data={CustomerCountData}
              backcolor={"#F5F6F700"}
            />
    </div>
    <div className='w-[1200px] h-[200px]'>
    <Linechartdashed
              legend={{
                icon: "roundRect",
                bottom: "0%",
                right:"0%",
                itemWidth:10,
                itemHeight:10,
                textStyle: {
                    color: "#53565A",
                    fontSize: 10,
                }
              }}
              grid={{
                top: "10%",
                right: "0%",
                bottom: "15%",
                left: "0%",
                containLabel: true,
              }}
              linecolor={["#210A0B","#1F3F71",]}
              circlecolor={["#210A0B","#1F3F71",]}
              xAxisLabeldata={['May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan 2018','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan 2019','Feb','Mar','Apr','May','Jun','Jul']}
              name={['Declared value', 'Expected value', ]}
              data={[
              ['1.4', '1.6', '1.7', '1.8', '1.9','1.1','1.4','1.4','1.5','1.4','1.4','2.2','1.8','1.4', '1.6', '1.7', '1.8', '1.9','1.4','1.4','1.4','1.5','1.4','1.4','2.2','2.2','2.2',]]}
            />
    </div>
    </div>
    </>
  )
}
