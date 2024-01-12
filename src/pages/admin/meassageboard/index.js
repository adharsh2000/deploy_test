import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import AdminLayout from "@/components/adminlayout/layout";
import EditMessageBoard from "@/components/admin/popup/editmessageboard";
import AddMessages from "@/components/admin/popup/addmessages";
import RemoveUser from "@/components/admin/popup/removeUser";
import axios from "axios";
import fetchAPI from "@/service/api/fetchAPI";
import adminFetchAPI from "@/service/api/adminFetchApi";
import { Paginator } from "primereact/paginator";
import ReactPaginate from "react-paginate";
import CustomPagination from "@/components/admin/custompaginator/CustomPagination";

export default function Index() {

  const url = "http://44.213.218.195:8080"

  let tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IlNvbmFscmFqICIsImxhc3ROYW1lIjoiS3VtYmhhciIsImVtYWlsIjoic29uYWxyYWpAZWRicml4LmNvbSIsInByb2ZpbGVfcGljIjoiMTcwNDI3MDEyMDE3NC5wbmciLCJkZXNpZ25hdGlvbiI6bnVsbCwiY3JlYXRlZF9ieSI6MSwidXNlcl9pZCI6MX0sImlhdCI6MTcwNDY5MTY0MSwiZXhwIjoxNzA0Nzc4MDQxfQ.bFNmvWxWD-e4wYAAfUoCbraRo866vTESg9NJkDa-x_c"


  const [selectedCategory, setSelectedCategory] = useState("");

  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [checked, setChecked] = useState(false);
  const [editMessageBoard, setEditMessageBoard] = useState(false);
  const [addMessageBoard, setAddMessageBoardMessageBoard] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [totalRecords, setTotalRecords] = useState(0)
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [first, setFirst] = useState(0);
  const [categories, setCategories] = useState([]);
  const [lazyState, setlazyState] = useState({
    sortField: "",
    sortOrder: -1,
  });
  const [postId,setPostId]=useState(null)
  const [sortby, setSortby] = useState('Date')

  const Category = [
    { name: "Category 1", code: "C1" },
    { name: "Category 2", code: "C2" },
    { name: "Category 3", code: "C3" },
    { name: "Category 4", code: "C4" },
  ];
  // const categories = [
  //   { name: "Option 1", key: "A" },
  //   { name: "Option 2", key: "M" },
  //   { name: "Option 3", key: "P" },
  //   { name: "Option 4", key: "R" },
  //   { name: "Option 5", key: "R" },
  // ];
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

  // console.log('url', process.env.BASE_URL)
  const fetchPostDetails = async (id) => {
    setLoading(true)
    let data = {
      "userId": sessionStorage.getItem('userId'),
      "commentOrder": sortby
    }
    await adminFetchAPI(`/messageboard/posts/postdetails/${id || postId}`, 'POST', data, 'application/json')
      .then((data) => {
        console.log(data)
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  const fetchCategories = async () => {
    try {
      const response = await adminFetchAPI(`/messageboard/topiccategory/list`, 'POST', {}, 'application/json');
      console.log(response)
      setCategories(response?.rows);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchPostDetails();
  },[sortby])

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
          <Link
            href=""
            onClick={() => {
              console.log("id of post", rowData?.post_id);
              setEditMessageBoard(true);
              setId(rowData?.topic_id)
              setPostId(rowData?.post_id)
              fetchPostDetails(rowData?.post_id);
            }}
            className="bg-[#fff] p-1  h-8 w-8 rounded-full"
          >
            {" "}
            <i className="autinisd-edit"></i>
          </Link>
          <Link
            href=""
            onClick={() => {
              setDeleteUser(true);
              setId(rowData?.topic_id);
            }}
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

  // const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  // const onCategoryChange = (e) => {
  //   let _selectedCategories = [...selectedCategories];

  //   if (e.checked) _selectedCategories.push(e.value);
  //   else
  //     _selectedCategories = _selectedCategories.filter(
  //       (category) => category.key !== e.value.key
  //     );

  //   setSelectedCategories(_selectedCategories);
  // };

  const TableImage = (rowData) => {
    // console.log("rowData.image", rowData?.user?.profile_pic);
    return (
      <div className="flex gap-2 items-center">
        <img
          src={rowData?.user?.profile_pic}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
        <div>{`${rowData?.user?.firstName} ${rowData?.user?.lastName}`}</div>
      </div>
    );
  };
  const CategoryBody = (rowData) => {
    return (
      <>
        <div className="w-auto bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]">
          {rowData?.topicCategory?.topic_category}
        </div>
      </>
    );
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  /******** table ***********/

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const fetchPost = async () => {
    setPostLoading(true);
    const requestedData = {
      "page": page,
      "limit": rows,
      "search": search,
      "category_id": selectedCategory,
      "sortColumn": lazyState?.sortField, //post,post_id,firstName,published_Date,createdAt
      "sortOrder": lazyState?.sortOrder
    };

    try {
      // const response = await axios.post(`${url}/messageboard/posts/list`, requestedData, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${tempToken}`,
      //   },
      // });
      const response = await adminFetchAPI(`/messageboard/posts/list`, 'POST', requestedData, 'application/json')
      setPosts(response?.rows);
      setTotalRecords(response?.count)
      setPostLoading(false);
    } catch (error) {
      setPostLoading(false);
      console.log(error);
    }
  };

  const debouncedFetchData = debounce(fetchPost, 500);

  useEffect(() => {
    debouncedFetchData();
    fetchCategories();
  }, [search, rows, page, selectedCategory, lazyState]);

  const handlePageChange = (e) => {
    // console.log(e)
    setRows(e.rows)
    setPage(e.page + 1)
    setFirst(e.first);
  }

  const handlePageClick = (selected) => {
    const newPage = selected + 1; // adjust to start from 1
    setPage(newPage);
    setFirst(selected * rows);
    // fetchPost();
  };

  const handleSort = (e) => {
    console.log(e)
    setlazyState((prevState) => ({
      ...prevState,
      sortField: e.sortField,
      sortOrder: lazyState?.sortOrder === -1 ? 1 : -1,
  }));
  }

//   const onSort = (event) => {
//     console.log(event);
//     setlazyState((prevState) => ({
//         ...prevState,
//         sortField: event.sortField,
//         sortOrder: lazyState?.sortOrder === -1 ? 1 : -1,
//     }));
// };


  return (
    <>
      <AdminLayout pageTitle="Message Board" pageName="Message Board Admin">
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="flex xl:gap-[1.25vw] gap-[20px] ">
              <div className="custom_selectdropdown flex gap-1 items-center bg-[#fff] border border-[#BECDE3] rounded-lg py-[8px] xl:py-[0.521vw] pl-[10px] xl:pl-[0.625vw] xl:text-[#4B586E] text-[0.729vw]">
                {/* {" "} */}
                <Dropdown
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.value)}
                  options={[{ topic_category: "All" }, ...(categories || [])]}
                  optionLabel="topic_category"
                  optionValue="topic_category_id"
                  placeholder="Sort by: Categories"
                  className="w-full"
                />
              </div>
              <div className="custom_search_input">
                <span className="p-input-icon-right">
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Quick Search"
                    className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px] h-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </span>
              </div>
            </div>

            <div>
              <Link
                href=""
                onClick={() => setAddMessageBoardMessageBoard(true)}
                className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
              >
                New Post
              </Link>
            </div>
          </div>

          <div className="bg-white  xl:mt-[1.406vw] mt-[24px] xl:p-[0.833vw] p-[20px] rounded-md ">
            <DataTable
              value={posts}
              totalRecords={totalRecords}
              className="custTable tableCust custCheckBox"
              scrollable
              // first={1}
              onPage={handlePageChange}
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              // paginator
              loading={postLoading}
              paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
              currentPageReportTemplate={`Rows per page  {first}-{last} of ${totalRecords}`}
              rowsPerPageOptions={[5, 10, 25, 50]}
              rows={rows}
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
              // sortMode="single"

              onSort={handleSort}
              sortField={lazyState?.sortField}
              sortOrder={lazyState?.sortOrder}
            >
              {/* <Column
                selectionMode="multiple"
                headerStyle={{ minWidth: "1rem" }}
              ></Column> */}

              <Column
                field="Owner"
                header="Owner"
                sortable
                sortField="firstName"
                style={{ minWidth: "20rem" }}
                body={TableImage}
              ></Column>
              <Column
                field="post"
                header="Title"
                sortable
                sortField="post"
                style={{ minWidth: "26rem" }}
              ></Column>

              <Column
                field="viewCount"
                header="# of Views"
                showFilterMatchModes={false}
                style={{ minWidth: "10rem" }}
                sortable
              ></Column>
              <Column
                field="commentCount"
                header="# of Comments"
                style={{ minWidth: "10rem" }}
                sortable
              ></Column>
              <Column
                field="CreateDate"
                header="Create Date"
                style={{ minWidth: "12rem" }}
                sortable
                sortField="createdAt"
                body={(rowData) => formatDate(rowData.createdAt)}
              ></Column>
              <Column
                field="published_Date"
                header="Release Date"
                style={{ minWidth: "12rem" }}
                sortable
                sortField="published_Date"
                body={(rowData) => formatDate(rowData.createdAt)}
              ></Column>
              <Column
                field="topicCategory"
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
            {/* <Paginator
              className="mt-4 custTable tableCust custCheckBox"
              // template={`FirstPageLink PrevPageLink PageLinks ${totalRecords > 1 && 'CurrentPageReport'} NextPageLink LastPageLink`}
              rowsPerPageOptions={[5, 10, 25, 50]}
              first={first}
              rows={rows}
              currentPage={page}
              totalRecords={totalRecords}
              onPageChange={handlePageChange}
            /> */}
          </div>
          {/* <div className="mt-2 text-sm text-gray-500 inline">
              Showing {Math.min(first + 1, totalRecords)} to {Math.min(first + rows, totalRecords)} of {totalRecords} records
            </div>
            <ReactPaginate
              nextLabel=">"
              previousLabel="<"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination-react"
              activeClassName="active"
              onPageChange={(e) => handlePageClick(e.selected)}
              pageCount={Math.ceil(totalRecords / rows)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
            /> */}
          <CustomPagination first={first} rows={rows} totalRecords={totalRecords} handlePageClick={handlePageClick} />
        </div>
        <EditMessageBoard
          visible={editMessageBoard}
          onHides={() => setEditMessageBoard(false)}
          id={id}
          setId={setId}
          post={post}
          loading={loading}
          fetchPost={fetchPost}
          setEditMessageBoard={setEditMessageBoard}
          setDeleteUser={setDeleteUser}
          sortby={sortby}
          setSortby={setSortby}
        />

        <AddMessages
          visible={addMessageBoard}
          onHides={() => setAddMessageBoardMessageBoard(false)}
          setLoading={setLoading}
          fetchPost={fetchPost}
          setAddMessageBoardMessageBoard={setAddMessageBoardMessageBoard}
        />
      </AdminLayout>
      <RemoveUser
        visible={deleteUser}
        onHides={() => setDeleteUser(false)}
        message="Are you sure you want to delete this Post?"
        icon="autinisd-info-circle-fill"
        url={'/messageboard/posts/'}
        id={id}
        setId={setId}
        fetchPost={fetchPost}
        setEditMessageBoard={setEditMessageBoard}
      />
    </>
  );
}
