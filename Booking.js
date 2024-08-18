import React from 'react'
import'./Dfort.css'
import bed1 from '../IMAGES/bed1.jpg'
function Booking() {
  return (
    <div style={{position:"relative" ,left:"25px"}}>
<ul class="nav nav-tabs bg-light">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ABOUT</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">FACILITIES</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">GALLERY</a>
  </li>
</ul>
<img src={bed1} height="400px"/>  <br></br>
<form>
    <label> check in</label>
<input type="date"/>
<label> check out</label>
<input type="date"/>
<label> rooms</label>
<input type="number"/>
<label> Currency</label>
<input type="number"/><br></br>
<button type="button" style={{position:"relative",top:"50px", color:"grey"}}> view availability calender</button>
<button type='button' style={{position:"relative",top:"50px", left:"20px",color:"grey"}}> search Rooms</button>


</form>
    </div>
  )
}

export default Booking