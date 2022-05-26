import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Killers = () => {

    let navigate = useNavigate();

    const [killers, setKillers] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8080/api/productos/killers/todos')
            .then(response => response.json())
            .then(data=>setKillers(data));
    },[])

    const detailViewOnClick  = (id) =>{
        navigate(`/products/${id}` )
    }

    return(
        <>
            <h1>Killers</h1>
            <div className='cardsContainer'>
            <div className='cardsWrap'>
            {!killers ? 'Loading...' : killers.map((killer)=>(
                <div key={killer.id} onClick={() => detailViewOnClick(killer.id)} className="productCardContainer" style={{background: `url(${killer.imagenCuerpo})`, backgroundRepeat: 'no-repeat' , backgroundSize: 'cover', backgroundPosition: 'center'} }>
                        <h1 className='cardTextTitle'>{killer.nombre}</h1>
                </div>
            ))}
            </div>
            </div>
        </>
    )
}

export default Killers;