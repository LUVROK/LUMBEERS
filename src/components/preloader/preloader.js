import React, { useEffect } from 'react';
import "./preloader.css";

const Preloader = () => {
    useEffect(() => {
        setInterval(() => {
            // document.getElementById("preloader").style = "opacity: 0 !important;";
        }, 1800);
    }, []);

    return (
        <div className="preloader">
            <div className="logo" id="preloader">
                LUMBEERS
            </div>
        </div>
    )
};

export default Preloader;
