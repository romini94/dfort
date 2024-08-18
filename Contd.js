import React from 'react'
import { Row,Col } from 'react-bootstrap'
import aesthetic from '../IMAGES/aesthetic.avif'
import Head from './Head'
function Contd() {
  return (
    <div className=''>
      <Head/>
<Row>
    <Col style={{position:"relative" ,top:"80px", left:"30px"}} className='contact'>
   <h4>Contact</h4>
<h1>Get in touch</h1>
<h4>Hotel All Season</h4>
<h6>Near Lighthouse & Breakwater
Thangassery, Kollam
Kerala, India
</h6>
<h4>For Reservations please call</h4>
+914742787878
<h1>For Enquiry email us</h1>
<h6>reservation@thedfort.com</h6>
</Col>
<Col>
<img src={aesthetic} style={{width:"600px" ,height:"500px", position:"relative",top:"80px"}}/>


</Col>
</Row>


    </div>
  )
}

export default Contd