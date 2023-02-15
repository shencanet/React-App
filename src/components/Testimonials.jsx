import  './Testimonials.css';
import photo3 from '../imagenes/profile3.jpg'

function Testimonial ({img, name, stars, text}) {
  return (
    <div className="Testimonial__container">
      <div>
      <img 
      src= {img} alt="photo profile" className="Testimonial__photo" ></img>

      <h2 className="Testimonial__name">{name}</h2>
      </div>

      <div className='Testimonial__content'>
      <p className='Testimonial__stars'>{stars}</p>
      <p className='Testimonial__text'>{text}
      
      </p>
    </div>
    </div>
  );
}

export default Testimonial;
