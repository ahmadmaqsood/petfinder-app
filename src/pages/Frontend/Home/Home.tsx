import React from 'react'
import Minibar from '../../../Components/Minibar/Minibar'
import HeroSection from '../../../Components/HeroSection/HeroSection'
import PetsCollection from '../../../Components/PetsCollection/PetsCollection'
import PetsAdoption from '../../../Components/PetsAdoption/PetsAdoption'
import PlanningPets from '../../../Components/PlanningPets/PlanningPets'
import PetsAdoptionArticles from '../../../Components/PetsAdoptionArticles/PetsAdoptionArticles'

export default function Home() {
  return (
    <>
      <Minibar />
      <HeroSection/>
      <PetsCollection/>
      <PetsAdoption/>
      <PlanningPets/>
      <PetsAdoption/>
      <PetsAdoptionArticles/>

    </>
  )
}
