import React, { Component } from 'react';
import './Header.css';
import logo from '../images.png';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         city: '',
      };
   }
   handleChange = (e) => {
      this.setState({
         city: e.target.value.trim(),
      });
   };
   handleSubmit = (e) => {
      this.props.makeApiCall(this.state.city);
   };

   render() {
      return (
         <div className='container'>
            <div className=' col-12 py-4 header'>
               <h1 className='col-12 header-title'>
                  <img className='logo col-sm-2' src={logo} alt='logo' />
                  Weather App
               </h1>

               <div className='py-2 search-wrapper col-md-8 mx-auto'>
                  <input
                     type='text'
                     className='search form-control'
                     id='location'
                     aria-describedby=''
                     placeholder='Enter City name'
                     onChange={this.handleChange}
                  />
                  <button
                     type='submit'
                     onClick={this.handleSubmit}
                     className='fa fa-search'
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Header;
