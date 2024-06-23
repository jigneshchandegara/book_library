import React from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";

const Bookshow = () => {

  let bookshow = useSelector((state) => state.book.book);
  console.log(bookshow, "book list");
  return (
    <>
      <div className="container my-20 sm:my-20 md:my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center   ">
        {
          bookshow?.map((value, index) => {
            return (
              <>
                <div key={index} className=' mb-20 sm:mb-20 md:mb-20 '>
                  <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] '>
                    <div className='h-[100px] '>
                      <img src={value.image} alt="book img" className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md' />
                    </div>
                    <div className='p-4 text-center'>
                      <div className='w-full flex items-center justify-center'>
                        {value.rating}<FaStar className='text-yellow-500' />
                      </div>
                      <h1 className='text-xl font-bold'>{value.title}</h1>
                      <p className='text-gray-500 group-hover:text-white'>Author by {value.author}</p>
                      <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{value.description}</p>
                      <button className=' bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary'>order now</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div >
    </>
  )
}

export default Bookshow