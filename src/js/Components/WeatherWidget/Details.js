import React from "react";

import styles from "./Details.scss";
import sunrise from "../../../assets/img/sunrise.svg";
import sunset from "../../../assets/img/sunset.svg";
import detailsImg from "../../../assets/img/details.svg";
import DetailsData from "./DetailsData";


const Details = (props) => {
    const details = props.details;

    return (
        <div className="widget__details">
            <h2>Details</h2>
            <div className="widget__details__sun">

                <div className="widget__details__sun--sunrise">
                    <img src={sunrise} alt="sunrise"/>
                    <span>{details.sunrise}</span>
                </div>

                <div className="widget__details__sun--details">
                    <img src={detailsImg} alt="details"/>
                </div>

                <div className="widget__details__sun--sunset">
                    <img src={sunset} alt="sunset"/>
                    <span>{details.sunset}</span>
                </div>

            </div>
            <div className="widget__details__data">
                <DetailsData temp={details.feel} unit="°C" title="RealFeel"/>
                <DetailsData temp={details.humidity} unit="%" title="Humidity"/>
                <DetailsData temp={details.wind} unit="m/s" title="Wind"/>
                <DetailsData temp={details.pressure} unit="hPa" title="Pressure"/>
            </div>
        </div>
    )
}

export default Details;