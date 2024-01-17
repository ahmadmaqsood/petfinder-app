import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';
import heart from '../../assets/IconFavorite.png';
import { Link } from 'react-router-dom';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='bg-slate-100 shadow-md'  >
            <div className='left__header xx:flex xx:justify-between xx:items-center md:flex md:items-center md:justify-between '>
                <div className='left__left flex md:gap-5 md:ms-24 2xl:ms-56 '>
                    <img src={logo} alt='petfinder logo' className='h-12' />
                    <div className='dropdown xx:flex xx:justify-around xx:items-center md:flex md:items-center md:justify-center ms-5'>
                        <p className='text-xx text-primary font-medium'>All About Pets</p>
                        <button>
                            <img src={arrow} alt='petfinder logo' className='ms-3 hover:rotate-[180deg] ease-in duration-500' />
                        </button>
                    </div>
                </div>
                <div>
                </div>
                <div className='left__right md:flex md:justify-center md:items-center xx:mr-2 md:mr-12 '>
                    <div className='heart__img xx:flex xx:justify-between xx:items-center md:flex md:justify-center md:items-center md:border-r-4 md:border-gray-300  '>
                        <button>
                            <img src={heart} alt='' className='h-12 md:mr-12 xx:mr-7 ' />
                        </button>
                        <button className={`md:hidden  ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                            <DehazeSharpIcon />
                        </button>
                        <button className={`md:hidden ${!isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className={`right__header  md:flex md:items-center md:pb-0 xx:pb-12 xx:absolute md:static bg-slate-100  md:z-auto z-[-1] left-0 w-full  md:w-auto  md:pl-0 pl-9 transition-all duration-100  ease-in   ${isMenuOpen ? 'xx:h-28 xx:pt-10' : ' top-[-490px]'} `}>
                        <Link to='/' className='mx-2 text-xx  text-gray-100 font-semibold hover:scale-105 xx:bg-primary xx:p-2 xx:rounded-lg '>
                            Sign Up
                        </Link>
                        <Link to='/' className='mx-2 text-xx  text-gray-100 font-semibold hover:scale-105 xx:bg-primary xx:p-2  xx:rounded-lg '>
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
