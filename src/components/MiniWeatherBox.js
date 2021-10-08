import React from 'react';

const baseUrlImage = process.env.REACT_APP_baseUrlImage;

const getDay = (date) => {
   let weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
   return weekdays[new Date(date).getDay()];
};

const MiniWeatherBox = (props) => {
   if (props.weather) {
      return (
         <div className=''>
            <h2>{getDay(props.weather.date)}</h2>
            <h2>
               <img
                  src={baseUrlImage + props.weather.icon + '@2x.png'}
                  alt='icon'
               />
               {props.weather.temp}°C
            </h2>
            <p>Min temp:{props.weather.temp_min}°C </p>
            <p>Max temp:{props.weather.temp_max}°C</p>
         </div>
      );
   } else {
      return <div></div>;
   }
};

export default MiniWeatherBox;
