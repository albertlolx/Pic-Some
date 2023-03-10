import React from "react";

export default function CartItem(props) {
    const [hovered, setHovered] = React.useState(false);

    function forceUpdate(){
        props.setValue(value => value + 1);
    }

    function removeItem() {
        props.setCart((prevCart) => {
            let newCart = prevCart;
            const index = prevCart.indexOf(props.item);
            if (index !== -1) {
                newCart.splice(index, 1);
                forceUpdate();
            }

            return newCart;
        });
    }

    return (
        <section className="cart-item">
            <div className="cart-item-main">
                <i class={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
                    onClick={removeItem}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                ></i>
                <img src={props.image} className="cart-item-img"/>
            </div>
            <h2 className="price">$5.99</h2>
        </section>
    )
}