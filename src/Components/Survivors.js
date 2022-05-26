import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Survivors = () =>{

    let navigate = useNavigate();


    const [survivors, setSurvivors] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8080/api/productos/survivors/todos')
            .then(response => response.json())
            .then(data=>setSurvivors(data));
    },[])

     const detailViewOnClick  = (id) =>{
         navigate(`/products/${id}` )
     }

    return (
        <>
            <h1>Survivors</h1>
            <div className='cardsContainer'>
            <div className='cardsWrap'>
            {!survivors ? 'Loading...' : survivors.map((survivor)=>(
                <div key={survivor.id} onClick={() =>detailViewOnClick(survivor.id)} className="productCardContainer" style={{background: `url(${survivor.imagenCuerpo})`, backgroundRepeat: 'no-repeat' , backgroundSize: 'cover', backgroundPosition: 'center'} }>
                        <h1 className='cardTextTitle'>{survivor.nombre}</h1>
                </div>
            ))}
            </div>
            </div>
        </>
    )
}

export default Survivors;