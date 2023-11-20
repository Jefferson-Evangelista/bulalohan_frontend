import { React, useState } from 'react'
import styles from '../style'
import { Card } from '../components'

import {
  breakfast1,
  beef1,
  chicken1,
  dessert1,
  noodles1,
  rice1,
  seafood1,
  vegetable1,
  beverage1
} from '../assets/services'
import Button from './Button'

const Services = () => {
  const [cardSlide, setCardSlide] = useState(false)

  const slideCards = () => {
    if(window.scrollY >= 290) {
        setCardSlide(true);
    } else {
        setCardSlide(false);
    }
  }

  window.addEventListener('scroll', slideCards)

  return (
    <section id="menu" className='container max-w-full h-full flex flex-col justify-center items-center'>
      <div className={`container sm:max-w-3xl max-w-xs flex flex-col justify-center items-center gap-y-3 ${styles.paddingY}`}>
        <h1 className='font-bold font-cormorant sm:text-[60px] text-[24px] tracking-[2px]'>House <span className='text-title'>Specialties</span></h1>
        <p className='font-poppins text-center sm:text-normal text-[14px] sm:leading-7 leading-5'>Indulge in a culinary journey with our restaurant services that go beyond mere dining – we strive to create an immersive culinary retreat <experience className=""></experience></p>
      </div>

      <div className={`${cardSlide ? '' : ''} container max-w-5xl h-full flex sm:flex-row flex-col sm:justify-around justify-center items-center gap-x-6 gap-y-10 `}>
        
        <Card img={breakfast1} title='Breakfast' detail='Filipino silog meals blend garlic rice, meats, and sunny-side-up eggs.'/>
        <Card img={seafood1} title='Seafood' detail='Seafood meals delight taste buds with freshness, flavors, and ocean richness..'/>
        <Card img={beef1} title='Beef' detail='Savor beef meals, a symphony of tenderness, flavors, and hearty satisfaction.'/>
        {/* <Card img={chicken1} title='Chicken' detail='Grilled chicken, seasoned with herbs, offers a savory, wholesome, delight.'/>
        <Card img={vegetable1} title='Vegetables' detail='Vegetable stir-fry, bursting with colors, satisfies with diverse, nutritious flavors.'/>
        <Card img={noodles1} title='Noodles' detail='Succulent noodles stir-fried with vibrant vegetables'/>
        <Card img={rice1} title='Rice' detail='Flavorful rice bowl, a satisfying and nourishing meal for any occasion'/>
        <Card img={dessert1} title='Desserts' detail='Indulge in sweet delights, desserts that enchant every taste bud.'/>
        <Card img={beverage1} title='Beverages' detail='Savor beef meals, a symphony of tenderness, flavors, and hearty satisfaction.'/> */}
        
      </div>
      <div className={`${styles.paddingY}`}>
        <Button title='VIEW FULL MENU'/>  
      </div> 
      
    </section>
  )
}

export default Services