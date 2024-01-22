import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [parfums, setParfums] = useState([]);

  useEffect(() => {
    loadParfums();
  }, []);

  const loadParfums = async () => {
    const result = await axios.get('http://localhost:8080/web/store/Parfums');
    setParfums(result.data);
  };

  return (
    <div className="container">

        <h1 className='mb-5 text-white '>Store</h1>
      <div className="py-4">
        <div className="row">
          {parfums.map((parfum, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <img
                  src='https://th.bing.com/th/id/OIP.5pwowypyaTF3jtRwNKpb5AHaEo?rs=1&pid=ImgDetMain' 
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  alt={parfum.name}
                />

                <div className="card-body">
                  <h4>{parfum.name}</h4>
                  <p className="card-text">{parfum.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Add to Cart
                      </button>
                    </div>
                    <small className="text-muted">{parfum.price}.00 DH</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
