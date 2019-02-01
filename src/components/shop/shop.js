import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
          _id: 0,
          title: 'Login',
          path: '/signin'
      }
  ]
  this.props.setHeaderLinks(headerLinks);

   
    // fetch shop product ction creator
    // fetch navbar links
       // set navbar links
      //  filter products with links
  }

  render(){
    return(
      <div className='shop'>
         {/* search bar component */}
         {/* shop product */}
         {/* shop cart button */}
      </div>
    )
  }
}

function mapStateToprops(state) {
  return { state }
}

Shop = connect(mapStateToprops, actions)(Shop);

export default Shop;