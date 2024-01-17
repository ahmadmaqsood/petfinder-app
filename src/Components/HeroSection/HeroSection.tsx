import React from 'react'
import search from '../../assets/search.png'
export default function HeroSection() {
    return (
        <div className="bg-hero-pattern w-full h-[380px] bg-no-repeat bg-cover md:border-b-8  md:border-primary  ">
            <div className="iner__container flex justify-center items-center flex-col">
                    <div className="main__div  flex mt-9 rounded bg-white px-3 border-none " >
                        <input type="text" name="" id="" placeholder='Search Terrier, Kitten, etc' className='py-4 px-4  xx:w-72 md:w-[300px] outline-none ' />
                        <input type="text" name="" id="" placeholder='Enter City, State or ZIP ' className='py-4 px-4  xx:hidden md:block  md:w-[300px] outline-none ' />
                        <button>
                            <img src={search} alt="" className=' ' />
                        </button>
                    </div>
                    <div className="banner__text mt-28">
                        <h4 className='text-white mb-1  xx:text-4xl md:text-5xl font-bold text-center'>Find your new best friend</h4>
                        <p className=' text-center xx:text-sm xx:px-3  md:text-[22px] text-white font-semibold xx:bg-primary xx:mt-12 md:mt-1 xx:py-8 md:py-0 sm:bg-primary md:bg-transparent '>Browse pets from over network of over 11,500 shelters and rescues.</p>
                    </div>
            </div>
        </div>
    )
}
