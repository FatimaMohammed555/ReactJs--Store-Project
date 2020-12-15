

import React , {Component}from "react";
import CartItem from "./../Components/CartItem";
import {getAllProducts} from "../API/products";
import { connect } from "react-redux";
import {clearCart} from "../Store/actions/actions";



class Carts extends Component{

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };

    render(){
        return (
            <div>
                    <div className="container">
                    <h1>Cart</h1>
                      <div className="row">
                      {this.props.cartItems.map((item , index) => 
                        <div className='col-3' key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                      </div>
                      <br />
                <h3>
                Total: {this.props.total}$
                </h3>
                <button className="btn btn-primary btn-block" onClick={this.placeOrder}>Palace Order</button>
<br/>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.cart,
        total:state.cart.reduce((total , item) => total + item.product.price * item.quantity , 0)

    };
    } 

    const mapDispatchToProps = (dispatch) => {
        return {
            clearCart: () => dispatch(clearCart()),
        };
    }

export default connect(mapStateToProps , mapDispatchToProps)(Carts)
