import React from "react";
import styles from "../../styles/main.scss";
import Widget from "./WeatherWidget/Widget";
import data from "../data/weather";
console.log(data);
const App = () => {
    return (
        <>
            <h1>Weather Forecast Widget</h1>
            <Widget data={data[0]}>

            </Widget>
        </>
    )
}

export default App;