import React from "react";
import styles from "./HourlyForecast.scss";
const HourlyForecast = (props) => {
    const {forecast} = props;
    return (
        <div className="hourly__forecast">
            {
                forecast.map((hour, i) => {
                    const stateImg = "../../../assets/img/"+hour.state+".png";
                    return (
                        <div className="hourly__forecast--item" key={i}>
                            <span>{hour.hour}</span>
                            <img src={stateImg} alt="weather state icon"/>
                            <span>{hour.temperature} C</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HourlyForecast;