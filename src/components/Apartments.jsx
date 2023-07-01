
import data from '../assets/data.json';
import star from '../assets/star-24.png'
import './Apartments.css'

const Apartments = () => {

  return (
    <div>
      <h1 className="text-center">Apartment List</h1>
      <div className="rentals">
        {data.map((rental, index) => {
          return (
            <div key={index} className="rentalContainer">
              <div className='rentalImageDiv'>
                <img src={rental.photo} alt="apartment" />
              </div>
              <div className='rentalDetails'>
                <div>
                  {rental.superHost && <div className='superHost'>SUPER HOST</div> }
                </div>
                <div>
                  {rental.type}
                </div>
                <div>
                  <img src={star} alt="ratings" style={{width:'20px', height:'20px'}} />
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