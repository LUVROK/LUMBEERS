import React, { useEffect } from 'react';
import "./preloader.css";
import imageLogoPreolder from '../../images/logoPreolder.png'

const Preloader = () => {
    useEffect(() => {
        setInterval(() => {
            // document.getElementById("preloader").style = "opacity: 0 !important;";
        }, 1800);
    }, []);

    return (
        <div className="preloader">
            <div className="logoPreolder" id="preloader">
                {/* LUMBEERS */}
                <img src={imageLogoPreolder} alt="" className="imageLogoPreolder blob"  />
            </div>
        </div>
    )
};

export default Preloader;
