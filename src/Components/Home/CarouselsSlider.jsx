import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselsItems } from '../../Database/Database';
function CarouselsSlider() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="CarouselsSlider-components">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    CarouselsItems.map(items => (
                        <Carousel.Item key={items.id} >
                            <img className="d-block w-100" src={items.image} alt={items.label}/>
                            <Carousel.Caption>
                                <h3>{items.label}</h3>
                                <p>{items.paragraph}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CarouselsSlider