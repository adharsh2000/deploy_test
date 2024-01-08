import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';

export default function Index() {
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
            <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='austin-file-download'></i></Link>

            <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='austin-star-outline'></i></Link>

            <Link href='' className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='austin-eye'></i></Link>
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
            <div className='w-auto bg-[#1F3F71] rounded text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]'>
                {rowData.Category}
            </div>
        </>;
    };

    return (
        <>            
          <div>
              {view === 'Row' ?
                  <div>Row View</div>
                  : null
              }
              {view === 'Grid' ?
                  <div>Grid View</div>
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
                              style={{ minWidth: "5rem" }}
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
                              style={{ minWidth: "8rem" }}                              
                          ></Column>
                          <Column
                              field="ReleaseDate"
                              header="Release Date"
                              style={{ minWidth: "8rem" }}                              
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
        </>
    );
}