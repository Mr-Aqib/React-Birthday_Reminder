import React, { useState } from 'react'
import BDList from './BDList'
import { Database } from './Database'
const Birthday = () => {
    const [data,setData]=useState(Database)
    const [bdcounter,setBdcounter]=useState(data.length)
  return (
      <>
          <div   className='Birthday-con p-4 rounded-5 container shadow col-lg-4  d-flex flex-column gap-3'>
              <div>
              <h2 className='text-white text-center'>Birthday Reminder</h2>
                  <h3 className='text-white text-center'><span className='text-danger display-6'>{ data.length == 0 ? 'No' : data.length }</span> of Birthdays</h3>
              </div>
              {data.map((items, index) =>
              {
                  return <>
                      <BDList key={items.id} {...items} />
                  </>
                    
              })}
              <button onClick={data.length>0? ()=>setData([]): ()=>setData(Database)} className={`btn ${data.length > 0 ? 'btn-danger' : 'btn-success'} w-25 py-2 mx-auto`} >{ data.length>0 ? 'Remove' : 'Refresh'}</button>
            
             
          </div>
      </>
  )
}

export default Birthday