import React, { useEffect, useState } from 'react'
import { config } from "../../config";
import { getData } from "../lib";
import Carousel from "react-multi-carousel";
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      const endpoint = `${config?.baseUrl}/categories`;
      try{
        const data = await getData(endpoint);
        setCategories(data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  },[])

  return (
    <Carousel 
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={1000}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
      >
        {categories.map((item:CategoryProps)=>(
          <Link key={item?._id} to={`category/${item?._base}`}>
           <img src={item?.image} alt="categoryImage" />
          </Link>
        ))}
    </Carousel>
  )
}

export default Banner
