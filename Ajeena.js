import React from 'react'

function Ajeena(props) {
    console.log(props,"l");
    
 const handleClick=()=>{
 props.b.scroll()
}


  return (
    <div style={{height:'100vh'}}>
        <h1 className='text-center bg-warning'>Ajeena</h1>
        <button onClick={handleClick}> button</button>
        </div>
  )
}

export default Ajeena
<BrowserRouter>
   <Routes>
<Route path='/' element={<Firstpage/>}/>
<Route path='/ROOMS' element={<Rooms/>}/>
<Route path='/WELNESS' element={<Welness/>}/>
<Route path='/MEETINGS' element={<Meetings/>}/>
<Route path='/CONTACT' element={<Contd/>}/>
<Route path='/BOOKS' element={<Booking/>}/>
   </Routes>
   </BrowserRouter>
    <nav>
    <Link to="/"></Link>
    <Link to="/Welness"></Link>
    <Link to="/Booking"></Link>
    <Link to="/Rooms"> </Link>
    <Link to="/Contd"></Link>
    <Link to='/Meetings'> </Link>
  </nav>