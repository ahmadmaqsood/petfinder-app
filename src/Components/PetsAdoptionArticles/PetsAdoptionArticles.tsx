import React from 'react'
import puppy from '../../assets/puppy.png'
import kitten from '../../assets/kitten.png'
import ads4 from '../../assets/ads4.jpg'
const PetsAdoptionArticles: React.FC = () => {
    return (
        <>
            <div className="PetsAdoptionArticles grid md:grid-cols-2 max-w-[1220px] place-items-center mx-auto my-32 gap-16">
                <div className="card shadow-md max-w-md md:max-w-xl  ">
                    <div className="img__container max-w-md md:max-w-xl  ">
                        <img src={puppy} alt="" className='rounded-t-2xl' />
                    </div>
                    <div className="avatar__container flex justify-center  bg-white z-10 -mt-14  ">
                        <img src={puppy} alt="" className='w-[120px] h-[120px] rounded-full object-cover border-8 border-white' />
                    </div>
                    <div className='card-body bg-white text-center pt-8'>
                        <h2 className='text-xl font-base'>Dog Adoption Articles</h2>
                        <p className='mb-9 text-md mt-5 text-gray-500'>Learning more about caring for your new dog</p>
                        <div>
                            <button className='font-bold py-3 text-md text-primary hover:bg-primary hover:text-white w-full'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-md  max-w-md md:max-w-xl  ">
                    <div className="img__container  max-w-md md:max-w-xl ">
                        <img src={kitten} alt="" className='rounded-t-2xl'/>
                    </div>
                    <div className="avatar__container flex justify-center bg-white z-10 -mt-14 ">
                        <img src={kitten} alt="" className='w-[120px] h-[120px] rounded-full object-cover border-8 border-white' />
                    </div>
                    <div className='card-body bg-white text-center pt-8'>
                        <h2 className='text-xl font-base'>Cat Adoption Articles</h2>
                        <p className='mb-9 text-md mt-5 text-gray-500'>Helpful insights on what to expect.</p>
                        <div>
                            <button className='font-bold py-3 text-md text-primary hover:bg-primary hover:text-white w-full'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-16'>
                <img src={ads4} alt="ads" className='xx:max-w-sm sm:max-w-xl md:max-w-3xl ' />
            </div>
        </>
    )
}

export default PetsAdoptionArticles