import React from 'react'
import "./css/Timeline.css"

const Timeline = () => {
    return (
        <div>
            <h2 className="text-4xl text-center  text-white m-3 mb-3">Roadmap</h2>
            <div className="flex justify-center item-center text-center">
            <ul>
                <li style={{ '--accent-color': '#41516C' }}>
                    <div className="date">2023 - APRIL</div>
                    <div className="title">Launch </div>
                    <div className="descr">
                        Fair launch of squish protocol with 20K liquidity locked. 
                    </div>
                </li>
                <li style={{ '--accent-color': '#FBCA3E' }}>
                    <div className="date">2023 - may</div>
                    <div className="title">Farming platform</div>
                    <div className="descr">
                        Launch of farming platform with BNB, czred, czusd as reward.
                    </div>
                </li>
                <li style={{ '--accent-color': '#E24A68' }}>
                    <div className="date">2012</div>
                    <div className="title">2023 - june</div>
                    <div className="descr">
                        Adding Partner Token as Reaward on our farming platform.
                    </div>
                </li>
                
            </ul>
            </div>
        </div>
    )
}

export default Timeline