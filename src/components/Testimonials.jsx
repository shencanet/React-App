import  './Testimonials.css'

function Testimonial() {
  return (
    <div className="Testimonial__container">
      <div>
      <img src="" alt="" className="Testimonial__photo" />

      <h2 className="Testimonial__name">Juan Perez</h2>
      </div>
      
      <div className='Testimonial__content'>
      <p className='Testimonial__stars'>⭐⭐⭐⭐⭐</p>
      <p className='Testimonial__text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        esse, provident assumenda aliquid consequuntur totam, earum veniam quia
        nesciunt rem sequi natus debitis cupiditate dolore, necessitatibus
        maxime fuga dolorem repudiandae.
      </p>
    </div>
    </div>
  );
}

export default Testimonial;
