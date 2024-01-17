import React from 'react'
import mini from '../../assets/Link - Mini G, ADOPTABLE, Young Female Tabby & Domestic Short Hair, in Sunnyvale, CA. → image.png'
import logo from '../../assets/IconLogofaceColorGray.png'
import John from '../../assets/Link - John, ADOPTABLE, Young Male Tabby, in Palo Alto, CA. → image.png'
import Honey from '../../assets/Link - Honey, ADOPTABLE, Young Female Tortoiseshell & Domestic Short Hair, in Sunnyvale, CA. → image.png'
import pawn from '../../assets//IconStrokedPaw.png'
const PetsAdoption: React.FC = () => {
    return (
        <div className=' PetsAdoption md:mt-36 w-[1186px] mx-auto'>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-x-6  xx:gap-y-6 place-items-center ">
                <div className="card shadow-md w-[231px] h-[301px] flex  items-center justify-center flex-col   rounded-xl bg-white  text-center">
                    <img src={mini} alt="dog" className='rounded-xl rounded-b-none' />
                    <p className='mt-3 '>Mini G</p>
                </div>
                <div className="card shadow-md w-[231px] h-[301px]  flex  items-center justify-center flex-col  rounded-xl  bg-white text-center ">
                    <div className='bg-[#E6E4E9] w-[231px] h-[231px] flex items-center justify-center'>
                        <img src={logo} alt="cat" className='rounded-xl rounded-b-none bg-[#E6E4E9]' />
                    </div>
                    <p className='mt-3'>Pearl</p>
                </div>
                <div className="card shadow-md w-[231px] h-[301px]  flex  items-center justify-center flex-col  rounded-xl bg-white  text-center  ">
                    <img src={John} alt="paws" className='rounded-xl rounded-b-none' />
                    <p className='mt-3'>John</p>
                </div>
                <div className="card shadow-md w-[231px] h-[301px]  flex  items-center justify-center flex-col rounded-xl bg-white  text-center  ">
                    <img src={Honey} className='rounded-xl rounded-b-none' alt="shelters" />
                    <p className='mt-3'>Honey</p>
                </div>
                <div className="card shadow-md w-[231px] h-[301px]  flex  items-center justify-center flex-col rounded-xl bg-primary  text-center  ">
                    <div className='bg-primary w-[231px] h-[231px] flex items-center justify-center flex-col'>
                        <img src={pawn} alt="cat" className=''/>
                        <p className='text-white mx-3'>10137 more pets available on Petfinder</p>
                    </div>
                    <hr className='border-t-2  border-zinc-950 w-full' />
                    <p className='text-white mt-2 '>MEET THEM</p>
                </div>
            </div>
        </div>
    )
}

export default PetsAdoption;