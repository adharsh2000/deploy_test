import React, { useState } from 'react';
import * as echarts from 'echarts';
import { PieChart } from "@/components/allchart/PieChart";
import ChartWrapper from "@/components/chartwrapper";
import Frequencybyusergroups from "@/components/allchart/frequencybyusergroups";
import Treemapchart from "@/components/allchart/treemapchart";
import SignleBarcharthorizontal from "@/components/allchart/singlebarcharthorizontal";
import Linecharttimeliness from "@/components/allchart/linecharttimeliness"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Usage() {
    ////Specific Owners
    const documentsstorage=[
        { value: 72, name: 'Zip and other compressed files' },
        { value: 7, name: 'DOC' },
        { value: 10, name: 'PDF' },
        { value: 8, name: 'XLS' },
        { value: 10, name: 'PPT' },
        { value: 11, name: 'Other' },
     ];

     const InteractionSummary=[
        { value: 72, name: 'View' },
        { value: 12, name: 'Download' },
        { value: 10, name: 'Print' },
     ];

     const DocumentsOwnership=[
        { value: 78, name: 'Department 1' },
        { value: 12, name: 'Department 2' },
        { value: 10, name: 'Department 3' },
     ]
     
    // customer count 
  const CustomerCountData = {
    value: [{
            value: 63,
            itemStyle: {
                borderRadius: [12, 12, 12, 12],
                color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                { offset: 0, color: '#8F9FB8' },
                { offset: 0.5, color: '#1B3865' },
                ]),
                borderRadius: [12, 12, 12, 12],
            }
            },
    ]
  }



    return (
        <div className='pl-[129px] pr-[32px] xl:pr-[1.667vw]'>
            <div className='grid grid-cols-12 xl:gap-[1.250vw] gap-5 place-content-stretch'>
                {/**col-span-5**/}
                <div className='col-span-12 lg:col-span-5'>
                <div className='bg-white xl:rounded-[0.833vw] rounded-2xl h-full'>
                <ChartWrapper
              title={"Documents Storage"}
              subtitle={"Documents by types"}
              ExportIcon={true}
              data={
                <div className='w-full xl:p-[0.833vw] p-4'>
                <div className='w-full xl:h-[18.958vw] h-[200px]'>
                <PieChart 
                legend={{
                show: true,
                type: 'scroll',
                orient: 'vertical',
                right: 0,
                top: '10%',
                textStyle: {
                    color: "#4B586E",
                    fontSize: 10,
                    overflow: "breakAll"
                },
                itemWidth: 40,
                itemHeight: 10,
                itemStyle: {
                    borderCap: "round",
                    borderJoin: "round",
                    borderMiterLimit: 23
                },
                data: [
                'Zip and other compressed files',
                'DOC',
                'PDF',
                'XLS',
                'PPT',
                'Other',
                ]
                }}
            
                radius={["58%", "100%"]}
                center={["30%", "50%"]}
                color={["#320F11", "#E5C2C3", "#D4999C","#C27074","#B1484C","#541A1C"]}
                data={documentsstorage}
            
                /></div>
                <div className='mt-5 flex items-center justify-center'>
                    <div className='w-[28.021vw] h-[30px]'>
                    <SignleBarcharthorizontal
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
                    show: true,
                    color: "#fff",
                    position: 'insideRight',
                    formatter: '{c} %',
                    }}
                    minv={0}
                    maxv={80}
                    data={CustomerCountData}
                    />
            </div>
                </div>
                
                </div>
              }
            />            
                </div>
                </div>
                {/**col-span-5**/}
                {/**col-span-7**/}
                <div className='col-span-12 lg:col-span-7'>
                <div className='bg-white xl:rounded-[0.833vw] rounded-2xl h-full'>
                <ChartWrapper
              title={"Documents Ownership"}
              subtitle={"Departments"}
              ExportIcon={true}
              data={
                <div className='w-full xl:p-[0.833vw] p-4 grid grid-cols-12'>
                <div className='w-full xl:h-[18.958vw] h-[200px] col-span-5'>
                <PieChart 
                legend={{
                show: true,
                bottom: 0,
                left: 0,
                textStyle: {
                color: "#4B586E",
                fontSize: 10,
                overflow: "breakAll"
                },
                itemWidth: 20,
                itemHeight: 4,
                itemStyle: {
                    borderCap: "round",
                    borderJoin: "round",
                    borderMiterLimit: 23
                },
                data: [
                'Department 1',
                'Department 2',
                'Department 3',
                ]
                }}
            
                radius={["40%", "80%"]}
                center={["50%", "40%"]}
                color={["#1B3865", "#8F9FB8", "#62789B"]}
                data={DocumentsOwnership}
            
                /></div>      
                <div className='col-span-12 lg:col-span-7'>
                <Tabs>
                <div className='bg-white rounded-lg boxshadow01'>
                    <div className='xl:py-[1.042vw] py-5 xl:px-[0.833vw] px-3 flex items-center justify-between border-b border-[#E5E7EB]'>
                        <div className='text-[#374151] xl:text-[0.833vw] text-base font-medium'>Specific Owners</div>
                        <div className='custm-tablist'>
                        <TabList>
                        <Tab>Top</Tab>
                        <Tab>Bottom</Tab>
                        </TabList>
                        </div>
                    </div>
                    <div>
                    <TabPanel>
                    <div className='divide-y divide-[#E5E7EB]'>
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Jhon Wick</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>134</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>130</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#62789B] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>98</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>98</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#BECDE3] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>89</div>
                    </div>
                    </div>
                    {/**col**/}
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='divide-y divide-[#E5E7EB]'>
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Jhon Wick</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>134</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>130</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#62789B] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>98</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#1B3865] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>98</div>
                    </div>
                    </div>
                    {/**col**/}
                    {/**col**/}
                    <div className='xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-4 flex items-center xl:gap-[0.625vw] gap-3'>
                    <div><div className='w-2 h-2 bg-[#BECDE3] rounded-sm'></div></div>
                    <div className='flex items-center justify-between w-full'>
                        <div>
                            <div className='xl:text-[0.729vw] text-sm text-[#4B586E] font-normal xl:leading-[1.042vw] leading-5'>Martha Sthuart</div>
                            <div className='xl:text-[0.625vw] text-xs text-[#9CA1AB] font-light'>Department 1</div>
                        </div>
                    <div className='text-[#4B586E] xl:text-[0.625vw] text-xs font-light'>89</div>
                    </div>
                    </div>
                    {/**col**/}
                    </div>
                    </TabPanel>
                    </div>
                </div>  
                
                </Tabs> 
                </div>          
                </div>
              }
            />            
                </div>
                </div>
                {/**col-span-7**/}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:mt-[1.250vw] mt-5 gap-5 xl:gap-[1.250vw] place-content-stretch xl:h-[38.958vw]'>
                {/**col**/}
                <div className='bg-white xl:rounded-[0.833vw] rounded-2xl h-full'>
                <ChartWrapper title={"Documents Usage"} ExportIcon={true} data={
                <div className='xl:p-[0.833vw] p-4'>
                <div className='text-[#374151] xl:text-[0.729vw] text-sm font-normal'>Frequency by user groups</div>
                <div className='xl:h-[14.896vw] h-[250px]'>
                <Frequencybyusergroups />
                </div>
                <div className='text-[#374151] xl:text-[0.729vw] text-sm font-normal xl:pt-[0.833vw] pt-4'>Interaction Summary</div>
                <div className='xl:h-[16.146vw] h-[250px]'>
                <PieChart 
                legend={{
                show: true,
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 'center',
                textStyle: {
                    color: "#4B586E",
                    fontSize: 10,
                    overflow: "breakAll"
                },
                itemWidth: 50,
                itemHeight: 10,
                itemStyle: {
                    borderCap: "round",
                    borderJoin: "round",
                    borderMiterLimit: 23
                },
                data: [
                'View',
                'Download',
                'Print',
                ]
                }}
            
                radius={["40%", "90%"]}
                center={["30%", "50%"]}
                color={["#263040", "#6480AB", "#91A5C3"]}
                data={InteractionSummary}
            
                />
                </div>
                </div> 
                }
                />
                </div>
                {/**col**/}
                <div className='bg-white xl:rounded-[0.833vw] rounded-2xl h-full'>
                <ChartWrapper title={"Documents Exceptions"} ExportIcon={true} data={
                <div className='xl:p-[0.833vw] p-4'>
                <div className='xl:h-[33.125vw] h-[450px]'>
                <Treemapchart />
                </div>
                </div> 
                }
                />
                </div>
                {/**col**/}
                <div className='bg-white xl:rounded-[0.833vw] rounded-2xl h-full'>
                <ChartWrapper title={"Process timeliness"} dropdown1={true} placeholder1={"Last 6 Months"} ExportIcon={true} data={
                <div className='xl:p-[0.833vw] p-4 flex flex-col justify-between gap-3 xl:gap-[1.042vw]'>
                <div>                    
                <div className='text-[#374151] xl:text-[0.729vw] text-sm font-normal'>Expected vs Actual</div>
                <div className='xl:h-[13.542vw] h-[250px]'>
                <Linecharttimeliness />
                </div>
                </div>
                <div>
                <div className='text-[#374151] xl:text-[0.729vw] text-sm font-normal'>Upload vs Approved</div>                
                <div className='xl:h-[13.542vw] h-[250px]'>
                <Linecharttimeliness />
                </div>
                </div>
                </div> 
                }
                />
                </div>
            </div>
        </div>
    );
}