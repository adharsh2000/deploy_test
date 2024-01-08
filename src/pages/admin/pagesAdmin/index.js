import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from "primereact/checkbox";
import AdminLayout from "@/components/adminlayout/layout";
import EditMessageBoard from "@/components/admin/popup/editmessageboard";
import RemoveUser from "@/components/admin/popup/removeUser";
import { Dialog } from 'primereact/dialog';


export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  
  const [editMessageBoard, setEditMessageBoard] = useState(false);
 
  const [deleteUser, setDeleteUser] = useState(false);

  const [addNewPage, setAddNewPage] = useState(false);

  const Category = [
    { name: 'Category 1', code: 'C1' },
    { name: 'Category 2', code: 'C2' },
    { name: 'Category 3', code: 'C3' },
    { name: 'Category 4', code: 'C4' },

  ]
  const categories = [
    { name: 'Option 1', key: 'A' },
    { name: 'Option 2', key: 'M' },
    { name: 'Option 3', key: 'P' },
    { name: 'Option 4', key: 'R' },
    { name: 'Option 5', key: 'R' }
  ];
  /******** table ***********/
  // Data table 
  const products = [
    {
      image: 'Avatar1',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'High School..',
    },
    {
      image: 'Avatar2',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Board of Trustees',
    },
    {
      image: 'Avatar3',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'AISD Shorts',
    },
    {
      image: 'Avatar4',
      Owner: "Arlene McCoy",
      Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'AISD Fine Arts',
    },

    {
      image: 'Avatar1',
      Owner: "Kathryn Murphy",
      Title: 'NNEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'High School..',
    },
    {
      image: 'Avatar4',
      Owner: "Kathryn Murphy",
      Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Breaking Down',
    },
    {
      image: 'Avatar1',
      Owner: "Kathryn Murphy",
      Title: 'BUL-089013.0 NEW document regular Upload Test.PDF',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Breaking Down ',
    },
    {
      image: 'Avatar3',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Breaking Down ',
    },
    {
      image: 'Avatar3',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Breaking Down ',
    },
    {
      image: 'Avatar3',
      Owner: "Jerome Bell",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Sports Scene',
    },
    {
      image: 'Avatar4',
      Owner: "Kathryn Murphy",
      Title: 'NEW document regular Upload Test',
      ofViews: "50364",
      ofComments: '83676',
      CreateDate: '3/10/2018',
      ReleaseDate: '5/10/2018',
      Category: 'Showcases Events',
    },
  ]



  const actionBodyTemplate = (rowData) => {
    return <><div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">

      <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='autinisd-edit'></i></Link>
      <Link href='' onClick={() => setDeleteUser(true)} className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='autinisd-trash'></i></Link>


    </div></>;
  };
  /*---Table End--*/




  const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked)
      _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

    setSelectedCategories(_selectedCategories);
  };

  const TableImage = (rowData) => {
    console.log("rowData.image", rowData.image);
    return (
      <div className="flex gap-2 items-center">
        <img src={`/assets/admin/${rowData.image}.svg`}
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
  /******** table ***********/


  return (
    <>
      <AdminLayout 
      pageTitle="Pages Admin "
      pageName="Create a new page">
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="flex xl:gap-[1.25vw] gap-[20px] ">
              <div className="custom_selectdropdown flex gap-1 items-center bg-[#fff] border border-[#BECDE3] rounded-lg py-[8px] xl:py-[0.521vw] px-[10px] xl:px-[0.625vw] xl:text-[#4B586E] text-[0.729vw]">
                <span className="w-[80px]">Sort by:</span>  <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={Category} optionLabel="name"
                  placeholder="Categories" className="w-full" />
              </div>
              <div className="custom_search_input">
                <span className="p-input-icon-right">
                  <i className="pi pi-search" />
                  <InputText placeholder="Quick Search" className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]" />
                </span>
              </div>
            </div>

            <div>
              <Link href="/admin/pagesadmin/newpage"  className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5">
                New Page
              </Link>
            </div>

          </div>

          <div className="bg-white  xl:mt-[1.406vw] mt-[24px] xl:p-[0.833vw] p-[20px] rounded-md ">

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
                selectionMode="multiple"
                headerStyle={{ minWidth: '1rem' }}
              ></Column>

              <Column
                field="Owner"
                header="Owner"
                sortable
                style={{ minWidth: "20rem" }}
                body={TableImage}
              ></Column>
              <Column
                field="Title"
                header="Title"
                style={{ minWidth: "26rem" }}
              ></Column>

              
              <Column
                field="CreateDate"
                header="Create Date"
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

          <RemoveUser
             visible={deleteUser}
             onHides={() => setDeleteUser(false)}
             message='Are you sure you want to delete this User?'
             icon='autinisd-info-circle-fill'
            />
        
        </div>
        {/* <EditMessageBoard
          visible={editMessageBoard}
          onHides={() => setEditMessageBoard(false)}
        /> */}

        {/* <AddMessages
          visible={addMessageBoard}
          onHides={() => setAddMessageBoardMessageBoard(false)}
        /> */}

      </AdminLayout>
    </>
  );
}

