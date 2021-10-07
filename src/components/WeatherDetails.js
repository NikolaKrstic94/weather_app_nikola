import React from 'react';
import { baseUrlImage } from '../api';

const WeatherDetails = (props) => {
    if(props.weather){
        return (
            <div className="col-12 p-3">
                <div className="card col-10 col-md-6 mx-auto">
                    <div className="card-body">
                        <h2>
                            Today in {props.city}
                        </h2>
                        <h2>
                            <img src={baseUrlImage + props.weather.icon + '@4x.png'} alt="background" />
                            {props.weather.weather_main} : {Math.round(props.weather.temp)}&deg;C
                        </h2>
                        <ul>
                            <li>Exact Temperature : {props.weather.temp }°C</li>
                            <li>Min temp : {props.weather.temp_min}°C</li>
                            <li>Max temp : {props.weather.temp_max}°C</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div>

            </div>
        );
    }
}

export default WeatherDetails;
