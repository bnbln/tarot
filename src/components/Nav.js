import React, { Component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typograpy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import anime from 'animejs';

import LogoIcon from "../../assets/Logo.svg"


class Nav extends Component {
  componentDidMount() {
    anime({
      targets: '.logosvg path',
      easing: 'easeInOutSine',
      duration: 1500,
      fill: ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'],
      direction: 'alternate',
    });
  }
  render() {
    return (
      <div onClick={() => this.props.handlePage(null)}>
        <LogoIcon className="logosvg" style={{
          marginBottom: 20
        }} />
      </div>
    )
  }
}

export default Nav;