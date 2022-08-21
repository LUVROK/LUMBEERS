import React, { useState, useEffect } from 'react';
import './roadmap.css'
import imageBackground from '../../images/galarysecback.jpg'

const Roadmap = () => {
    return (
        <div className='Roadmap'>
            <div className='RoadmapBackground'>
            </div>

            <img src={imageBackground} className='RoadmapImageBackground' alt='' />
            <div className="Roadmap sect">
                {/* <div className='RoadmapBackground'></div> */}
                <div className="block">

                    <div className="Roadmap_top">
                        <h1 className="Roadmap_top_h1">Roadmap</h1>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            1st PHASE
                        </div>
                        <p className="yellow1 map_item_p teme">
                            Casino & Revshare
                        </p>
                        <p className="map_item_p">
                            More than 15 games, from plinko to crash. The fastest casino on Solana. 80% of profits distributed back to holders. More info will be announced soon, maybe we'll even ask some of you to test the casino and get your feedback.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            2nd PHASE
                        </div>
                        <p className="yellow1 map_item_p teme">
                            Art
                        </p>
                        <p className="map_item_p">
                            Our biggest strength. We want to be the best art-oriented project. While the process of creating 3d art is hard and expensive, we find it more valuable than hand-drawn art.
                            Mutations: mutate your jpeg, create an alternate version.
                            Upgrade: make your jpegs animated. It will look awesome, we promise you.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            3rd PHASE
                        </div>
                        <p className="yellow map_item_p teme">
                            Staking
                        </p>
                        <p className="map_item_p">
                            We have the best tokenomics experts on our side. Staking your NFT's will reward you with our token, which will be used for raffles, auctions, art upgrade and so much more cool stuff. There will be no liquidity pool, thus we will build our own token exchange.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            4th PHASE
                        </div>
                        <p className="yellow map_item_p teme">
                            Alpha
                        </p>
                        <p className="map_item_p">
                            What is alpha? Alpha is a piece of information that was shared to a small group of individuals. Alpha is a product of a deep understanding of a project. Understanding the true goals of a project's team is a skill. We will teach you that skill. We will hire a few alpha hunters to provide the best quality alpha for our holders. We will get you whitelisted in any project, even if it takes a few raids or $$$.
                        </p>
                    </div>
                    <p className="Roadmap_top_p">
                        After the first 4 steps are done, Roadmap 2.0 will be announced.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Roadmap;