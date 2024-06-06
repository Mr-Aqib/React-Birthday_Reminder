import React from 'react'
import BDList from './BDList'
import { Database } from './Database'
const Birthday = () => {
  return (
      <>
          <div className='Birthday-con p-4 rounded-5 container shadow col-lg-4  d-flex flex-column gap-3'>
              <div>
              <h2 className='text-white text-center'>Birthday Reminder</h2>
                  <h3 className='text-white text-center'>No of Birthdays</h3>
              </div>
              {Database.map((items, index) =>
              {
                  return <>
                      <BDList {...items} />
                  </>
                    
            })}
            
             
          </div>
      </>
  )
}

export default Birthday