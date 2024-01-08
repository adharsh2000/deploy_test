import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ChartWrapper from '@/components/chartwrapper';
import Barcharthorizontal from '@/components/allchart/barchart';
import Iframe from 'react-iframe';
import { PieChart } from '@/components/allchart/PieChart';
import Documenttreechat from '@/components/allchart/documenttreechat';
import Linechartdashed from '@/components/allchart/linechartdashed';
import MultiplebarChart from '@/components/allchart/multiplebarchart';
import Linechartwithsymbol from '@/components/allchart/linechartwithsymbol';
import Horizontalbarchart from '@/components/allchart/horizontalbarchart.';
import Image from 'next/image';

export default function General() {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    /******** table ***********/
    // Data table 
    const products = [
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },
        {
            Image: 'pdf-file',
            Owner: 'Jhon Marti',
            Title: 'Reject II AS',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Folder: 'Rejected files',
            LastViewed: '5/10/2018',
            Size: '2Mb',
            Views: '3456765',
            Downl: '123',
            Prints: '23'
        },

    ]
    /*---Table End--*/

    const TableImage = (rowData) => {
        return (
            <div className="flex gap-2 items-center">
                <img src={`/assets/admin/svg/${rowData.Image}.svg`}
                    className='w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]'
                    width={48}
                    height={48}
                    alt='avatar'
                />
                <div>{rowData.Image}</div>

            </div>
        );
    }


    // customer count 
    const CustomerCountData = {
        label: ['Registered Users', 'Internal District Users', 'Parents', 'Unregistered',],
        label1: ['10%', 'Internal District Users', 'Parents', 'Unregistered',],
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

    const datayaxis = {
        lable: ['3', '10', '15', '70',],
    };

    const PersonnelbyLanguages = [
        { value: 78, name: 'View' },
        { value: 12, name: 'Download' },
        { value: 10, name: 'Print' },
    ]

    const FileUsageData = [
        { value: 60, name: 'View' },
        { value: 12, name: 'Download' },
        { value: 10, name: 'Print' },
    ]

    const UsageByGroupData = [
        { value: 10, name: 'Category 1' },
        { value: 12, name: 'Category 2' },
        { value: 60, name: 'Category 3' },
        { value: 20, name: 'Category 4' },
        { value: 12, name: 'Category 5' },
        { value: 10, name: 'Category 6' },
    ]

    const DocumentTypeData = [
        {
            name: "Strategic Plans",
            value: "34",
            itemStyle: {
                color: "#060C16",
            },
        },
        {
            name: "Presentations",
            value: "20",
            itemStyle: {
                color: "#091221",
            },
        },
        {
            name: "Memorandums",
            value: "10",
            itemStyle: {
                color: "#0F1F38",
            },
        },
        {
            name: "River",
            value: "12",
            itemStyle: {
                color: "#152C4F",
            },
        },
        {
            name: "Handbooks",
            value: "18",
            itemStyle: {
                color: "#35527F",
            },
        },
        {
            name: "Other",
            value: "4",
            itemStyle: {
                color: "#8F9FB8",
            },
        },
    ]

    const openvscloseincident = {
        labels: ['department', 'Low', 'High', 'Medium', 'para4', 'para5'],
        values: [
            { department: 'Adult Career\n Education', Low: 10, High: 20, Medium: 30, },
            { department: 'Beyond the\n Bell', Low: 40, High: 50, Medium: 60, },
            { department: 'Charter Schools\n Division', Low: 20, High: 30, Medium: 40, },
            { department: 'Division of\n Instruction', Low: 30, High: 40, Medium: 50, },
            { department: 'General\n Counsel', Low: 40, High: 50, Medium: 60, },
            { department: 'Human\n Resources', Low: 20, High: 30, Medium: 60, },
            { department: 'Special\n Education', Low: 10, High: 50, Medium: 20, },
            { department: 'Information\n Technology Division', Low: 10, High: 50, Medium: 20, },

        ]
    }

    //   keyword start 
    // const words = [
    //     {
    //         text: 'Education',
    //         value: 101,
    //     },
    //     {
    //         text: 'Finance',
    //         value: 70,
    //     },
    //     {
    //         text: 'Methodology',
    //         value: 70,
    //     },
    //     {
    //         text: 'discipline',
    //         value: 70,
    //     },
    //     {
    //         text: 'english',
    //         value: 70,
    //     },
    //     {
    //         text: 'attendance',
    //         value: 70,
    //     },
    //     {
    //         text: 'Spanish',
    //         value: 70,
    //     },
    //     {
    //         text: 'math',
    //         value: 80,
    //     },
    //     {
    //         text: 'discipline',
    //         value: 40,
    //     },
    //     {
    //         text: 'business',
    //         value: 40,
    //     },
    //     {
    //         text: 'meals',
    //         value: 50,
    //     },
    //     {
    //         text: 'Sports',
    //         value: 50,
    //     },
    //     {
    //         text: 'Physics',
    //         value: 30,
    //     },
    //     {
    //         text: 'Aristotle',
    //         value: 40,
    //     },
    // ]

    // const callbacks = {
    //     getWordColor: word => word.value > 100 ? "#1B3865" : word.value > 50 ? '#768FB5' : word.value > 10 ? '#E0A689' : null,
    //     onWordClick: console.log,
    // }

    // const options = {
    //     rotations: 0,
    //     // rotationAngles: [-90, 0],
    // };
    //   keyword end

    const UsageTimelineData = {
        labels: ["Oct", "Nov", "Dec", "Jan \n 2019", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        values3: ["56", "49", "52", "45", "56", "49", "52", "45", "52", "45",],
        values2: ["16", "14", "15", "13", "16", "14", "15", "13", "15", "13",],
        values1: ["10", "20", "15", "16", "10", "20", "15", "16", "15", "16",],
    }

    const DeviceData = {
        label: ['Mobile', 'Tablet', 'PC',],
        value1: [320, 302, 301],
        value2: [120],
        value3: [220, 182, 120]
    }


    return (
        <div className='pl-[129px] pr-[32px] xl:pr-[1.667vw]'>
            <div className="grid grid-cols-12 gap-[24px] xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw]">
                <div className='col-span-12 xl:col-span-4 bg-white rounded-[8px]'>
                    <ChartWrapper
                        title={"Usage by Document type"}
                        ExportIcon={true}
                        data={
                            <div className='h-[200px] '>
                                <Documenttreechat
                                    grid={{
                                        top: "0%",
                                        right: "0%",
                                        bottom: "0%",
                                        left: "0%",
                                    }}
                                    legend={{
                                        show: false,
                                        bottom: "0",
                                        left: "",
                                        itemWidth: 10,
                                        itemHeight: 10,
                                        textStyle: {
                                            color: "#222222",
                                        },
                                    }}
                                    data={DocumentTypeData}
                                />
                            </div>
                        }
                    />
                </div>
                <div className='col-span-12 xl:col-span-4 bg-white rounded-[8px]'>
                    <ChartWrapper
                        title={"Usage by User type"}
                        ExportIcon={true}
                        data={
                            <div className=' h-[200px]'>
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
                                        top: "20",
                                        right: "20",
                                        bottom: "10",
                                        left: "20",
                                        containLabel: true,
                                    }}
                                    axisLabely={{
                                        show: true,
                                    }}
                                    label={{
                                        show: false,
                                        color: "#53565A",
                                        position: 'outside',
                                    }}
                                    minv={0}
                                    maxv={80}
                                    datayaxis={datayaxis}
                                    data={CustomerCountData}
                                />
                            </div>
                        }
                    />
                </div>
                <div className='col-span-12 xl:col-span-4 bg-white rounded-[8px]'>
                    <ChartWrapper
                        title={"Location analytics"}
                        ExportIcon={true}
                        data={
                            <div className=' h-[200px]'>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <Iframe
                                            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0"
                                            scrolling="no"
                                            style="width: 100%; height: 100%;"></Iframe>
                                    </div></div>
                            </div>
                        }
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[24px] xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw]">

                <div className='col-span-12 xl:col-span-8 bg-white rounded-[8px]'>
                    <ChartWrapper
                        title={"Usage over time"}
                        ExportIcon={true}
                        data={
                            <div className=' p-6'>
                                <div className='h-[200px] border-b-[#E5E7EB] border-b pb-[24px] xl:pb-[1.25vw]'>
                                    <Linechartdashed
                                        legend={{
                                            icon: "circle",
                                            bottom: "0%",
                                            left: "0%",
                                            itemWidth: 10,
                                            itemHeight: 10,
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
                                        linecolor={["#210A0B", "#1F3F71",]}
                                        circlecolor={["#210A0B", "#1F3F71",]}
                                        xAxisLabeldata={['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2018', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2019', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                                        name={['Declared value', 'Expected value',]}
                                        data={[
                                            ['20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '12', '13', '14', '15', '16', '17', '18', '19', '20', '19', '18', '17', '16', '15', '14', '13',],
                                            ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '19', '18', '17', '16', '15', '16', '17', '18', '19', '20', '19', '18', '17', '16', '15', '14',]]}
                                    />

                                </div>
                                <div className='w-full h-[250px]'>
                                    <MultiplebarChart
                                        grid={{ top: 70, left: 50, right: 5 }}
                                        xAxisNameGap={"25"}
                                        xAxisNamePosition={"middle"}
                                        yAxisName={"# of documents in 000"}
                                        yAxisNameGap={"39"}
                                        yAxisNamePosition={"middle"}
                                        legend={{
                                            show: true,
                                            icon: 'circle',
                                            bottom: 0,
                                            left: 5,
                                            itemHeight: 10,
                                            itemWidth: 10,
                                            textStyle: {
                                                color: '#344054',
                                            },
                                        }}
                                        color1={"#35527F"}
                                        color2={"#A93439"}
                                        color3={"#320F11"}
                                        data={openvscloseincident}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className='col-span-12 xl:col-span-4 grid grid-rows-2 grid-flow-col gap-4'>
                    <div className='bg-white rounded-[8px]'>
                        <ChartWrapper
                            title={"Interaction usage"}
                            ExportIcon={true}
                            data={
                                <div className='w-[400px] h-[200px]'>
                                    <PieChart
                                        legend={{
                                            show: true,
                                            icon: "circle",
                                            top: 'center',
                                            right: '60',
                                            itemWidth: 10,
                                            itemHeight: 10,
                                            orient: 'vertical'
                                        }}
                                        radius={["38%", "80%"]}
                                        center={["30%", "50%"]}
                                        color={["#541A1C", "#762427", "#C27074",]}
                                        data={PersonnelbyLanguages}
                                    />
                                </div>
                            }
                        />
                    </div>

                    <div className='bg-white rounded-[8px]'>
                        <ChartWrapper
                            title={"Search Keywords"}
                            ExportIcon={true}
                            data={
                                <div className='pt-[24px] xl:pt-[1.25vw] mb-2 mx-auto w-[400px] h-[200px]'>
                                    <Image src={`/assets/admin/svg/searchKeyword.svg`}
                                        className='mx-auto xl:w-[27.292vw] xl:h-[6.771vw]'
                                        width={524}
                                        height={130}
                                        alt='searchKeyword'
                                    />
                                    {/* <ReactWordcloud
                                        options={options}
                                        words={words}
                                        callbacks={callbacks}
                                    /> */}
                                </div>
                            }
                        />
                    </div>

                </div>

            </div>
            <div className="grid grid-cols-12 gap-[24px] xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw]">
                <div className='col-span-12 xl:col-span-8 bg-white rounded-[8px]'>
                    <div className='px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] mt-[16px] xl:mt-[0.833vw] flex items-center justify-between gap-2 border-b border-b-[#BECDE3]'>
                        <div className='text-[#374151] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold'>
                            Documents Usage
                        </div>
                        <div className='flex items-center gap-4 xl:gap-[0.833vw]'>
                            <div className="customDropdown">
                                <Dropdown
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.value)}
                                    options={cities}
                                    optionLabel="name"
                                    placeholder="Most Viewed"
                                    className="w-full"
                                />
                            </div>
                            <div className="keywordSearch documentSearch">
                                <span className="p-input-icon-left w-[16rem]">
                                    <i className="autinisd-user" />
                                    <InputText
                                        placeholder="Search"
                                        className="w-full"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <DataTable value={products}
                            className="custTable tableCust custCheckBox"
                            scrollable
                            responsiveLayout="scroll"
                            style={{ width: "100%" }}
                            paginator
                            paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                            currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            rows={10}
                            onSelectionChange={(e) => setSelectedProducts(e.value)}
                            selectionMode={rowClick ? null : 'checkbox'}
                            selection={selectedProducts}

                            globalFilterFields={[
                                "Groupname",
                                "Groupdescription",
                                "representative.name",
                                "Groupcreateddate",
                                "Lastmodifieddate",
                            ]}
                            dataKey="id"
                        >

                            <Column
                                field="Image"
                                header="Type"
                                filter
                                style={{ minWidth: "8rem" }}
                                body={TableImage}
                            ></Column>
                            <Column
                                field="Title"
                                header="File Name"
                                filter
                                style={{ minWidth: "15rem" }}
                            ></Column>
                            <Column
                                field="createDate"
                                header="Create Date"
                                style={{ minWidth: "12rem" }}
                                sortable
                            ></Column>
                            <Column
                                field="ReleaseDate"
                                header="Release Date"
                                style={{ minWidth: "12rem" }}
                                sortable
                            ></Column>
                            <Column
                                field="Owner"
                                header="Owner"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="Folder"
                                header="Folder"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="LastViewed"
                                header="Last Viewed"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="Size"
                                header="Size"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="Views"
                                header="Views"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="Downl"
                                header="Download"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                            <Column
                                field="Prints"
                                header="Prints"
                                style={{ minWidth: "8rem" }}

                            ></Column>
                        </DataTable>
                    </div>

                </div>
                <div className='col-span-12 xl:col-span-4 bg-white rounded-[8px]'>
                    <ChartWrapper
                        title={"File usage details"}
                        subtitle={"BUL-089013.0 NEW Document regular Upload Test"}
                        text={'text-[#fff]'}
                        bgcolor={'bg-[#A93439] rounded-t-[8px]'}
                        ExportIcon={true}
                        data={
                            <div className='px-[24px] xl:px-[1.25vw] py-[18px] xl:py-[0.938vw]'>
                                <div className=' h-[100px] border-b border-[#E5E7EB] relative'>
                                    <PieChart
                                        legend={{
                                            show: false,
                                            icon: "circle",
                                            top: 'center',
                                            right: '40',
                                            itemWidth: 10,
                                            itemHeight: 10,
                                            orient: 'horizontal'
                                        }}
                                        borderRadius={4}
                                        borderWidth={3}
                                        labelShow={false}
                                        radius={["38%", "80%"]}
                                        center={["15%", "50%"]}
                                        color={["#541A1C", "#762427", "#C27074",]}
                                        data={FileUsageData}
                                    />
                                    <div className='absolute right-10 top-6'>
                                        <div className='flex items-center gap-4'>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <div className='h-2 w-2 rounded-full bg-[#541A1C]'></div>
                                                    <div className='text-[#4B586E] xl:text-[0.8337vw] text-[16px] font-light'>
                                                        Views
                                                    </div>
                                                </div>
                                                <div className='text-[#4B586E] xl:text-[1.667vw] text-[32px] font-semibold'>
                                                    987
                                                </div>
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <div className='h-2 w-2 rounded-full bg-[#982E33]'></div>
                                                    <div className='text-[#4B586E] xl:text-[0.8337vw] text-[16px] font-light'>
                                                        Downloads
                                                    </div>
                                                </div>
                                                <div className='text-[#4B586E] xl:text-[1.667vw] text-[32px] font-semibold'>
                                                    321
                                                </div>
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-2'>
                                                    <div className='h-2 w-2 rounded-full bg-[#D4999C]'></div>
                                                    <div className='text-[#4B586E] xl:text-[0.8337vw] text-[16px] font-light'>
                                                        Prints
                                                    </div>
                                                </div>
                                                <div className='text-[#4B586E] xl:text-[1.667vw] text-[32px] font-semibold'>
                                                    124
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-[18px] xl:pt-[0.938vw] border-b border-[#E5E7EB] '>
                                    <div className='text-[#374151] xl:text-[0.833vw] text-[18px] font-normal'>
                                        Usage Timeline
                                    </div>
                                    <div className='h-[140px] xl:h-[7.771vw]'>
                                        <Linechartwithsymbol
                                            grid={{ left: "35", bottom: "40", top: "15" }}
                                            data={UsageTimelineData}
                                        />
                                    </div>
                                </div>
                                <div className='pt-[18px] xl:pt-[0.938vw] border-b border-[#E5E7EB] '>
                                    <div className='text-[#374151] xl:text-[0.833vw] text-[18px] font-normal'>
                                        Usage by Group
                                    </div>
                                    <div className='h-[140px] xl:h-[7.771vw]'>
                                        <PieChart
                                            legend={{
                                                show: true,
                                                icon: "circle",
                                                top: 'center',
                                                right: '40',
                                                itemWidth: 10,
                                                itemHeight: 10,
                                                orient: 'vertical'
                                            }}
                                            borderRadius={4}
                                            borderWidth={3}
                                            labelShow={false}
                                            radius={["38%", "80%"]}
                                            center={["15%", "50%"]}
                                            color={["#1F3F71", "#768FB5", "#E0A689", "#091221", "#A93439", "#42536D"]}
                                            data={UsageByGroupData}
                                        />
                                    </div>
                                </div>
                                <div className='pt-[18px] xl:pt-[0.938vw]'>
                                    <div className='text-[#374151] xl:text-[0.833vw] text-[18px] font-normal'>
                                        Usage by Device and OS
                                    </div>
                                    <div className='h-[140px] xl:h-[7.771vw]'>
                                  
                                        <Horizontalbarchart
                                            grid={{
                                                top: '5',
                                                left: '3%',
                                                right: '4%',
                                                bottom: '25',
                                                containLabel: true
                                            }}
                                            legend={{
                                                show: true,
                                                bottom: "0",
                                                left: "50",
                                                itemWidth: 10,
                                                itemHeight: 10,
                                                textStyle: {
                                                    color: "#4B586E",
                                                },
                                            }}
                                            data={DeviceData}
                                        />

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
