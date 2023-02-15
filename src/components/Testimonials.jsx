import  './Testimonials.css';
import photo3 from '../imagenes/profile3.jpg'

function Testimonial (props) {
  return (
    <div className="Testimonial__container">
      <div>
      <img 
      src= {props.img} alt="photo profile" className="Testimonial__photo" ></img>

      <h2 className="Testimonial__name">{props.name}</h2>
      </div>

      <div className='Testimonial__content'>
      <p className='Testimonial__stars'>{props.stars}</p>
      <p className='Testimonial__text'>{props.text}
      
      </p>
    </div>
    </div>
  );
}

export default Testimonial;
