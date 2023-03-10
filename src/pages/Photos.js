import React from "react";
import Image from "../components/Image";
import imagesData from "../images";

export default function Photos(props) {
    function getClass(index) {
        if (index % 5 === 0) {
            return 'big';
        }
        else if (index % 6 === 0) {
            return 'wide'
        } else {
            return "normal";
        }
    }

    const allImages = imagesData.map((imageData , i) => {
        return (
            <Image
                item={imageData}
                url={imageData.url} 
                id={imageData.id} 
                addToCart={props.addToCart} 
                class={getClass(i)} 
                favourited={props.favourited}
                setFavourited={props.setFavourited}
            />
        )
    })

    return (
        <main className="images-wrapper">
            {allImages}
        </main>
    )
}