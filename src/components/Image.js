import React from "react";

export default function Image(props) {
    const [hovered, setHovered] = React.useState(false);
    const [value, setValue] = React.useState(0);

    function isFavourited() {
        for (let i=0; i < props.favourited.length; i++) {
            if (props.favourited[i].index === props.id) {
                return true;
            }
        }
    }

    function forceUpdate(){
        setValue(value => value + 1);
    }

    return (
        <div className={`image-container ${props.class}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="img-actions">
                <i className={`
                    ${isFavourited() ? "ri-heart-fill visible" : "ri-heart-line"} 
                    ${hovered ? "visible" : "invisible"}`}
                    onClick={() => {
                        if (isFavourited()) {
                            let arry = props.favourited;
                            for (let i=0; i<props.favourited.length; i++) {
                                if (props.favourited[i].index === props.id) {
                                    arry.splice(i, 1);
                                }
                            }
                            props.setFavourited(arry);
                            forceUpdate();
                        } else {
                            props.setFavourited(prevFavourite => [...prevFavourite, {index: props.id}])
                            forceUpdate();
                        }
                    }}
                ></i>
                <i className={`ri-add-circle-line 
                    ${hovered ? "visible" : "invisible"}`}
                    onClick={() => props.addToCart(props.id, props.url)}
                ></i>
            </div>
            <img className="img" src={props.url}/>
        </div>
    )
}