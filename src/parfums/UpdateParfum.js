
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

export default function AddParfum() {

    let navigate=useNavigate() ; 


    const {id}=useParams();


    const [parfum, setParfum]=useState({
        name:"",
        price:""
    })

    const {name, price}=parfum ; 


    const onInputChange=(e)=>{
        setParfum({...parfum,[e.target.name]:e.target.value});
    }


    useEffect(() => {
        loadParfum() ; 
    }, []);




    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/web/store/parfums/${id}`, parfum);
        navigate("/");
    }

    const loadParfum = async ()=>{
        const result =await axios.get(`http://localhost:8080/web/store/parfums/${id}`)
        setParfum(result.data)
    }




  return (
    <div className='container text-white'>
        
        <div className='row'>

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

           
                <h2 className='text-center m-4'> Update Parfum </h2>
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

                    <button type='submit' className='btn btn-outline-primary'>Update</button>
                    <Link  className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
</form>



            </div>

        </div>

    </div>
  )
}
