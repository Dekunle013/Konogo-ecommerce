"use client"
import React, { useEffect, useState } from 'react'
import { getData } from "../lib";
import { config } from "../../config";

const Pagination = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      const endpoint = `${config?.baseUrl}/products`;
      try{
        const data = await getData(endpoint);
        setProducts(data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  },[])

  return (
    <div>
      
    </div>
  )
}

export default Pagination
