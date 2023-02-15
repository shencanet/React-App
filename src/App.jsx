import { Fragment } from "react";
import "./App.css";
import Testimonial from "./components/Testimonials";
import photo1 from "./imagenes/profile1.jpg"
import photo2 from "./imagenes/profile2.jpg"
import photo3 from "./imagenes/profile3.jpg"

function App() {
  return (
    <Fragment>
      <Testimonial
        img={photo1}
        name="Anna Perez"
        stars="⭐⭐⭐⭐"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        esse, provident assumenda aliquid consequuntur totam, earum veniam quia
        nesciunt rem sequi natus debitis cupiditate dolore, necessitatibus
        maxime fuga dolorem repudiandae."
      />
       <Testimonial
        img={photo2}
        name="Juan perez"
        stars="⭐⭐⭐"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        esse, provident assumenda aliquid consequuntur totam, earum veniam quia
        nesciunt rem sequi natus debitis cupiditate dolore, necessitatibus
        maxime fuga dolorem repudiandae."
      />
       <Testimonial
        img={photo3}
        name="Alfonso Perex"
        stars="⭐"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        esse, provident assumenda aliquid consequuntur totam, earum veniam quia
        nesciunt rem sequi natus debitis cupiditate dolore, necessitatibus
        maxime fuga dolorem repudiandae."
      />
    </Fragment>
  )
}

export default App;
