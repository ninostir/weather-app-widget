import React from "react";

import styles from "./Details.scss";
import sunrise from "../../../assets/img/sunrise.svg";
import sunset from "../../../assets/img/sunset.svg";
import details from "../../../assets/img/details.svg";
import DetailsData from "./DetailsData";


const Details = (props) => {
    return (
        <div className="widget__details">
            <h2>Details</h2>
            <div className="widget__details__sun">

                <div className="widget__details__sun--sunrise">
                    <img src={sunrise} alt="sunrise"/>
                    <span>TIME</span>
                </div>

                <div className="widget__details__sun--details">
                    <img src={details} alt="details"/>
                </div>

                <div className="widget__details__sun--sunset">
                    <img src={sunset} alt="sunset"/>
                    <span>TIME</span>
                </div>

            </div>
            <div className="widget__details__data">
                <DetailsData temp="18" title="RealFeel"/>
                <DetailsData temp="18" title="Humidity"/>
                <DetailsData temp="18" title="Wind"/>
                <DetailsData temp="18" title="Pressure"/>
            </div>
        </div>
    )
}

export default Details;