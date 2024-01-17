import React from 'react'
import shelters from '../../assets/IconSheltersRescues.png'
import heart from '../../assets/Health%20Outline.svg.png'
import dog from '../../assets/IconDogPortrait.png'


const PlanningPets: React.FC = () => {
    return (
        <div className=' PlanningPets md:my-36 xx:mt-14 bg-white py-16 '>
            <h1 className='text-center text-bold text-4xl tracking-wide   mb-16'>PLANNING TO ADOPT A PET?</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xx:grid-cols-1  gap-x-6  xx:gap-y-6 place-items-center ">
                <div className="card  w-[331px] h-[301px]    rounded-xl bg-white  text-center">
                    <img src={shelters} alt="dog" className='w-[80px] h-[80px] mx-auto' />
                    <h2 className=' text-[22px] my-6  font-semibold  text-primary uppercase'>Checklist for new adopters</h2>
                    <p className='mt-3 text-[17px]'>Make the adoption transition as smooth as possible.</p>
                    <button className='uppercase border-2 text-md border-primary mt-16 px-4 w-52 py-2 text-primary font-bold rounded-full hover:bg-primary hover:text-white'>Learn More</button>
                </div>
                <div className="card w-[331px] h-[345px]    rounded-xl bg-white  text-center">
                    <img src={heart} alt="dog" className='w-[100px] h-[100px] mx-auto' />
                    <h2 className=' text-[22px] my-6  font-semibold  text-primary uppercase'>COVID-19 Resources</h2>
                    <p className='mt-3 text-[17px]'>Learn how shelters/rescue groups are adapting.Find out how you can help dogs and cats.</p>
                    <button className='uppercase border-2 text-md border-primary mt-10 px-4 w-52 py-2 text-primary font-bold rounded-full hover:bg-primary hover:text-white'>Learn More</button>
                </div>
                <div className="card w-[331px] h-[301px]    rounded-xl bg-white  text-center">
                    <img src={dog} alt="dog" className='w-[80px] h-[80px] mx-auto' />
                    <h2 className=' text-[22px] my-6  font-semibold  text-primary uppercase'>Pet Adoption FAQs</h2>
                    <p className='mt-3 text-[17px]'>Get answer to all the you questions you haven’t thought of for your adoption.</p>
                    <button className='uppercase border-2 text-md border-primary mt-16 px-4 w-52 py-2 text-primary font-bold rounded-full hover:bg-primary hover:text-white'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default PlanningPets;