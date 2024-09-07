import React from 'react'
import Banner from '../../components/Banner'
import SpecialCategory from './SpecialCategory'
import VagetableCategory from './VagetableCategory'
import Orangices from './Orangices'
import Meats from './Meats'
import Readytocook from './Readytocook'
import Brands from './Brands'
import ItemSlider from './ItemSlider'

const Home = () => {
  return (
    <div className=''>
        <Banner  />
        <div className="">
          <div className="">
          </div>
        </div>
        <SpecialCategory/>
        <Brands/>
        <VagetableCategory/>
        <Orangices/>
        <Meats/>
        <Readytocook/>
        <ItemSlider/> 
    </div>
  )
}

export default Home
