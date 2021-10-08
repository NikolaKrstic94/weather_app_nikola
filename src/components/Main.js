import React, { Component } from 'react';
import Header from './Header';
import MiniWeatherBox from './MiniWeatherBox';
import WeatherDetails from './WeatherDetails';
import './Main.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         city: '',
         lon: '',
         lat: '',
         days: [],
      };
   }

   updateState = (data) => {
      this.setState({
         city: data.city.name,
         lon: data.city.coord.lon,
         lat: data.city.coord.lat,
      });
   };

   updateStateSecond = (data) => {
      let days = [];
      for (let i = 0; i < 5; i++) {
         days.push({
            temp: data.daily[i].temp.day,
            date: this.timeConverter(data.daily[i].dt),
            weather_main: data.daily[i].weather[0].main,
            weather_desc: data.daily[i].weather[0].description,
            temp_min: data.daily[i].temp.min,
            temp_max: data.daily[i].temp.max,
            icon: data.daily[i].weather[0].icon,
         });
      }

      this.setState({
         ...this.state,
         days: days,
      });
   };

   timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var months = [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec',
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =
         date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
      return time;
   }

   makeApiCall = async (city) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`
      )
         .then((response) => response.json())
         .then((response) => {
            this.updateState(response);
            console.log(response);

            // drugi API call
            fetch(
               `https://api.openweathermap.org/data/2.5/onecall?lat=${response.city.coord.lat}&lon=${response.city.coord.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
            )
               .then((response) => response.json())
               .then((response) => {
                  this.updateStateSecond(response);
                  console.log(response);
               })
               .catch((err) => {
                  console.log(err);
                  return false;
               });
         })
         .catch((err) => {
            alert("You've entered an invalid city, click OK and try again");
            return false;
         });


   };

   render() {
      const MiniWeatherBoxes = () => {
         const weatherBoxes = this.state.days.slice(1).map((day) => (
            <li key={day.date} className='weather-box'>
               <MiniWeatherBox weather={day} />
            </li>
         ));

         return <ul className='weather-box-list'>{weatherBoxes}</ul>;
      };

      return (
         <div className='container'>
            <div className='main'>
               <Header makeApiCall={this.makeApiCall} />
               <WeatherDetails
                  weather={this.state.days[0]}
                  city={this.state.city}
               />
               <MiniWeatherBoxes />
            </div>
         </div>
      );
   }
}

export default Main;
