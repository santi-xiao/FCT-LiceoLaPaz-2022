import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetail = () =>{

    const {id} = useParams();

    const [product, setProduct] = useState(null);
 
    useEffect(() =>{
        fetch(`http://localhost:8080/api/productos/producto/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id])

    return (
        <>
            {!product ? <h1>Loading</h1> : 
                <>
                    <h1>{product.nombre}</h1>
                    <div className='detailsContainer'>
                        <div className='imageContainer'>
                            <img src={product.imagenCuerpo} alt={product.nombre} />
                        </div>
                        <div className='infoContainer'>
                            <p><span>Name: </span>{product.nombre}</p>
                            <p><span>Category: </span>{product.categoria.nombre}</p>
                            <p><span>Description: </span>{product.descripcion}</p>
                            <p><span>Price: </span>{product.precio} €</p>
                        </div>
                            <div className='btn'>
                                <AddShoppingCartIcon />
                            </div>
                    </div>
                </>        
             }
        </>
    )

}

export default ProductDetail;