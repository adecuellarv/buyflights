import React, { useEffect, useState } from "react";
import img1 from './images/1.jpeg';
import img2 from './images/4.jpeg';
import img3 from './images/5.jpeg';
import './styles.scss';

let count = 1;
const Slider = () => {
    const [img, setImg] = useState(img1);
    useEffect(() => {
        setInterval(() => {
            if (count < 3) count++; else count = 1;
            switch (count) {
                case 1:
                    setImg(img1)
                    break;
                case 2:
                    setImg(img2)
                    break;
                case 3:
                    setImg(img3)
                    break;
                default:
                    break;
            }
        }, 3700);
    }, []);
    return (
        <img className="img-slider" src={img} alt="slider" />
    );
};

export default Slider;