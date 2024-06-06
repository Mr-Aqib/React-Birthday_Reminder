import React from 'react'

const BDList = ({id,Name,Age,image}) => {
  return (
      <div className='bdlist shadow border-dark border p-3 rounded-4 d-flex flex-row align-items-center justify-content-between ' >
          <div className='d-flex flex-row align-items-center justify-content-center gap-3'>
              <img width={ 60}
              height={60}  className='rounded-circle' src={image} alt="" />
              <div className=' d-flex flex-column'>
                  <h5 className=''>{ Name}</h5>
                  <p className='text-white m-0 p-0'>{Age } years Old</p>
              </div>
          </div>
          <button className="d-flex self-align-center btn btn-danger">
              Delte
          </button>
    </div>
  )
}

export default BDList