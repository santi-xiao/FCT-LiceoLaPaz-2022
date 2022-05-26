import React, { useEffect, useState } from 'react'

const Survivors = () =>{

    const [survivors, setSurvivors] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8080/api/productos/survivors/todos')
            .then(response => response.json())
            .then(data=>setSurvivors(data));
    },[])

   const displayData = (data) =>{
        if(data != null){
           data.map((product) => (
               <div>
                   <p>{product.nombre}</p>
                   <p>{product.precio}</p>
               </div>
           ))
        }
    }
       

    return (
        <>
            <h1>Survivors</h1>
            {displayData(survivors)}
        </>
    )
}

export default Survivors;