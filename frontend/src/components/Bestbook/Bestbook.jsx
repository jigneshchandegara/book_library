import React from 'react';
import img1 from "../../assets/website/book1.jpg";
import img2 from "../../assets/website/book2.jpg";
import img3 from "../../assets/website/book3.jpg";
import { FaStar } from "react-icons/fa";
const bookdata = [
    {
        id: 1,
        img: img1,
        title: "his life",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit laboriosam repudiandae ipsum ",
    },
    {
        id: 2,
        img: img2,
        title: "who's there",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit laboriosam repudiandae ipsum ",
    },
    {
        id: 3,
        img: img3,
        title: "lost boy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit laboriosam repudiandae ipsum ",
    },
]

const Bestbook = () => {
    return (
        <>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Trending Books
                        </p>
                        <h1 className="text-3xl font-bold">Best Books</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis delectus architecto error nesciunt,
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>
                        {
                            bookdata.map((value, index) => {
                                return (
                                    <>
                                        <div key={index}  className=' mb-20 sm:mb-20 md:mb-20 '>
                                            <div data-aos="zoom-in" className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                                        dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]'>
                                                <div className='h-[100px]'>
                                                    <img src={value.img} alt="book img" className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md' />
                                                </div>
                                                <div className='p-4 text-center'>
                                                    <div className='w-full flex items-center justify-center'>
                                                        <FaStar className='text-yellow-500' />
                                                        <FaStar className='text-yellow-500' />
                                                        <FaStar className='text-yellow-500' />
                                                        <FaStar className='text-yellow-500' />
                                                    </div>
                                                    <h1 className='text-xl font-bold'>{value.title}</h1>
                                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{value.description}</p>
                                                    <button className=' bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary'>order now</button>
                                                </div>
                                            </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Bestbook