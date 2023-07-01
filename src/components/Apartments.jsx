
import data from '../assets/data.json';
import './Apartments.css'

const Apartments = () => {

  return (
    <div>
      <h1 className="text-center">Apartment List</h1>
      <div className="rentals">
        {data.map((rental, index) => {
          return (
            <div key={index} className="rentalContainer">
              <div>
                <img src={rental.photo} alt="apartment" />
              </div>
              <div>
                <div>
                  {rental.superHost && <div>SUPER HOST</div> }
                </div>
                <div>
                  {rental.type}
                </div>
                <div>
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