import React, { useEffect, useState } from 'react'
import Container from "./Container"
import { config } from "../../config"
import { getData } from "../lib"
import Title from "./Title"
import { Link } from "react-router-dom"

interface CategoryProps {
  _id: string;
  _base: string;
  name: string;
  image: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data)
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [])

  return (
    <Container className="py-8">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Popular products"/>
          <Link to={'/category/tvAndAudio'} className="font-medium relative group overflow-hidden">
            View all categories {" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300"/>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3"/>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
          <Link 
            to={`/category/${item._base}`}
            key={item._id} 
            className="w-full h-auto relative group overflow-hidden"
          >
            <img 
              src={item.image} 
              alt={`${item.name} category`} 
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
              <p className="text-sm md:text-base font-bold">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default Categories