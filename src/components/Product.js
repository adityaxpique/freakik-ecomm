import React from 'react'
import "../components/Product.css";

const Product = () => {
    return (
        <div className="product">
        <div className="product__info">
            <p>TenZ</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99k</strong>
            </p>
            <div className="product__rating">
            <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
            </div>
        </div>
        <img src="https://img.redbull.com/images/c_crop,w_1619,h_1079,x_144,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2020/4/28/k48b5121qk3ajr0szzmk/cloud9-valorant-tenz" alt=""/>
        <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
