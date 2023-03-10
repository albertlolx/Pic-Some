import React from "react";
import CartItem from "../components/CartItem";

export default function Cart(props) {
    const [value, setValue] = React.useState(0);

    const cartJSX = props.cart.map((item) => {
        return <CartItem 
            image={item.url} 
            key={item.id} 
            item={item} 
            cart={props.cart} 
            setCart={props.setCart} setValue={setValue}/>
    })

    const totalPrice = (props.cart.length*5.99).toFixed(2);

    if (props.cart.length) {
        return (
            <main className="cart-container">
                <h1 className="check-out">Check Out</h1>
                {cartJSX}
                <h1 className="total-price">Total:  ${totalPrice}</h1>
                <button className="place-order-btn">Place Order</button>
            </main>
        )
    }
}