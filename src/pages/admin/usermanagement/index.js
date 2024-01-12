import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AdminLayout from '@/components/adminlayout/layout';
import FilterComponent from "@/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import Addnewevent from "@/components/popup/addnewevent";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AddNewUser from "@/components/admin/popup/addNewUser";
import RemoveUser from "@/components/admin/popup/removeUser";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import adminFetchAPI from "@/service/api/adminFetchApi";
import { Paginator } from "primereact/paginator";
import PublishPost from "@/components/admin/popup/publishPost";
import { Toast } from "primereact/toast";
import CustomPagination from "@/components/admin/custompaginator/CustomPagination";

export default function Index() {

    const [Addneweventpopup, setAddneweventpopup] = useState(false);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [users, setUsers] = useState([]);
    const op = useRef(null);
    const toast = useRef(null);
    const [id, setId] = useState(null);
    const [addNewUser, setAddNewUser] = useState(false);
    const [removeUser, setRemoveUser] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const [block, setBlock] = useState(null);
    const [selectedYear, setSelectedYear] = useState("")

    const [search, setSearch] = useState("");
    const [totalRecords, setTotalRecords] = useState(0)
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState(10);
    const [first, setFirst] = useState(0);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [isBlocked,setIsBlocked] = useState(null)

    const TableImage = (rowData) => {
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

    const deleteeUser = async () => {
        console.log("get id..", id);
        try {
            const response = await adminFetchAPI(`/user/${id}`, "DELETE", {}, "application/json");
            setDeleteUser(false)
            fetchUsers();
            setId(null);
            toast.current.show({ severity: 'success', detail: response?.message, life: 3000 });
        } catch (error) {
            console.log(error)
            toast.current.show({ severity: 'success', detail: 'Something went wrong...', life: 3000 });
        }
    }

    const blockUnblockUser = async () => {
        try {
            let data = block === 0 ? {
                "isBlocked": 1
            } : {
                "isBlocked": 0
            }
            const response = await adminFetchAPI(`/user/blockUser/${id}`, "PUT", data, "application/json");
            console.log(response)
            setRemoveUser(false)
            fetchUsers();
            setId(null);
            setBlock(null);
            toast.current.show({ severity: 'success', detail: response?.message, life: 3000 });
        } catch (error) {
            console.log(error)
            toast.current.show({ severity: 'success', detail: 'Something went wrong...', life: 3000 });
        }
    }

    // useEffect(() => {
    //     if (deleteUser && id !== null) {
    //       console.log('User ID to delete:', id);
    //       // Add any logic or function call related to delete operation here
    //     }
    //   }, [deleteUser, id]);

    // const actionBodyTemplate = (rowData) => {
    //     // console.log('just id hh', rowData)
    //     return <><div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
    //         <div onClick={() => { setRemoveUser(true); }} className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='autinisd-user-delete' ></i></div>
    //         <div className="card flex justify-content-center">
    //             <div className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='autinisd-three-dots-square' onClick={(e) => op.current.toggle(e)}></i></div>
    //             <OverlayPanel ref={op}>
    //                 <div className="cursor-pointer flex flex-col gap-1 justify-center items-center">
    //                     <div className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]">Edit</div>
    //                     <div onClick={(e) =>{e.stopPropagation(); getId(rowData)}} className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]">Delete</div>
    //                 </div>
    //             </OverlayPanel>
    //         </div>
    //     </div></>;
    // };

    const actionBodyTemplate = (rowData) => {
        const opRef = useRef(null);

        const handleEditClick = (e) => {
            e.stopPropagation();
            setEdit(true);
            setAddNewUser(true);
            // console.log("ididid",rowData?.user_id)
            setId(rowData?.user_id)
        };

        const handleDeleteClick = (e) => {
            e.stopPropagation();
            setDeleteUser(true);
            setId(rowData?.user_id)
            // deleteeUser(rowData?.user_id); 
        };

        const handleBlockUnblock = (e) => {
            setRemoveUser(true);
            e.stopPropagation();
            setId(rowData?.user_id);
            console.log("block", rowData)
            setIsBlocked(rowData?.isBlocked)
            setBlock(rowData?.isBlocked);
        }

        return (
            <>
                <div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
                    <div onClick={handleBlockUnblock} className="bg-[#fff] p-1 h-8 w-8 rounded-full">
                        <i className='autinisd-user-delete'></i>
                    </div>
                    <div className="card flex justify-content-center">
                        <div className="bg-[#fff] p-1 rounded-full h-8 w-8">
                            <i className='autinisd-three-dots-square' onClick={(e) => opRef.current.toggle(e)}></i>
                        </div>
                        <OverlayPanel ref={opRef}>
                            <div className="cursor-pointer flex flex-col gap-1 justify-center items-center">
                                <div
                                    className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]"
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </div>
                                <div
                                    className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]"
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </div>
                            </div>
                        </OverlayPanel>
                    </div>
                </div>
            </>
        );
    };


    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObject.toLocaleDateString('en-US', options);
    };

    const PreObsStatusData = (rowData) => {
        // console.log("row", rowData)
        if (rowData.status === "confirmed") {
            return (
                <>
                    <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#046C4E]  bg-[#D8E7E1] border py-[2px] xl:py-[0.104vw] px-[8px] xl:px-[0.417vw] rounded gap-2">

                        <div>{rowData.status}</div>
                    </div>
                </>
            );
        } else if (rowData.status === "unconfirmed") {
            return (
                <>
                    <div className="flex items-center text-[12px] xl:text-[0.625vw] font-medium text-[#C81E1E] bg-[#FDE8E8] py-[2px] xl:py-[0.104vw] px-[8px] xl:px-[0.417vw] rounded gap-2">

                        <div>{rowData.status}</div>
                    </div>
                </>
            );
        } else {
            return <></>;
        }
    };
    // const statusbg = (rowData) => {
    //     return <><div>

    //             <div className='inline-flex items-center rounded-full border border-[#18B557] bg-[#DEF7EC] text-[#18B557] text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]'><i className='pi pi-circle-fill mr-1' style={{ color: '#18B557', fontSize: '8px' }}></i> Accepted</div>

    //         </div></>;
    // };

    const products = [
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Unconfirmed',
        },

        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner: 'Kathryn Murphy',
            email: 'felicia.reid@example.com',
            Created: 'October 25, 2019',
            status: 'Confirmed',
        },
    ]

    const fetchUsers = async () => {
        try {
            setLoading(true)
            let data = {
                "page": page,
                "limit": rows,
                "search": search,
                "period": selectedYear
            }
            const response = await adminFetchAPI('/user/list', "POST", data, "application/json");
            const users = response?.allUser?.rows;
            const count = response?.allUser?.count;
            setTotalRecords(count)
            const updatedUsers = users?.map(item => {
                const name = `${item.firstName} ${item.lastName}`;

                return {
                    ...item,
                    name: name
                };
            }) || [];
            setUsers(updatedUsers);
            // console.log(updatedUsers);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [search, rows, page, selectedYear])

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


    return (
        <>
            <AdminLayout
                pageTitle="Manage Users"
                pageName="Users">
                <div className="xl:pt-[0.833vw] pt-4">
                    <div className="custom_search_input">
                        <span className="p-input-icon-right">
                            <i className="pi pi-search" />
                            <InputText onChange={(e) => setSearch(e.target.value)} placeholder="Quick Search" className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px] h-10" />
                        </span>
                    </div>
                    <div className="xl:pt-[0.833vw] pt-4">
                        <FilterComponent selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                    </div>
                    <div className="xl:mt-[2.083vw] mt-[35px]">
                        <div className="flex items-center justify-between">
                            <div className="text-[1.563vw] text-[#374151] font-bold xl:leading-[1.771vw] leading-9">Users</div>
                            <div>
                                <div><Link href={''} className="text-[#FFFFFF] xl:text-[0.729vw] text-sm font-normal xl:leading-[1.250vw] leading-6 -tracking-[-0.28px] inline-block bg-[#A93439] rounded-lg xl:py-[0.625vw] py-3 xl:px-[1.875vw] px-9" onClick={() => setAddNewUser(true)}>Add New User</Link></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white  xl:mt-[1.406vw] mt-[24px] xl:p-[0.833vw] p-[20px] rounded-md ">

                    <DataTable value={users}
                        className="custTable tableCust custCheckBox"
                        scrollable
                        responsiveLayout="scroll"
                        totalRecords={totalRecords}
                        style={{ width: "100%" }}
                        // paginator
                        // paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                        // currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                        // rowsPerPageOptions={[5, 10, 25, 50]}
                        rows={rows}
                        loading={loading}
                        // onSelectionChange={(e) => setSelectedProducts(e.value)}
                        selectionMode={rowClick ? null : 'checkbox'}
                        selection={selectedProducts}
                        filters={filters}
                    // globalFilterFields={[
                    //     "Groupname",
                    //     "Groupdescription",
                    //     "representative.name",
                    //     "Groupcreateddate",
                    //     "Lastmodifieddate",
                    // ]}
                    // dataKey="id"
                    >

                        <Column
                            selectionMode="multiple"
                            headerStyle={{ minWidth: '1rem' }}
                        ></Column>

                        <Column
                            field="role.role"
                            header="Role"
                            style={{ minWidth: "8rem" }}

                        ></Column>

                        <Column
                            field="userCode"
                            header="ID"
                            style={{ minWidth: "8rem" }}

                        ></Column>
                        <Column
                            field="name"
                            header="Name"
                            style={{ minWidth: "20rem" }}
                        // body={TableImage}
                        ></Column>
                        <Column
                            field="email"
                            header="Email"
                            style={{ minWidth: "26rem" }}
                        ></Column>

                        <Column
                            field="createdAt"
                            header="Created"
                            style={{ minWidth: "12rem" }}
                            body={(rowData) => formatDate(rowData.createdAt)}
                        ></Column>

                        <Column
                            field="status"
                            header="Status"
                            frozen
                            alignFrozen="right"
                            style={{ minWidth: "10rem" }}
                            body={(rowData) => PreObsStatusData(rowData)}
                        ></Column>

                        <Column
                            field="action"
                            header="Actions"
                            // className='action-shadow-table'
                            frozen
                            alignFrozen="right"
                            align='center'
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
                    />
                    <div className="mt-2 text-sm text-gray-500 inline">
                        Showing {Math.min(first + 1, totalRecords)} to {Math.min(first + rows, totalRecords)} of {totalRecords} records
                    </div> */}
                </div>
                <CustomPagination first={first} rows={rows} totalRecords={totalRecords} handlePageClick={handlePageClick} />


                <Addnewevent
                    visible={Addneweventpopup}
                    onHides={() => setAddneweventpopup(false)}
                />

                <AddNewUser
                    visible={addNewUser}
                    onHides={() => setAddNewUser(false)}
                    setAddNewUser={setAddNewUser}
                    edit={edit}
                    setEdit={setEdit}
                    id={id}
                    setId={setId}
                    fetchUsers={fetchUsers}
                />

                <PublishPost
                    visible={removeUser}
                    onHides={() => setRemoveUser(false)}
                    message={`Are you sure you want to ${isBlocked === 1 ? "unblock" : "block" } this User?`}
                    icon='autinisd-user-delete'
                    action={blockUnblockUser}
                />

                <PublishPost
                    visible={deleteUser}
                    onHides={() => setDeleteUser(false)}
                    message='Are you sure you want to delete this User?'
                    icon='autinisd-info-circle-fill'
                    action={deleteeUser}
                />

            </AdminLayout>
            <Toast ref={toast}></Toast>
        </>
    );
}

