import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
import ExcelDownloader from '../exportn/ExcelDownloader';
import PdfDownloader from '../exportn/PdfDownloader';
import { Dropdown } from "primereact/dropdown";

export default function ChartWrapper(props) {

  const [visible, setVisible] = useState(false);
  const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  const [dropdown2, setDropdown2] = useState(props.dropdown2);
  const [dropdown1, setDropdown1] = useState(props.dropdown1);
  const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon, setExportIcon] = useState(props.ExportIcon);
  const [ViewAll, setViewAll] = useState(props.ViewAll);
  const [graphIcon, setGraphIcon] = useState(props.graphIcon);
  const [downloadIcon, setDownloadIcon] = useState(props.downloadIcon);
  const [maximizeIcon, setMaximizeIcon] = useState(props.maximizeIcon);
  const [tabSection, setTabSection] = useState(props.tabSection);
  const [tabSection01, setTabSection01] = useState(props.tabSection01);
  const [completiontab, setcompletiontab] = useState(props.completiontab);
  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  const handlePrintBots = useReactToPrint({
    content: () => Bots.current,
  });

  const { formatDownloadedData = [], formatFileName = 'Demo', isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
  ];

  return (
    <div>
      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full'>
            <div>
              <div className={`flex items-center justify-between py-[12px] xl:py-[0.625vw] px-[16px] xl:px-[0.833vw] min-h-[55px] dark:bg-[#ffffff05] border-b border-[#BECDE3] ${props.bgcolor}`}>
                <div className=''>
                  <div className={`text-[#374151] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold  ${props.text}`}>
                    <p>{props.title}</p>
                  </div>
                  <div className={`text-[#9CA1AB] text-[14px] xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                </div>
                <div className='space-x-4 optionbtn flex items-center wrapper_icons custm_dropdwon text-[#6C768B] dark:text-[#B3B9C6]]'>
                  {
                    dropdown1 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder1}
                        className="w-full xl:w-[10.417vw] md:h-[40px] custm_dropdown"
                        style={{ border: "1px solid #BECDE3", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    dropdown2 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder2}
                        className="w-full xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    graphIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-graph text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }                  
                  {
                    downloadIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-note-download text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }                  
                  {
                    bulbIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-lightbulb text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }                  
                  {
                    infoIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-info text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }                  
                  {
                    maximizeIcon == true ?
                      <Link href=''
                        className='leading-none'
                        onClick={() => {
                          onToggle();
                        }}
                      >
                        <i onClick={handleClick} className='redingtonHR-info text-[14px] xl:text-[0.94vw] align-top'>Maximize</i></Link>
                      : null
                  }
                  {
                    tabSection == true ?
                      <div className="flex border border-[#D7DAE0] dark:border-[#24262D] rounded-lg">
                          <button onClick={() => props.setTabActiveIndex(0)} className={`${props.tabActiveIndex == 0 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.209vw] text-[14px] xl:text-[0.730vw] rounded-l-lg`}>CRM</button>
                          <button onClick={() => props.setTabActiveIndex(1)} className={`${props.tabActiveIndex == 1 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] text-[14px] xl:text-[0.730vw] rounded-r-lg`}>Index</button>
                      </div>
                      : null
                  }
                   {
                    completiontab == true ?
                      <div className="flex border border-[#D7DAE0] dark:border-[#24262D] rounded-lg">
                          <button onClick={() => props.setTabActiveIndex(0)} className={`${props.tabActiveIndex == 0 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.209vw] text-[14px] xl:text-[0.730vw] rounded-l-lg`}>Count</button>
                          <button onClick={() => props.setTabActiveIndex(1)} className={`${props.tabActiveIndex == 1 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] text-[14px] xl:text-[0.730vw] rounded-r-lg`}>Percentage</button>
                      </div>
                      : null
                  }
                  {
                    ExportIcon == true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className={`autinisd-three-dots-square text-[14px] xl:text-[0.94vw] align-top ${props.text}`} title='Click here for multiple option'></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="dropdownList">
                            <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] xl:text-[0.730vw] text-[#363A44] dark:text-[#B3B9C6]'>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200' href='' onClick={() => { handlePrintBots(); onExit(); }}>
                                <i className='pi pi-print '></i>
                                <span>Print to pdf</span>
                              </button>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                              <i className='pi pi-download '></i>
                              <CSVLink {...csvReport}>Export to CSV</CSVLink>
                              </button>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={title}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }

                  {
                    tabSection01 == true ?
                      <div className="flex border border-[#D7DAE0] rounded-lg dark:border-[#3D434F]">
                          <button onClick={() => props.setTabActiveIndex(0)} className={`${props.tabActiveIndex == 0 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F]'} dark:text-white px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.209vw] text-[14px] xl:text-[0.730vw] rounded-l-lg`}>Top 10</button>
                          <button onClick={() => props.setTabActiveIndex(1)} className={`${props.tabActiveIndex == 1 ? 'bg-[#4FB155] text-[white]' : 'text-[#3D434F]'} dark:text-white px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] text-[14px] xl:text-[0.730vw] rounded-r-lg`}>Bottom 10</button>
                      </div>
                      : null
                  }

                  {
                    ViewAll == true ?
                      <div>
                        <Link href={''} onClick={()=>{props.setPerformancedetailedview(true)}}  className="text-[#4FB155] xl:text-[0.729vw] text-xs font-normal xl:leading-[0.938vw] leading-4 border border-[#4FB155] xl:rounded-[0.208vw] rounded xl:p-[0.417vw] p-1.5 flex items-center xl:gap-[0.417vw] gap-1.5 hover:bg-[#4FB155] hover:text-white transition ease-in-out delay-150"><span>View All</span><i className="redington-pd-arrow-right-line"></i></Link>
                      </div>
                      : null
                  }
                </div>
              </div>
              <div ref={Bots}>
                {props.data}
              </div>
            </div>
          </div>
        )}
      </ReactFullscreen>
    </div>
  )
}