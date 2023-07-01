
import data from '../assets/data.json';
import star from '../assets/star-24.png'
import './Apartments.css'

const Apartments = () => {

  return (
    <div>
      <h1>Apartment List</h1>
      <div className="rentals">
        {data.map((rental, index) => {
          return (
            <div key={index} >
              <div >
                <img src={rental.photo} alt="apartment" />
              </div>
              <div className='rentalDetails'>
                <div className='rentalHostType'>
                  <div>
                    {rental.superHost && <div className='superHost'>SUPER HOST</div> }
                  </div>
                  <div>
                    {rental.type}
                  </div>
                </div>
                <div>
                    <img src={star} alt="ratings" style={{width:'18px', height:'18px'}} />
                    {rental.rating}
                  </div>
              </div>
              <h4>{rental.title}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Apartments;