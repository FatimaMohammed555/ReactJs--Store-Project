
import React , { Component }from 'react';
import ProductItem from "./../Components/ProductItem";
import {getAllProducts} from "../API/products";


export default class Products extends Component {

state = {
    products:[]
}

    componentDidMount() {
        getAllProducts().then(data => {
            this.setState({
                products:data
                          })
            console.log(data)});
    }

    render(){
        return (
            <div>
                    <div className="container">
                    <h1>Products</h1>
                      <div className="row">
                        {this.state.products.map(prod =>
                      <div className={'col-md-4 col-sm-6'} key={prod.id}>
                          <ProductItem product={prod}/>
                      </div>
                        )}
                      </div>
                    </div>
            </div>
        )
    }
    
}


