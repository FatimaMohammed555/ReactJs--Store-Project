
import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
 const  {product} = props;
//const product = props.product;
    return (
        <div>
                    <div className="card mb-2">
                        <img src={product.image} className="card-img-top" alt="..." style={{height:'300px'}} />
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}$</p>
                        <Link to={'/products/' + product.id} className="btn btn-primary">Details</Link>
                      </div>
                    </div>

        </div>
    )
}



