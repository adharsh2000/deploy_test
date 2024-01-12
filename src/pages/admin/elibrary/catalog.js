import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';
import Rowview from "@/pages/elibrary/elibrarycatalog/rowview";
import Gridview from "@/pages/elibrary/elibrarycatalog/gridview";

export default function Catalog() {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [ingredient, setIngredient] = useState('');
    const [checked, setChecked] = useState(false);
    const [addNewFile, setAddNewFile] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [view, setView] = useState("List")
    const Category = [
        { name: 'Category 1', code: 'C1' },
        { name: 'Category 2', code: 'C2' },
        { name: 'Category 3', code: 'C3' },
        { name: 'Category 4', code: 'C4' },

    ]

    /******** table ***********/
    // Data table 
    const products = [
        {
            image: 'document-text',
            Owner: "Document",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'High School..',
        },
        {
            image: 'gallery',
            Owner: "Gallery",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'Board of Trustees',
        },
        {
            image: 'video-square',
            Owner: "Video",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Shorts',
        },
        {
            image: 'voice-square',
            Owner: "Voice",
            Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Fine Arts',
        },

        {
            image: 'document-text',
            Owner: "Document",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'High School..',
        },
        {
            image: 'gallery',
            Owner: "Gallery",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'Board of Trustees',
        },
        {
            image: 'video-square',
            Owner: "Video",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Shorts',
        },
        {
            image: 'voice-square',
            Owner: "Voice",
            Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Fine Arts',
        },
        {
            image: 'document-text',
            Owner: "Document",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'High School..',
        },
        {
            image: 'gallery',
            Owner: "Gallery",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'Board of Trustees',
        },
        {
            image: 'video-square',
            Owner: "Video",
            Title: 'NEW document regular Upload Test',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Shorts',
        },
        {
            image: 'voice-square',
            Owner: "Voice",
            Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
            ofViews: "50364",
            ofComments: '83676',
            CreateDate: '3/10/2018',
            ReleaseDate: '5/10/2018',
            Category: 'AISD Fine Arts',
        },
    ]

    const actionBodyTemplate = (rowData) => {
        return <><div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
            <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='autinisd-document-download'></i></Link>

            <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='autinisd-star-outline'></i></Link>

            <Link href='' className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='autinisd-eye'></i></Link>
        </div></>;
    };
    /*---Table End--*/

    const TableImage = (rowData) => {
        console.log("rowData.image", rowData.image);
        return (
            <div className="flex gap-2 items-center">
                <img src={`/assets/admin/svg/${rowData.image}.svg`}
                    className='w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]'
                    width={48}
                    height={48}
                    alt='avatar'
                />
                <div>{rowData.Owner}</div>

            </div>
        );
    }
    const CategoryBody = (rowData) => {
        return <>
            <div className='w-auto bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]'>
                {rowData.Category}
            </div>
        </>;
    };

    return (
        <div className='pl-[129px] pr-[32px] xl:pr-[1.667vw]'>
            <div className="grid grid-cols-12 gap-[40px] xl:gap-[2.083vw]">
                <div className="col-span-12 xl:col-span-4 border-[#E5E7EB] bg-[#FFFFFF] rounded-[16px] xl:rounded-[0.833vw] tilesShadow">
                    <div className="p-[24px] xl:p-[1.25vw]">
                        <div className="text-[18px] xl:text-[0.938vw] text-[#374151] font-medium mb-[24px] xl:mb-[1.25vw]">
                            Advanced Search
                        </div>
                        <div className="p-inputgroup custom_search mb-[38px] xl:mb-[1.979vw]">
                            <InputText placeholder="Search" />
                            <span className="p-inputgroup-addon">
                                <i className="autinisd-search-outline"></i>
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mb-[24px] xl:mb-[1.25vw]">
                            <div className="text-[#fff] bg-[#1F2A37] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
                                All
                            </div>
                            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
                                Video
                            </div>
                            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
                                Audio
                            </div>
                            <div className="text-[#4B586E] bg-[#FFFFFF59] border border-[#E5E7EB] font-normal text-[16px] xl:text-[0.833vw] px-[10px] xl:px-[0.521vw] py-[12px] xl:py-[0.625vw] rounded-full cursor-pointer">
                                Adhoc Reporting
                            </div>
                        </div>
                        <div className="customAccordion">
                            <Accordion activeIndex={[0, 1, 2]} multiple={true}>
                                <AccordionTab header="Category">
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Bulletins</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Memorandums</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Handbooks</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Newsletters</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Plans and Resources</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Presentations</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Reference Guides</label>
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab header="Format">
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">PDF</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Image</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">DOC / DOCX</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">XLS/ XLSX</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">ZIP (Compressed files)</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">CSV</label>
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab header="KeyWords">
                                    <div className="m-0 mt-[8px] mb-[24px] xl:mb-[1.25vw]">
                                        <div className="keywordSearch ">
                                            <span className="p-input-icon-left w-full">
                                                <i className="autinisd-search" />
                                                <InputText
                                                    placeholder="Search"
                                                    className="w-full"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="m-0 flex items-center gap-6 xl:gap-[1.25vw] mb-[24px] xl:mb-[1.25vw]">
                                        <div className="flex items-center custRadio">
                                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                                            <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Any Word</label>
                                        </div>

                                        <div className="flex items-center custRadio">
                                            <RadioButton inputId="ingredient2" name="pizza" value="kjjkj" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'kjjkj'} />
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">All Words</label>
                                        </div>

                                        <div className="flex items-center custRadio">
                                            <RadioButton inputId="ingredient3" name="pizza" value="pnnir" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'pnnir'} />
                                            <label htmlFor="ingredient3" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Exact Phase</label>
                                        </div>
                                    </div>
                                    <div className="m-0">

                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient1" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">PDF</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">Image</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">DOC / DOCX</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">XLS/ XLSX</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">ZIP (Compressed files)</label>
                                        </div>
                                    </div>
                                    <div className="m-0">
                                        <div className="flex items-center py-[8px]">
                                            <Checkbox
                                                onChange={e => setChecked(e.checked)}
                                                checked={checked}
                                                className="custumCheckbox"
                                            ></Checkbox>
                                            <label htmlFor="ingredient2" className="ml-2 text-[#53565A] text-[14px] xl:text-[0.729vw] font-medium">CSV</label>
                                        </div>
                                    </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                 
                </div>
                <div className="col-span-12 xl:col-span-8">
                    <div className="py-[8px] mb-[9px]">
                        <div className="flex justify-between items-center gap-2">
                            <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal"><span className="text-[16px] xl:text-[0.833vw] font-semibold">32</span> Files Fold
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="custom_selectdropdown flex gap-1 items-center bg-[#fff] border border-[#BECDE3] rounded-lg py-[8px] xl:py-[0.521vw] px-[10px] xl:px-[0.625vw] xl:text-[#4B586E] text-[0.729vw]">
                                    <span className="w-[80px]">Sort by:</span>  <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={Category} optionLabel="name"
                                        placeholder="Categories" className="w-full" />
                                </div>

                                <div onClick={() => setView('Row')} className={`${view === 'Row' ? "bg-[#1F2A37]" : "border-[#BECDE3] bg-[#FFFFFF]"} flex items-center border rounded-lg font-normal p-[8px] cursor-pointer`}>
                                    <i className={`${view === 'Row' ? 'text-[#fff]' : "text-[#4B586E]"} autinisd-row-vertical text-[24px] xl:text-[1.25vw]`}></i>
                                </div>
                                <div onClick={() => setView('Grid')} className={`${view === 'Grid' ? "bg-[#1F2A37]" : "border-[#BECDE3] bg-[#FFFFFF]"} flex items-center border rounded-lg font-normal p-[8px] cursor-pointer`}>
                                    <i className={`${view === 'Grid' ? 'text-[#fff]' : "text-[#4B586E]"} autinisd-element text-[24px] xl:text-[1.25vw]`}></i>
                                </div>
                                <div onClick={() => setView('List')} className={`${view === 'List' ? "bg-[#1F2A37]" : "border-[#BECDE3] bg-[#FFFFFF]"} flex items-center rounded-lg font-normal py-[12px] px-[8px] cursor-pointer`}>
                                    <i className={`${view === 'List' ? 'text-[#fff]' : "text-[#4B586E]"} autinisd-menu text-[16px] xl:text-[0.833vw]`}></i>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        {view === 'Row' ?
                            <Rowview />
                            : null
                        }
                        {view === 'Grid' ?
                            <Gridview />
                            : null
                        }
                        {view === 'List' ?
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
                                        field="Owner"
                                        header="Type"
                                        sortable
                                        style={{ minWidth: "15rem" }}
                                        body={TableImage}
                                    ></Column>
                                    <Column
                                        field="Title"
                                        header="Document Name"
                                        style={{ minWidth: "26rem" }}
                                    ></Column>
                                    <Column
                                        field="CreateDate"
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
                                        field="Category"
                                        header="Category"
                                        style={{ minWidth: "12rem" }}
                                        body={CategoryBody}
                                    ></Column>
                                    <Column
                                        field="action"
                                        header="Actions"
                                        className='action-shadow-table'
                                        frozen
                                        alignFrozen="right"
                                        align='center'
                                        style={{ minWidth: "10rem" }}
                                        body={actionBodyTemplate}
                                    ></Column>
                                </DataTable>
                            </div>
                            : null
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}