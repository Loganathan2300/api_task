import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import  {Sidebar}  from './layout/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import Headers from './layout/Headers';
const Layouts = () => {
  return (
    <div>
        <Container fluid className=''>
            {/* <Headers/> */}
        <Row className=' '  style={{position:"fixed"}}>
          <Col xs={2}  className=' bg-body-tertiary py-2 '><Sidebar/></Col>
          <Col xs={10} sm={10} md={10} lg={10}><Outlet/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Layouts


{/* <div className="vh-100"></div> */}