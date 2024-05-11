import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submitHandler = async({ title, description , price , imgUrl })=> {
        const res = await axios.post("http://localhost:4000/products" , {
            title,description,price,imgUrl,
        });
        if(res.status === 201 ){
            alert("Product created successfully!");
        }
      }

      return (
        <form onSubmit={handleSubmit (submitHandler)}>
            <div className= ' text-yellow-400 bg-[url("https://images.unsplash.com/photo-1603791239531-1dda55e194a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8fDA%3D")] bg-repeat-round'>
            <div className="p-[25px] space-x-16 font-semibold text-xl">
             <label htmlFor="title">Title</label>
             <input type="text" id="title" className="border"  {...register("title", {required: "Please enter Product title"})}/>
             {errors.title && (<div className="text-red-600">{errors.title.message}</div>)}
            </div>
            <div className="p-[25px] space-x-2 font-semibold text-xl">
             <label htmlFor="description">Description</label>
             <input type="text" id="description" className="border"  {...register("description", {required: "Please enter Product description"})}/>
             {errors.description && (<div className="text-red-600">{errors.description.message}</div>)}
            </div>
            <div className="p-[25px] space-x-14 font-semibold text-xl ">
             <label htmlFor="price">Price</label>
             <input type="number" id="price" className="border"  {...register("price", {required: "Please enter Product price"})}/>
             {errors.price && (<div className="text-red-600">{errors.price.message}</div>)}
            </div>
            <div className="p-[25px] space-x-10 font-semibold text-xl">
             <label htmlFor="imgUrl">ImgUrl</label>
             <input type="text" id="imgUrl" className="border"  {...register("imgUrl", {required: "Please enter Product ImgUrl"})}/>
             {errors.imgUrl && (<div className="text-red-600">{errors.imgUrl.message}</div>)}
            </div>
            <div className="flex justify-end mt-10 p-[20px]">
              <button type="submit" className="bg-sky-700 text-white p-2 rounded-full">Create Product</button>
            </div>
            </div>
        </form>
      )
}

export default CreateProduct