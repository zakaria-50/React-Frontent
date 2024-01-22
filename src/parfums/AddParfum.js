
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

export default function AddParfum() {

    let navigate=useNavigate() ; 


    const [parfum, setParfum]=useState({
        name:"",
        price:""
    })

    const {name, price}=parfum ; 


    const onInputChange=(e)=>{
        setParfum({...parfum,[e.target.name]:e.target.value});
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/web/store/newParfum", parfum);
        navigate("/");
    }


  return (
    <div className='container'>
        
        <div className='row text-white'>

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

           
                <h2 className='text-center m-4'> New Parfum </h2>
                 <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'> 
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input type={"text"}
                        className='form-control'
                        placeholder=' Parfum name'
                        name='name'
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'> 
                        <label htmlFor='Price' className='form-label'>
                            Price
                        </label>
                        <input type={"text"}
                        className='form-control'
                        placeholder='Parfum price '
                        name='price'
                        value={price}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Create</button>
                    <Link  className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
</form>



            </div>

        </div>

    </div>
  )
}
