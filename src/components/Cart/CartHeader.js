import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CartCounter from './CartCounter';

const CartHeader = props => {
  let headerText;

  if (props.location.pathname.includes('cart')) {
    headerText = 'Shopping Cart';
  } else if (props.location.pathname.includes('checkout')) {
    headerText = 'Checkout';
  } else if (props.location.pathname.includes('order-confirmation')) {
    headerText = 'Order Confirmation';
  }

  return (
    <header className="push">
      <div className="nav-container">
        <nav className="primary-nav">
          <Link to="products">Products</Link>
          <Link to="services">Services</Link>
        </nav>
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="hide-content">David Townsend Slaght Contracting</span>
            <div className="big-logo" aria-hidden="true">
              place holder
            </div>
            <div className="small-logo" aria-hidden="true">
              place holder
            </div>
          </Link>
        </div>
        <nav className="secondary-nav">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container smaller">
        <div className="content">
          <h1>{headerText}</h1>
        </div>
      </div>
    </header>
  );
};

export default withRouter(CartHeader);
