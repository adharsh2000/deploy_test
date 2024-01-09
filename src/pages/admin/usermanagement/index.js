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

export default function Index() {

    const [Addneweventpopup, setAddneweventpopup] = useState(false);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [users,setUsers] = useState([]);
    const op = useRef(null);

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

    const actionBodyTemplate = (rowData) => {
        return <><div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
            <div onClick={() => setRemoveUser(true)} className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='autinisd-user-delete' ></i></div>
            <div className="card flex justify-content-center">
            <div  className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='autinisd-three-dots-square' onClick={(e) => op.current.toggle(e)}></i></div>
            <OverlayPanel ref={op}>
                <div className="cursor-pointer flex flex-col gap-1 justify-center items-center">
                <div className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]">Edit</div>
                <div  onClick={() => setDeleteUser(true)}  className="cursor-pointer p-[4px] xl:p-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium text-[#4B586E]">Delete</div>
                </div>
                
            </OverlayPanel>
        </div>
        
            


        </div></>;
    };

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObject.toLocaleDateString('en-US', options);
      };

    const PreObsStatusData = (rowData) => {
        console.log("row",rowData)
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
    const [addNewUser, setAddNewUser] = useState(false);
    const [removeUser, setRemoveUser] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);

    const products = [
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Confirmed',   
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019',
            status: 'Unconfirmed',   
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Unconfirmed',
        },

        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019',
            status: 'Confirmed', 
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Unconfirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status: 'Confirmed',
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019',
            status: 'Unconfirmed', 
        },
        {
            Role: 'Admin',
            id: '397485',
            image: 'Avatar1',
            Owner:'Kathryn Murphy',
            email:'felicia.reid@example.com',
            Created:'October 25, 2019', 
            status:'Confirmed',
        },
    ]

    const fetchUsers = async () => {
        try {
            let data = {
                "page":1,
                "limit" : 10,
                "search":"",
                "period":"2024-2025"
            }
            const response = await adminFetchAPI('/user/list', "POST", data ,"application/json");
            const users = response?.allUser?.rows;
            const updatedUsers = users?.map(item => {
                const name = `${item.firstName} ${item.lastName}`;
              
                return {
                  ...item,
                  name: name
                };
              }) || [];
            setUsers(updatedUsers);
            console.log(updatedUsers);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers();
    },[])


    return (
        <>
            <AdminLayout 
            pageTitle="Manage Users"
            pageName="Users">
                <div className="xl:pt-[0.833vw] pt-4">
                    <div className="custom_search_input">
                        <span className="p-input-icon-right">
                            <i className="pi pi-search" />
                            <InputText placeholder="Quick Search" className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px]" />
                        </span>
                    </div>
                    <div className="xl:pt-[0.833vw] pt-4">
                        <FilterComponent />
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
                    style={{ width: "100%" }}
                    paginator
                    paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                    currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    rows={10}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    selectionMode={rowClick ? null : 'checkbox'}
                    selection={selectedProducts}
                    filters={filters}

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
                        field="role.role"
                        header="Role"
                        style={{ minWidth: "8rem" }}
                  
                    ></Column>

                    <Column
                        field="id"
                        header="ID"
                        style={{ minWidth: "8rem" }}

                    ></Column>
                    <Column
                        field="Name"
                        header="Name"
                        style={{ minWidth: "20rem" }}
                        body={TableImage}
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
            </div>


            <Addnewevent
                visible={Addneweventpopup}
                onHides={() => setAddneweventpopup(false)}
            />

            <AddNewUser
            visible={addNewUser}
            onHides={() => setAddNewUser(false)}
            setAddNewUser={setAddNewUser}
            />

            <RemoveUser
             visible={removeUser}
             onHides={() => setRemoveUser(false)}
             message='Are you sure you want to block this
             User?'
             icon='autinisd-user-delete'
            />

            <RemoveUser
             visible={deleteUser}
             onHides={() => setDeleteUser(false)}
             message='Are you sure you want to delete this User?'
             icon='autinisd-info-circle-fill'
            />

</AdminLayout>
        </>
    );
}

