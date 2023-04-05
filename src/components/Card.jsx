export default function Card ({id,name,status,species,gender,origin,image,onClose}){   
   return (
      <div>
       <button onClick={() => onClose(id)}>X</button>
               
                       <h4>{name}</h4>
                       <h4>{status}</h4>
                       <h4>{species}</h4>
                       <h4>{gender}</h4>
                       <h4>{origin}</h4>
                  
         <img src={image} alt='imagen' /> 
      </div>
   );
}
