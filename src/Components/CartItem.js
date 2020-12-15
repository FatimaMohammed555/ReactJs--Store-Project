
import React from "react";
import {removeFromCart} from "../Store/actions/actions";
import { connect } from "react-redux";



 function ProductItem(props){
    const {item , index} = props;
    const {product} = item;


    return (
        <div className="card mb-2">
            <img src={product.image} className="card-img-top" alt="..." style={{height:'300px'}} />
            <div className="card-body">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <p className="card-text">
                    Price :{product.price}$
                    <br />
                    Quantity: {item.quantity}
                    <br />
                    Total: {product.price * item.quantity} $
                </p>
                <button onClick={() => props.removeFromCart(index)} className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);
