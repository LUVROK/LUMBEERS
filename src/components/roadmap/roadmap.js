import React, { useState, useEffect } from 'react';
import './roadmap.css'
import imageBackground from '../../images/aditya-vyas-PzhmEp_aDU4-unsplash.jpg'

const Roadmap = () => {
    return (
        <div className='Roadmap'>
            {/* <div className='RoadmapBackground'>
                <img src={imageBackground} className='RoadmapImageBackground' alt='' />
            </div> */}
            <div className="Roadmap sect">
                {/* <div className='RoadmapBackground'></div> */}
                <div className="block">

                    <div className="Roadmap_top">
                        <h1 className="Roadmap_top_h1">Roadmap</h1>
                        <p className="Roadmap_top_p">
                            We could promise you a lot of things here,
                            but our main principle is to <span className="yellow">underpromise</span> and  <span className="yellow">overdeliver</span>
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            1st PHASE
                        </div>
                        <p className="yellow map_item_p teme">
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
                            2nd PHASE
                        </div>
                        <p className="yellow map_item_p teme">
                            Staking
                        </p>
                        <p className="map_item_p">
                            There will be NO staking. Why would you even need that? We think that it's a thing of the past, and we will avoid staking if it's possible. We want the jpeg to stay in your wallet to remind you that you own a piece of art.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            3rd PHASE
                        </div>
                        <p className="yellow map_item_p teme">
                            Alpha
                        </p>
                        <p className="map_item_p">
                            What is alpha? Alpha is a piece of information that was shared to a small group of individuals. Alpha is a product of a deep understanding of a project. Understanding the true goals of a project's team is a skill. We will teach you that skill. We will hire a few alpha hunters to provide the best quality alpha for our holders. We will get you whitelisted in any project, even if it takes a few raids or $$$.
                        </p>
                    </div>
                    <div className="map_item">
                        <div className='map_item_background'></div>
                        <div className="map_item_h1">
                            4th PHASE
                        </div>
                        <p className="yellow map_item_p teme">
                            Merchandise
                        </p>
                        <p className="map_item_p">
                            Merchandise is not as easy as it seems. And it's not free as well. The logistics, the manufacturing process, the distribution is definitely hard to master. But we know a guy who knows a guy who once sold a t-shirt on ebay. (This is a joke, we know a lot about merchandise, and we'll walk you through this process so you can learn about the industry from the inside)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Roadmap;