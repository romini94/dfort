import React,{useState} from 'react';
import Head from './Head';
import bed1 from'../IMAGES/bed1.jpg';
import bed2 from'../IMAGES/bed2.jpg';
import bed3 from'../IMAGES/bed3.jpg';
import bed4 from'../IMAGES/bed4.jpg';


function Rooms() {
  const [rooms, setRooms] = useState([
      {
          name: 'Delux Rooms',
          price: "2500+ Taxes/night",
          img:bed1
          
      },
      {
          name: 'Delux Rooms',
          price: "4500+Taxes/night",
          img:bed2
      },
      {
          name: 'Premium Rooms',
          price: '4500+Taxes/night',
         img:bed3
      },
      {
          name: "Semi Suite Rooms",
          price: '5500+Taxes/night',
         img:bed4 
      }
  ]);

  return (
   
      <div className='container-fluid bg-secondary'>
         <Head/>
         <div style={{position: "relative", top:"170px"}}>
          <h1 className='text-center roomfont' >Rooms</h1>
          <h5 className='roomfont'>
              D’Fort Ayurvedic Resort has a wide range of room categories suitable for a business traveler, leisure travelers, or short & long-term wellness package stays. The accommodation choices are also designed keeping in mind the multiple needs for our guests when organizing a family celebration such as weddings & anniversaries or organizations planning a product launch with multiple categories of guests and invitees.
          </h5>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {rooms.map((item, index) => (
                  <div key={index} className="card" style={{ width: '28rem', margin: '30px' }}>
                      <img src={item.img} className="card-img-top" alt={item.name} width="18rem" height='400px'/>
                      <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item">{item.price}</li>
                      </ul>
                      <div className="card-body">
                          <a href="#" className="card-link">Show more</a>
                      </div>
                  </div>
              ))}
          </div>
      </div> </div>
  );
}

export default Rooms;


