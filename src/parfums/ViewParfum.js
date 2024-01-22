import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";

export default function ViewParfum() {


    const [parfum, setParfum] = useState({
        name: "",
        price: ""
      });
    
      const { id } = useParams();
    useEffect(()=>{
        loadParfum();
    }, [])




    const loadParfum = async ()=>{
        const result =await axios.get(`http://localhost:8080/web/store/parfums/${id}`)
        setParfum(result.data)
    }


  return (
    
    
    <div className='container text-white'>
        
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
           
                <h2 className='text-center m-4'> Parfum Details </h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of the Parfum {parfum.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {parfum.name}

                            </li>
                            <li className='list-group-item'>
                                <b>Price:</b>
                                {parfum.price}

                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}><i class="bi bi-arrow-90deg-left"></i> Back</Link>
    </div>
    </div>
    </div>
  )
}
