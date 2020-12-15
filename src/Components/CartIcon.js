
import React from 'react';
import './CartIcon.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

 function CartIcon(props) {
    return (
        <div id="cart-icon">
            <Link to="/carts">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="badge badge-danger">{props.totalQuntaty}</span>  
            </Link>          
        </div>
    )
}

const mapStateToProps = (state) => {
return{
    totalQuntaty:state.cart.reduce((total , item) => total + parseInt(item.quantity) , 0),

    //totalQuntaty:state.cart.reduce((total , item) => total + parseInt(item.quantity) , 0),
};
} 

export default connect(mapStateToProps)(CartIcon);
