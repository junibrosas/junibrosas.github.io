import React from 'react';
import PropTypes from 'prop-types';

function Navigation(props) {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
      id='sideNav'
    >
      <a className='navbar-brand js-scroll-trigger' href='#page-top'>
        <span className='d-block d-lg-none'>Juni Brosas</span>
        <span className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src='/images/profile.jpg'
            alt='Juni Brosas'
          />
        </span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#skills'>
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
