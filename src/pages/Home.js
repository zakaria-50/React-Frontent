import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

export default function Home() {


    const [parfums,setParfums] = useState([])

    const {id}= useParams();


    useEffect(()=>{
        loadParfums();
    }, []);

    const loadParfums= async()=>{
        const result=await axios.get("http://localhost:8080/web/store/Parfums");
        setParfums(result.data) ; 
    }

    const deleteParfum= async(id) =>{
        await axios.delete(`http://localhost:8080/web/store/parfums/${id}`)
        loadParfums();
    }




  return (
    <div className='container'>
        
        <div className='py-4'>
        <div class="wrapper">
                    <Link className="neons" to={"/addparfum"}><i class="bi bi-plus"></i> Add Product</Link>
                    </div>

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Nr</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        parfums.map((parfum,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
      
      <td>{parfum.name}</td>
      <td>{parfum.price}.00 DH</td>
      <td>
        <Link className='btn btn-outline-primary mb-2'
        to={`/updateParfum/${parfum.id}`}
        ><i class="fa-regular fa-pen-to-square"></i></Link>&nbsp;
        <Link className='btn btn-outline-success mb-2' to={`/viewparfum/${parfum.id}`}><i class="fa-solid fa-circle-info"></i></Link>&nbsp;
        <button className='btn btn-outline-danger mb-2'
        onClick={()=>deleteParfum(parfum.id)}
        ><i class="fa-solid fa-eraser"></i></button>

      </td>
    </tr>
        ))
    }
    
  </tbody>
</table>

        </div>

    </div>
  )
}
