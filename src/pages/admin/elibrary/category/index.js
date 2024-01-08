import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import AdminLayout from "@/components/adminlayout/layout";
import EditMessageBoard from "@/components/admin/popup/editmessageboard";
import AddMessages from "@/components/admin/popup/addmessages";
import NewCategory from "@/components/admin/popup/newCategory";
import Deletesuccesfull from "@/components/admin/popup/deletesuccesfull";
// import Deletesuccesfull from "@/components/admin/popup/deletesuccesfull";

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [checked, setChecked] = useState(false);
  const [editMessageBoard, setEditMessageBoard] = useState(false);
  const [addNewCategory, setAddNewCategory] = useState(false);
  const [visible, setVisible] = useState(false);
  //   const Category = [
  //     { name: "Category 1", code: "C1" },
  //     { name: "Category 2", code: "C2" },
  //     { name: "Category 3", code: "C3" },
  //     { name: "Category 4", code: "C4" },
  //   ];
  //   const categories = [
  //     { name: "Option 1", key: "A" },
  //     { name: "Option 2", key: "M" },
  //     { name: "Option 3", key: "P" },
  //     { name: "Option 4", key: "R" },
  //     { name: "Option 5", key: "R" },
  //   ];
  /******** table ***********/
  // Data table
  const products = [
    {
      image: "Avatar1",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "High School..",
    },
    {
      image: "Avatar2",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Board of Trustees",
    },
    {
      image: "Avatar3",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "AISD Shorts",
    },
    {
      image: "Avatar4",
      Owner: "Arlene McCoy",
      Title: "BUL-089013.0 NEW document regular Upload Test.PDF",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "AISD Fine Arts",
    },

    {
      image: "Avatar1",
      Owner: "Kathryn Murphy",
      Title: "NNEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "High School..",
    },
    {
      image: "Avatar4",
      Owner: "Kathryn Murphy",
      Title: "BUL-089013.0 NEW document regular Upload Test.PDF",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Breaking Down",
    },
    {
      image: "Avatar1",
      Owner: "Kathryn Murphy",
      Title: "BUL-089013.0 NEW document regular Upload Test.PDF",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Breaking Down ",
    },
    {
      image: "Avatar3",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Breaking Down ",
    },
    {
      image: "Avatar3",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Breaking Down ",
    },
    {
      image: "Avatar3",
      Owner: "Jerome Bell",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Sports Scene",
    },
    {
      image: "Avatar4",
      Owner: "Kathryn Murphy",
      Title: "NEW document regular Upload Test",
      ofViews: "50364",
      ofComments: "83676",
      CreateDate: "3/10/2018",
      ReleaseDate: "5/10/2018",
      Category: "Showcases Events",
    },
  ];

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
          <Link
            href=""
            onClick={() => setAddNewCategory(true)}
            className="bg-[#fff] p-1  h-8 w-8 rounded-full"
          >
            {" "}
            <i className="autinisd-edit"></i>
          </Link>
          <Link
            href=""
            onClick={() => setVisible(true)}
            className="bg-[#fff] p-1 rounded-full h-8 w-8"
          >
            {" "}
            <i className="autinisd-trash"></i>
          </Link>
        </div>
      </>
    );
  };
  /*---Table End--*/

  //   const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  const TableImage = (rowData) => {
    console.log("rowData.image", rowData.image);
    return (
      <div className="flex gap-2 items-center">
        <img
          src={`/assets/admin/${rowData.image}.svg`}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
        <div>{rowData.Owner}</div>
      </div>
    );
  };
  const CategoryBody = (rowData) => {
    return (
      <>
        <div className="w-auto bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]">
          {rowData.Category}
        </div>
      </>
    );
  };
  /******** table ***********/

  return (
    <>
      <AdminLayout pageTitle="Manage Categories">
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="custom_search_input">
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Quick Search"
                  className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px] "
                />
              </span>
            </div>

            <div className="flex items-center  gap-4">
              <Link
                href={"/admin/elibrary"}
                className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
              >
                Back
              </Link>
              <Link
                href=""
                onClick={() => setAddNewCategory(true)}
                className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
              >
                New Category
              </Link>
            </div>
          </div>

          <div className="bg-white  xl:mt-[0.938vw] mt-[18px] rounded-md ">
            <DataTable
              value={products}
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
              selectionMode={rowClick ? null : "checkbox"}
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
                headerStyle={{ minWidth: "1rem" }}
              ></Column>
              {/* <Column
                field="id"
                header="Id"
                style={{ minWidth: "2.5rem" }}
              ></Column> */}
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
                className="action-shadow-table"
                frozen
                alignFrozen="right"
                align="center"
                style={{ minWidth: "10rem" }}
                body={actionBodyTemplate}
              ></Column>
            </DataTable>
          </div>
        </div>

        <NewCategory
          visible={addNewCategory}
          onHides={() => setAddNewCategory(false)}
        />
        <Deletesuccesfull
          visible={visible}
          onHides={() => setVisible(false)}
          message="Deleted successfully "
        />
      </AdminLayout>
    </>
  );
}
