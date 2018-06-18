import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';

import Modern from '../../assets/img/modern.png';
import Silver from '../../assets/img/silver.png';
import Bright from '../../assets/img/bright.png';
import Unique from '../../assets/img/unique.png';

const StylesHeader = ({ style, header }) => {
  let Header = null;

  switch (header) {
    case 'Modern':
      Header = Modern;
      break;
    case 'Silver':
      Header = Silver;
      break;
    case 'Bright':
      Header = Bright;
      break;
    case 'Unique':
      Header = Unique;
      break;
    default:
      Header = null;
  }

  return (
    <header
      className="medium-header light push"
      style={{
        backgroundImage: `url(${Header})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOrigin: 'border-box',
        backgroundAttachment: 'scroll'
      }}>
      <div className="nav-container">
        <nav className="primary-nav">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
        </nav>
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="hide-content">David Townsend Slaght Contracting</span>
            <div className="big-logo" aria-hidden="true">
              place holder
            </div>
            <div className="small-logo" aria-hidden="true">place holder
            </div>
          </Link>
        </div>
        <nav className="secondary-nav light">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container light">
        <div className="content">
          <h1>
            {style}
            <span className="hide-content"> styles</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ styles: { style, header } }) => ({
  style,
  header
});

export default connect(mapStateToProps)(StylesHeader);
