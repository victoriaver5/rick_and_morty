import Card from './Card';

export default function Cards({characters}) {
   return (
       <div>
         {
            characters.map (({id,name,status,species,gender,origin,image,onClose}) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose} 
                  />
            )
         })  
      }
    </div>
   )
}
