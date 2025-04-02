import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className='fixed bottom-0 bg-white w-full border-t py-3 flex-col gap-y-7'>
      <div className='relative flex items-center justify-between mx-auto'>

        {page > 1 && (
          <button
            className='border rounded-md px-4 py-2 absolute left-[28rem]'
            onClick={() => handlePageChange(page - 1)}>
            Previous
          </button>
        )}

        <p className='font-medium mx-auto'>
          Page {page} of {totalPages}
        </p>

        {page < totalPages && (
          <button
            className='border rounded-md px-4 py-2 absolute right-[28rem]'
            onClick={() => handlePageChange(page + 1)}>
            Next
          </button>
        )}

      </div>
    </div>
  )
}

export default Pagination;
