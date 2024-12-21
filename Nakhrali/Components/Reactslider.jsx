import React from 'react'
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';
import Item from './Item';
import { FaAngleRight } from 'react-icons/fa6';


const Reactslider = () => {
    const Right=()=>{
        
      return  <div style={{fontSize:"45px",backgroundColor:"gold"}}>
            <FaAngleRight/>
        </div>
    }
  return (
    <>
    <div className='bg-primary col-5 d-flex justify-content-center'>

    <Carousel show={3} slide={1} swiping={true}  swipeOn={false}>
        <Item text={"1"} color={"blue"}/>
        <Item text={"2"} color={"red"}/>
        <Item text={"3"} color={"pink"}/>
        <Item text={"4"} color={"orange"}/>
    </Carousel>
    </div>
    </>
  )
}

export default Reactslider