import React from 'react';
import "./faq.css";
import Faq from 'react-faq-component';

const FaqComponents = () => {
    const data = {
        title: "",
        rows: [
            {
                title: "Wen Mint / Price / Supply",
                content: "TBD / Degen / TBD"
            },
            {
                title: "Who are the Lumbeers?",
                content: "Lumbeers are lucky mf's, trying their fortune in the casino and getting money raining on them every time. Some will say rigged, well... It's their casino after all."
            },
            {
                title: "Casino",
                content: "Casino will have a lot of games, a lot of lucky lumbeers and a lot of solana degens. Furthermore, Lumbeers will get 80% of the revenue made by the casino."
            },
            {
                title: "More Utility?",
                content: "Staking for native token, Airdrops for Holders, Raffles for NFTs and whitelists, Exclusive DAO for alpha Lumbeers only.\n" +
                    "Remember that this is only the beginning of the #roadmap, once this part will be completed, we will roll out our next banger."
            },
            {
                title: "OG / WL meaning?",
                content: "1️⃣@og will have guaranteed mint, the amount of allowed mints will be disclosed soon.\n"  +
                "2️⃣@whitelisted will have a mint opportunity, but it will be FCFS"
            },
            {
                title: "Where Mint / Wen wallet collection",
                content: "LMNFT/TBA"
            }

    ]};
    return (<div className="faq sect" id="faq">
                <div className="team__wrap block">
                    <div className="faq_h1">
                        FAQ
                    </div>
                        <Faq data={data}
                             styles={{
                            bgColor: "#68516D",
                            titleTextColor: "#ffffff",
                            rowTitleColor: "#ffffff",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#ffffff",
                            arrowColor: "white",
                        }}
                             config={{
                                 arrowIcon: "+",
                             }}/>
                </div>
            </div>
        )
    };

export default FaqComponents;
