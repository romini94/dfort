import React from 'react'
import Head from './Head'
import eventhall from '../IMAGES/eventhall.webp'
import tangi from '../IMAGES/Thangi.webp'

import {Row,Col } from 'react-bootstrap'


function Meetings() {
  return (
    
    <div>
   <Head/>  
<Row>
    <Col>
    </Col>
    <img src={eventhall} style={{ width:" 500px", position:" relative", top:"140px", right:"250px"}} height=" 400px" />
    <Col style={{position:"relative",top:"140px", right:"150px"}}>
   <h1>Meetings and Events</h1>
<h6>Ranging from a Boardroom to a 400 Seater newly constructed Banquet Hall, D’Fort Ayurvedic Resort is an address the corporates seek for their Meetings & Conference needs. Three fully equipped venues has memorable stories of joyful family celebrations of birthdays and anniversaries, receptions, get-togethers and meetings hosted by various domestic and international organizations with trades and business in Kollam.</h6>

<button type='button'> book an event</button>

    </Col>
</Row>

<div>
<Row style={{position:"relative", top:"250px", left:"40px"}}>
<Col>
<h1>Thangi</h1>
 <h6>Thangi is the second largest Banquet Hall in the resort with a capacity to seat up to 250 guests, also a convertible full-length Badminton Court. Located on the 3rd floor, the hall has a carpeted flooring and high roof, and are suitable to host Weddings, Receptions, Product Launches, Exhibitions etc., and has also hosted shootings of movies and television programs. The team has successfully hosted high-profile events facilitating a-z arrangements including lights & sounds, audio-visual equipment, hall decorations and beyond.</h6>

</Col>
<Col>
<img src={tangi} width="500px" height="400px"/>


</Col>

</Row>  <br></br>
<button type="button" style={{position:"relative",top:"50px", left:"40px"}}> check availability</button>

</div>


    </div>
  )
}

export default Meetings