import React from 'react'
import mini from '../../assets/Link - Mini G, ADOPTABLE, Young Female Tabby & Domestic Short Hair, in Sunnyvale, CA. → image.png'
import logo from '../../assets/IconLogofaceColorGray.png'
import John from '../../assets/Link - John, ADOPTABLE, Young Male Tabby, in Palo Alto, CA. → image.png'
import Honey from '../../assets/Link - Honey, ADOPTABLE, Young Female Tortoiseshell & Domestic Short Hair, in Sunnyvale, CA. → image.png'
import pawn from '../../assets//IconStrokedPaw.png'
const PetsAdoption: React.FC = () => {
    return (
        <div className=' PetsAdoption md:mt-24 xx:mt-14  '>
            <h1 className='text-center text-primary text-semibold text-3xl   mb-8'>Pets Available for Adoption Nearby</h1>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xx:grid-cols-2 gap-x-6 mx-auto md:max-w-[1220px] xx:gap-y-6 place-items-center ">
                <div className="card hover:border-primary hover:border-2 shadow-md     rounded-xl bg-white ">
                    <img src={mini} alt="dog" className='rounded-xl ' />
                    <p className=' text-center py-4 text-primary font-semibold text-lg ' style={{ borderTopLeftRadius: '50px', borderTopRightRadius: "50px" }}>Mini G</p>
                </div>
                <div className="card hover:border-primary hover:border-2 shadow-md      rounded-xl  bg-white ">
                    <div className='bg-[#E6E4E9] flex items-center justify-center'>
                        <img src={Honey} alt="cat" className='rounded-xl  bg-[#E6E4E9]' />
                    </div>
                    <p className=' text-center py-4 text-primary font-semibold text-lg'>Pearl</p>
                </div>
                <div className="card hover:border-primary hover:border-2 shadow-md    rounded-xl bg-white ">
                    <img src={John} alt="paws" className='rounded-xl ' />
                    <p className=' text-center py-4 text-primary font-semibold text-lg'>John</p>
                </div>
                <div className="card xx:hidden md:block hover:border-primary hover:border-2 shadow-md    rounded-xl bg-white ">
                    <img src={Honey} className='rounded-xl ' alt="shelters" />
                    <p className=' text-center py-4 text-primary font-semibold text-lg '>Honey</p>
                </div>
                <div className="card hover:border-primary hover:border-2 shadow-md sm:h-[285px] flex  items-center justify-between flex-col rounded-lg bg-primary  text-center  ">
                    <div className='flex flex-col justify-center items-center xx:mt-4 sm:mt-16'>
                        <img src={pawn} alt="cat" className='mb-5' />
                        <p className='text-white mx-3 xx:text-md sm:text-md'>10137 more pets available on Petfinder</p>
                    </div>
                    <div className='w-full'>
                        <hr className='border-t-2  border-zinc-950 ' />
                        <p className='text-center  pb-3 pt-4 text-white font-medium text-lg hover:bg-purple-950 w-full '>MEET THEM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetsAdoption;