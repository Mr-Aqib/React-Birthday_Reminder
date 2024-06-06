import React from 'react'
import { FaTrash } from "react-icons/fa";
const BDList = ({id,Name,Age,image,remove}) => {
  return (
      <div  className='bdlist shadow  border border-secondary p-3 rounded-4 d-flex flex-row align-items-center justify-content-between ' >
          <div className='d-flex flex-row align-items-center justify-content-center gap-3'>
              <img style={{objectFit:'cover'}} width={ 60}
              height={60}  className='rounded-circle' src={image} alt="" />
              <div className=' d-flex flex-column'>
                  <h5 className=''>{ Name}</h5>
                  <p className='text-white m-0 p-0'>{Age } years Old</p>
              </div>
          </div>
          <button className="d-flex self-align-center btn" onClick={()=> remove (id)}>
             <FaTrash className='text-danger' style={{fontSize:'24px'}} />
          </button>
    </div>
  )
}

export default BDList