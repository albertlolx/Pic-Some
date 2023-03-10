import {Link} from "react-router-dom"
import React from "react";

export default function Header(props) {

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`${props.cart.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"}`}></i></Link>
        </header>
    )
}