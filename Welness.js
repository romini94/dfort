import React from 'react'
import Head from './Head'
import {Row,Col} from 'react-bootstrap'
import ayurveda from'../IMAGES/ayurveda.jpg'

function Welness() {
  return (
    <div className='container-fluid mt-5  '>
      <Head/>
<Row>
<Col>
<img src={ayurveda}/>
</Col>
<Col>
<h4> Welness</h4>
<h1> HEAL WITH AYURVEDHA</h1>
<h6>  5000 years of Ayurveda that gets served authentically by its true custodians in Kerala! Our experienced panel of doctors and panchakarma specialists follow an uncompromising approach in the treatment regimen, medicinal preparation, diet regulations etc., making it a sought-after destination for Ayurvedic treatments for
guests from around the world to treat a wide range of ailments known to have successful results in Ayurvedic healing.     </h6>
<button type="button" class="btn btn-outline-secondary"> consult doctor</button>
</Col>
</Row>



    </div>
  )
}

export default Welness