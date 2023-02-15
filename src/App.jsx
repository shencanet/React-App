import { useState } from "react";
import "./App.css";
import Button from "./components/button"
import Testimonial from "./components/Testimonials";
import photo1 from "./imagenes/profile1.jpg"
import photo2 from "./imagenes/profile2.jpg"
import photo3 from "./imagenes/profile3.jpg"

function App() {
  const [theme, setTheme] = useState('light');

 function onClickFn(){
    if(theme == 'light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }

  }
  
  
  

  return (
    
    <div className={'main-container ' + theme}>
        <Button onClickFn =  {onClickFn}
        value = {theme == 'dark' ? 'light' : 'dark' }
        />
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
        name="Alfonso Perez"
        stars="⭐"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        esse, provident assumenda aliquid consequuntur totam, earum veniam quia
        nesciunt rem sequi natus debitis cupiditate dolore, necessitatibus
        maxime fuga dolorem repudiandae."
      />
    </div>
  )
}

export default App;
