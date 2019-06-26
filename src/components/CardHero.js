import React, { Component, useState, useEffect  } from 'react';
import Grid from '@material-ui/core/Grid';
import Typograpy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import firestore from "../../firestore";

import Zoom from '@material-ui/core/Zoom';

import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ClearIcon from '@material-ui/icons/Clear';

import SvgIcon from '@material-ui/core/SvgIcon';


import anime from 'animejs';

import LogoIcon from "../../assets/Logo.svg"
import Nav from "./Nav"

class CardHero extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {


  }

  render() {
    console.log(this.props.page)
    anime({
      targets: ['.animationcontainer-0', '.animationcontainer-2'],
      translateY: this.props.page != null ? 900 : -1145,
      delay: this.props.page != null ? anime.stagger(100, { start: 400 }) : anime.stagger(100, { start: 0 }),
      loop: this.props.page != null ? false : true,
      duration: this.props.page != null ? 90 : 50000,
      easing: "linear"
    });
    anime({
      targets: ['.animationcontainer-1', '.animationcontainer-3'],
      translateY: -620,
      delay: anime.stagger(100, { start: 0 }),
      loop: true,
      duration: 50000,
      easing: "linear"
    });
    return (
      <Grid item style={{
        marginLeft: "-15vw",
        paddingRight: 20,
        height: "100vh",
        overflow: "hidden"
      }}>
        <Grid container justify="flex-end" spacing={1}>
          {[this.props.values.slice(20, 40), this.props.values.slice(40, 60), this.props.values.slice(60, 77), this.props.values.slice(0, 20)].map((item, index) =>
            <Grid item key={"Grid-" + index} className={"animationcontainer-" + index} >
              <Grid container direction="column" spacing={1}>
                {item.map((item, i) =>
                  <div key={"div-" + item.slug} style={{
                    background: "white",
                    backgroundImage: "url(" + item.img + ")",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    borderRadius: 7,
                    width: "190px",
                    height: "300px",
                    margin: 4

                  }} />
                )}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    )
}
}
export default CardHero;