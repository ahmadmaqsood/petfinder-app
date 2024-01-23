import React from 'react'
import Dog from '../../assets/IconDogPortrait.png'
import Cat from '../../assets/IconCatPortrait.png'
import Paw from '../../assets/IconPawOutline.png'
import PetShelter from '../../assets/IconSheltersRescues.png'
import ads1 from '../../assets/ads.png'
const PetsCollection: React.FC = () => {
    return (
        <>
            <div className='petsCollection md:absolute md:inset-x-0 z-50 xx:mt-9 md:-mt-20  '>
                <div className="flex justify-center xx:flex-wrap md:flex-nowrap xx:gap-y-6 gap-x-4 ">
                    <div className="card hover:border-primary hover:border-2 hover:bg-gray-100 shadow-lg xx:w-[155px] xx:h-[154px]  md:w-[175px] md:h-[154px] flex  items-center justify-center flex-col   rounded-xl bg-white  text-center">
                        <img src={Dog} alt="dog" className=' my-1  ' />
                        <p className='text-slate-900'>Dogs</p>
                    </div>
                    <div className="card hover:border-primary hover:border-2 hover:bg-gray-100  shadow-lg xx:w-[155px] xx:h-[154px] md:w-[175px] md:h-[154px]  flex  items-center justify-center flex-col  rounded-xl  bg-white  text-center ">
                        <img src={Cat} alt="cat" className=' my-1 ' />
                        <p className='text-slate-900'>Cats</p>
                    </div>
                    <div className="card hover:border-primary hover:border-2 hover:bg-gray-100 shadow-lg xx:w-[155px] xx:h-[154px] md:w-[175px] md:h-[154px]  flex  items-center justify-center flex-col  rounded-xl bg-white  text-center  ">
                        <img src={Paw} alt="paws" className=' my-1 ' />
                        <p className='text-slate-900'>Other Animals</p>
                    </div>
                    <div className="card hover:border-primary hover:border-2 hover:bg-gray-100 shadow-lg xx:w-[155px] xx:h-[154px]  md:w-[175px] md:h-[154px]  flex  items-center justify-center flex-col rounded-xl bg-white  text-center  ">
                        <img src={PetShelter} className=' my-1 ' alt="shelters" />
                        <p className='text-slate-900'>Shelters & Rescues</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-12 md:mt-32'>
                <img src={ads1} alt="ads" className='xx:max-w-sm sm:max-w-xl md:max-w-3xl ' />
            </div>
        </>
    )
}

export default PetsCollection