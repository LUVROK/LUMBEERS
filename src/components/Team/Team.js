import React from 'react';
import "./Team.css";
// import ubisoft from "../../images/Ubisoft.png";
// import dreamworks from "../../images/Dreamworks.png";
// import Lionsgate from "../../images/LionsGate.png";
const Team = () => {
    return (
        <div className="team">
            <div className="team__wrap">
                <div className='backgroudnTeam'></div>
                <div className="team_h1">
                    The Team
                </div>
                <div className="team__container">
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='Eugene'></div>
                        </div>
                        <h2 className="team_card_Title">
                            Kirill Storn
                        </h2>
                    </div>
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='Andrey'></div>
                        </div>
                        <h2 className="team_card_Title">
                            Andrey Blakil
                        </h2>
                    </div>
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='Nikita'></div>
                        </div>
                        <h2 className="team_card_Title">
                            Alex B90
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Team;
