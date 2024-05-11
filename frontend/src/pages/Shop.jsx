//import React, { useImperativeHandle } from 'react';
import ProductCard from '../components/ProductCard';
import axios from "axios";
import { useEffect, useState } from "react";


const fetchProducts =  async () => {
  const res = await axios.get("http://localhost:4000/products");
  const data =res.data;
  console.log(data);
  return data;
};

const Shop = () => {
  const [data, setData] = useState([]);
   
  const assignData = async () => {
    const fetchedData = await fetchProducts();
     let le = Math.ceil(fetchedData.length/3)*3;
     for(let i=0;i<fetchedData.length;i++)
     {
       fetchedData[i].visibility = "visible";
     }
     for(let i=0;i<le-fetchedData.length;i++)
     {
      let obj = {...fetchedData[i]};
      obj.visibility = "hidden";
      obj._id = i;
      fetchedData.push(obj)
      
     }
     
    setData(fetchedData);
  };

  useEffect(() => {
   // fetchProducts();
    assignData();
  }, []);
  return (
      
            <div className='flex justify-between bg-[url("https://cdn.pixabay.com/photo/2020/10/11/02/45/city-5644601_1280.jpg")] bg-repeat-round'>
              <div style={{display:'flex' , flexWrap:"wrap", justifyContent:"space-evenly" }}>
              { data.map((product) => {
                  return (
                    <ProductCard
                    isVisible={product.visibility}  
                    key={product._id}
                      title={product.title}
                      price={product.price}
                      imgUrl={product.imgUrl}
                    />
                    );
                })}
             
            </div>
        </div>
  );
  
};



export default Shop;