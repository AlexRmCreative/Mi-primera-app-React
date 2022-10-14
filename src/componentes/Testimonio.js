import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio (props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`foto de ${props.alt}`}
        />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>Adquiridor de {props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

/*Soy un helado de fresa con sabor a fresa, bastante refrescante, con mi color y aromante, te gusta lo que ves 
ya que la fresa te mueve las papilas gustativas que tus ojos huelen*/

export default Testimonio;