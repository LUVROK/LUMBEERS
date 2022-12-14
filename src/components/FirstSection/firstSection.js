import React, { useEffect } from 'react';
import "./firstSection.css";
import '../fonts/icekingdomfrozencyrillic_bold.ttf';
import imageBackground from '../../images/backgroundWrapper.png';
import LumberWrapper from '../../images/LumberWrapper.png';
import $ from 'jquery';
// import wrapvideo from "../../images/loading.mp4";

const FirstSection = () => {
    useEffect(() => {
        window.onload = function () {
            let logoWrappertext = document.querySelector(".logoWrappertext");
            let LumberWrapper = document.querySelector(".LumberWrapperCont");
            // let MintNow = document.querySelector(".MintNow");
            let linkSocial = document.querySelector(".linkSocial");

            window.scrollTo(0, 0);

            let gradientMixBlind2 = document.querySelector(".gradientMixBlind2");
            let faq = document.getElementById("faq");
            let position_faq = faq.getBoundingClientRect();
            let top = position_faq.top;

            if ($(document).scrollTop() >= top - 500) {
                gradientMixBlind2.style.zIndex = '101';
            }
            else {
                gradientMixBlind2.style.zIndex = '99';
            }


            if ($(document).scrollTop() >= $(window).height() * 1.2) {
                logoWrappertext.style.zIndex = '-9999';
                LumberWrapper.style.zIndex = '-9999';
                linkSocial.style.zIndex = '-9999';
                // MintNow.style.zIndex = '-9999';
            }
            else if ($(document).scrollTop() >= $(window).height() * 0.8) {
                // MintNow.style.zIndex = '-9999';
                linkSocial.style.zIndex = '-9999';
            }
            else {
                logoWrappertext.style.zIndex = '100';
                LumberWrapper.style.zIndex = '100';
                // MintNow.style.zIndex = '1';
                linkSocial.style.zIndex = '100';
            }

            window.addEventListener("scroll", function () {
                if ($(document).scrollTop() >= top - 500) {
                    gradientMixBlind2.style.zIndex = '101';
                }
                else {
                    gradientMixBlind2.style.zIndex = '99';
                }
                if ($(document).scrollTop() >= $(window).height() * 1.2) {
                    logoWrappertext.style.zIndex = '-9999';
                    LumberWrapper.style.zIndex = '-9999';
                    linkSocial.style.zIndex = '-9999';

                }
                else if ($(document).scrollTop() >= $(window).height() * 0.8) {
                    // MintNow.style.zIndex = '0';
                    linkSocial.style.zIndex = '-9999';
                }
                else {
                    logoWrappertext.style.zIndex = '100';
                    LumberWrapper.style.zIndex = '100';
                    // MintNow.style.zIndex = '1';
                    linkSocial.style.zIndex = '100';
                }
            })
        }
    }, [])

    return (
        <div className="Wrapper">
            <div className='gradientMixBlind'>
                <img src={imageBackground} className='imageBackground' alt='' />
                <h1 className='logoWrappertext'>LUMBEERS</h1>
            </div>
            <div className='LumberWrapperCont'>
                <img src={LumberWrapper} className='LumberWrapper' alt='' />
            </div>
            <div className='linkSocial'>
                <a href="https://twitter.com/lumbeers" className="links" target="_blank" rel="noopener noreferrer">
                    <svg width="50" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="limk_svg" fill='#FFFFFF'>
                        <g clipPath="url(#clip0)">
                            <path d="M56 13.874C54.086 14.724 52.03 15.296 49.872 15.554C52.076 14.234 53.766 12.144 54.562 9.65201C52.502 10.874 50.218 11.762 47.786 12.242C45.84 10.168 43.068 8.87201 40 8.87201C34.108 8.87201 29.332 13.65 29.332 19.54C29.332 20.376 29.428 21.192 29.608 21.97C20.742 21.526 12.882 17.278 7.61799 10.822C6.70199 12.398 6.17599 14.23 6.17599 16.188C6.17599 19.888 8.05798 23.154 10.92 25.066C9.17198 25.01 7.52598 24.53 6.08799 23.732C6.08799 23.778 6.08799 23.82 6.08799 23.866C6.08799 29.036 9.76398 33.348 14.646 34.326C13.752 34.57 12.808 34.7 11.834 34.7C11.148 34.7 10.478 34.632 9.82798 34.51C11.186 38.748 15.126 41.834 19.794 41.92C16.144 44.782 11.544 46.488 6.54399 46.488C5.68399 46.488 4.83399 46.438 3.99799 46.338C8.71999 49.364 14.326 51.13 20.352 51.13C39.976 51.13 50.704 34.874 50.704 20.776C50.704 20.314 50.694 19.854 50.674 19.396C52.76 17.89 54.57 16.012 56 13.874Z" />
                        </g>
                    </svg>
                </a>
                <a href="https://discord.gg/KRahEBWQea" className="links" target="_blank" rel="noopener noreferrer">
                    <svg className="limk_svg" width="50" height="60" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg" fill='#FFFFFF'>
                        <g clipPath="url(#clip0)">
                            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="71" height="55" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            {/* <div className='MintNow'>MintNow</div> */}

        </div>
    )
};

export default FirstSection;
