import React from 'react'
import ReactPaginate from 'react-paginate'

const CustomPagination = ({ first, rows, totalRecords, handlePageClick }) => {

    return (
        <div className='flex justify-between mt-2'>
            <div className="mt-2 text-sm text-gray-500 inline">
                Showing {Math.min(first + 1, totalRecords)} - {Math.min(first + rows, totalRecords)} of {totalRecords}
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
            />
        </div>
    )
}

export default CustomPagination
