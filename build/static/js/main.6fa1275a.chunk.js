(this.webpackJsonpweather_diy=this.webpackJsonpweather_diy||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(9),i=a.n(r),s=(a(15),a(7)),o=a.n(s),l=a(10),h=a(8),d=a(2),u=a(3),j=a(5),m=a(4),p=(a(17),a.p+"static/media/images.8149da86.png"),b=a(0),x=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({city:e.target.value})},n.handleSubmit=function(e){n.props.makeApiCall(n.state.city)},n.state={city:""},n}return Object(u.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"col-12 py-4 header",children:[Object(b.jsxs)("h1",{className:"col-12 header-title",children:[Object(b.jsx)("img",{className:"logo",src:p,alt:"logo"}),"Weather App"]}),Object(b.jsxs)("div",{className:"py-2 search-wrapper",children:[Object(b.jsx)("input",{type:"text",className:"search form-control",id:"location","aria-describedby":"",placeholder:"Enter City name",onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",onClick:this.handleSubmit,className:"fa fa-search"})]})]})}}]),a}(n.Component),y="6557810176c36fac5f0db536711a6c52",O="http://openweathermap.org/img/wn/",f=function(e){return e.weather?Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("h2",{children:(t=e.weather.date,["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][new Date(t).getDay()])}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("img",{src:O+e.weather.icon+"@2x.png",alt:"icon"}),e.weather.temp,"\xb0C"]}),Object(b.jsxs)("p",{children:["Min temp:",e.weather.temp_min,"\xb0C "]}),Object(b.jsxs)("p",{children:["Max temp:",e.weather.temp_max,"\xb0C"]})]}):Object(b.jsx)("div",{});var t},w=function(e){return e.weather?Object(b.jsx)("div",{className:"col-12 p-3",children:Object(b.jsx)("div",{className:"card col-10 col-md-6 mx-auto",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h2",{children:["Today in ",e.city]}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("img",{src:O+e.weather.icon+"@4x.png",alt:"background"}),e.weather.weather_main," : ",Math.round(e.weather.temp),"\xb0C"]}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Exact Temperature : ",e.weather.temp,"\xb0C"]}),Object(b.jsxs)("li",{children:["Min temp : ",e.weather.temp_min,"\xb0C"]}),Object(b.jsxs)("li",{children:["Max temp : ",e.weather.temp_max,"\xb0C"]})]})]})})}):Object(b.jsx)("div",{})},g=(a(19),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).updateState=function(e){n.setState({city:e.city.name,lon:e.city.coord.lon,lat:e.city.coord.lat})},n.updateStateSecond=function(e){for(var t=[],a=0;a<5;a++)t.push({temp:e.daily[a].temp.day,date:n.timeConverter(e.daily[a].dt),weather_main:e.daily[a].weather[0].main,weather_desc:e.daily[a].weather[0].description,temp_min:e.daily[a].temp.min,temp_max:e.daily[a].temp.max,icon:e.daily[a].weather[0].icon});n.setState(Object(h.a)(Object(h.a)({},n.state),{},{days:t}))},n.makeApiCall=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&APPID=").concat(y)).then((function(e){return e.json()})).then((function(e){n.updateState(e),console.log(e),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.city.coord.lat,"&lon=").concat(e.city.coord.lon,"&exclude=hourly,minutely&units=metric&appid=").concat(y)).then((function(e){return e.json()})).then((function(e){n.updateStateSecond(e),console.log(e)})).catch((function(e){return console.log(e),!1}))})).catch((function(e){return alert("You've entered an invalid city, click OK and try again"),!1}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={city:"",lon:"",lat:"",days:[]},n}return Object(u.a)(a,[{key:"timeConverter",value:function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},{key:"render",value:function(){var e=this,t=function(){var t=e.state.days.slice(1).map((function(e){return Object(b.jsx)("li",{className:"weather-box",children:Object(b.jsx)(f,{weather:e})},e.date)}));return Object(b.jsx)("ul",{className:"weather-box-list",children:t})};return Object(b.jsxs)("div",{className:" main",children:[Object(b.jsx)(x,{makeApiCall:this.makeApiCall}),Object(b.jsx)(w,{weather:this.state.days[0],city:this.state.city}),Object(b.jsx)(t,{})]})}}]),a}(n.Component)),v=g;var C=function(){return Object(b.jsx)(v,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6fa1275a.chunk.js.map