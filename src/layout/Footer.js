import React from 'react'

import { Navbar, Container, Col } from "react-bootstrap";



class Footer extends React.Component {

    render(){


let fullYear = new Date().getFullYear(); 

        return (
                
            <Navbar fixed="bottom" bg="dark" variant="dark">

                <Container>

                    <Col lg={12} className='text-center text-muted' >
                        <div style={{color:'white'}}> {fullYear}-{fullYear+1}, All Rights Reserved by <img src='https://img.icons8.com/?size=256&id=kp3yRtuUVOG5&format=png' height="25" width="25" /></div>
                    </Col>
                </Container>


            </Navbar>


        )
    }
}

export default Footer ; 