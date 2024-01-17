import React from 'react'
import Dog from '../../assets/IconDogPortrait.png'
import Cat from '../../assets/IconCatPortrait.png'
import Paw from '../../assets/IconPawOutline.png'
import PetShelter from '../../assets/IconSheltersRescues.png'
const PetsCollection: React.FC = () => {
    return (
        <div className='petsCollection  z-50 xx:-mt-6 md:-mt-12  '>
            <div className="flex justify-center xx:flex-wrap md:flex-nowrap xx:gap-y-6 gap-x-2 ">
                <div className="card shadow-md px-5 w-[181px] h-[144px] flex  items-center justify-center flex-col   rounded-xl bg-white  text-center">
                    <img src={Dog} alt="dog" className=' my-1  '  />
                    <p>Dog</p>
                </div>
                <div className="card shadow-md px-5 w-[181px] h-[144px]  flex  items-center justify-center flex-col  rounded-xl  bg-white  text-center ">
                    <img src={Cat} alt="cat" className=' my-1 '  />
                    <p>Cat</p>
                </div>
                <div className="card shadow-md px-5 w-[181px] h-[144px]  flex  items-center justify-center flex-col  rounded-xl bg-white  text-center  ">
                    <img src={Paw} alt="paws" className=' my-1 '  />
                    <p>Other Animals</p>
                </div>
                <div className="card shadow-md  px-5 w-[181px] h-[144px]  flex  items-center justify-center flex-col rounded-xl bg-white  text-center  ">
                    <img src={PetShelter} className=' my-1 '  alt="shelters" />
                    <p>Shelters & Rescues</p>
                </div>
            </div>
        </div>
    )
}

export default PetsCollection