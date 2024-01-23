import React from 'react'
import './minibar.scss'
export default function Minibar() {
    return (
        <>
            <div className="minibar xx:hidden md:block bg-primary py-4 ">
                <nav className="dropdownmenu md:max-w-4xl md:ms-14">
                    <ul className='flex justify-between '>
                        <li>
                            <a href="#">ADOPT OR GET INVOLVED</a>
                            <ul className='submenu '>
                                <li ><a href="#">About Petfinder</a></li>
                                <li ><a href="#">Adopting Pets</a></li>
                                <li ><a href="#">Animal Shelters & Rescues</a></li>
                                <li ><a href="#">Petfinder Foundation</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">DOGS AND PUPPIES</a>
                            <ul className='submenu  '>
                                <li ><a href="#">Dog Adoption</a></li>
                                <li ><a href="#">Dog Breeds</a></li>
                                <li ><a href="#">Feeding Your Dog</a></li>
                                <li ><a href="#">Dog Behavior</a></li>
                                <li ><a href="#">Dog Health & Wellness</a></li>
                                <li ><a href="#">Dog Training</a></li>
                                <li ><a href="#">Other Dog Information</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">CATS AND KITTENS</a>
                            <ul className='submenu  '>
                                <li ><a href="#">Cat Adoption</a></li>
                                <li ><a href="#">Cat Breeds</a></li>
                                <li ><a href="#">Feeding Your Cat</a></li>
                                <li ><a href="#">Cat Behavior</a></li>
                                <li ><a href="#">Cat Health & Wellness</a></li>
                                <li ><a href="#">Cat Training</a></li>
                                <li ><a href="#">Other Cat Information</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">OTHER TYPES OF PETS</a>
                            <ul className='submenu   '>
                                <li ><a href="#">Birds</a></li>
                                <li ><a href="#">Exotic Pets</a></li>
                                <li ><a href="#">Guinea Pigs</a></li>
                                <li ><a href="#">Horses</a></li>
                                <li ><a href="#">Rabbits</a></li>
                                <li ><a href="#">Reptiles</a></li>
                                <li ><a href="#">Small & Furry Pets</a></li>
                            </ul>
                        </li>
                    </ul >
                </nav >
            </div >
        </>
    )
}
