import React from 'react'
import search from '../../assets/search.png'
export default function HeroSection() {
    return (
        <div className="bg-hero-pattern w-full h-[410px] bg-no-repeat bg-cover  ">
            <div className="iner__container flex justify-center items-center flex-col">
                    <div className="main__div  flex mt-9 rounded bg-white px-3 border-none " >
                        <input type="text" name="" id="" placeholder='Search Terrier, Kitten, etc' className='py-3 px-3  xx:w-72 md:w-[500px] outline-none ' />
                        <button>
                            <img src={search} alt="" className='' />
                        </button>
                    </div>
                    <div className="banner__text mt-40">
                        <h4 className='text-white  xx:text-4xl md:text-5xl font-bold text-center'>Find your new best friend</h4>
                        <p className='mx-16 text-center xx:text-lg md:text-2xl text-white font-semibold'>Browse pets from over network of over 11,500 shelters and rescues.</p>
                    </div>
            </div>
        </div>
    )
}
