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
import CardHero from "./CardHero"

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      page: null,
      query: "",
      randomize: [],
      values: this.props.data.map((item, i) => ({
        value: item.id,
        label: item.lang.de.name,
        slug: item.slug,
        img: item.img.url,
        class: item.class
      }))
    }
    this.handlePage = this.handlePage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.shuffle = this.shuffle.bind(this)


  }
  handlePage(page) {
    this.setState({page})
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  componentDidMount() {
    // db.collection('deck').get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       this.setState({
    //         deck: {
    //           ...this.state.deck,
    //           [doc.id]: doc.data()
    //         }
    //       })
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Error getting documents', err);
    //   });
    this.setState({
      randomize: this.shuffle(this.state.values)
    })


  }
  shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  }


  render() {
    
    console.log(this.state.randomize);


    return (
      <Grid container direction="row" justify="center" alignItems={this.state.page === null ? "center" : "flex-start"} style={{
        transition: "all 0.5s ease-in-out"
      }}>
           
        <CardHero page={this.state.page} values={this.state.randomize}  xs={3} sm={6} md={3} />
              <Grid item xs={1} />
           
            <Grid item xs={11} sm={6} md={4}>
              
              <Nav handlePage={this.handlePage} />
          <Search handlePage={this.handlePage} handleChange={this.handleChange} query={this.state.query} page={this.state.page} values={this.state.values} />
              {this.props.children}
            </Grid>
      </Grid>
    )
      
  }
}
export default App

// class Nav extends Component {
//   constructor() {
//     super()
//     this.state = {
//       menuIsOpen: false,
//       userIsOpen: false,
//       anchorEl: null
//     }
//     this.handleMenu = this.handleMenu.bind(this)
//   }
//   handleMenu() {
//     this.setState({
//       menuIsOpen: !this.state.menuIsOpen
//     })
//   }

//   render() {
//     const { anchorEl } = this.state;
//     var bgIMG = this.state.menuIsOpen === false ?
//       "linear-gradient(rgb(90, 57, 185), rgba(83, 50, 177, 0.63), rgba(38, 41, 71, 0))"
//       : "linear-gradient(rgba(90, 57, 185, 0), rgba(83, 50, 177, 0), rgba(38, 41, 71, 0))"
//     return (
//       <div>
//         <AppBar style={{
//           backgroundColor: "#032333fa",
//           boxShadow: "0px -50px 100px black",
//           padding: 8,
//           overflow: "hidden",
//           transition: "height 0.3s ease-in-out",
//           height: this.state.menuIsOpen === true ? "100vh" : 64
//         }}>
//           <Grid container justify="space-between" direction="row">
//             <Grid item>
//               <IconButton color="inherit" aria-label="Menu" onClick={this.handleMenu}>
//                 <MenuIcon />
//               </IconButton>
//             </Grid>
//             <Grid item>
//               <div style={{ position: "absolute", left: "calc(50% - 90px)" }}>
//                 <Button to="/" >
//                   Logo
//                 </Button>
//               </div>
//             </Grid>
//             <Grid item>
//                 <div>
//                   <IconButton
//                     aria-owns={anchorEl ? 'simple-menu' : undefined}
//                     aria-haspopup="true"
//                     onClick={(event) => { this.setState({ userIsOpen: !this.state.userIsOpen, anchorEl: event.currentTarget }) }}
//                     color="inherit">
//                     <AccountCircle />
//                   </IconButton>
//                   <Menu
//                     id="simple-menu"
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     anchorOrigin={{
//                       vertical: 'top',
//                       horizontal: 'right',
//                     }}
//                     transformOrigin={{
//                       vertical: 'top',
//                       horizontal: 'right',
//                     }}
//                     style={{
//                       transform: "translateY(50px)"
//                     }}
//                     onClose={() => {
//                       this.setState({ userIsOpen: !this.state.userIsOpen, anchorEl: null })
//                     }}>
//                     {/* <MenuItem onClick={() => { this.props.history.push("/user") }}>
//                       <ListItemIcon>
//                         <PersonIcon />
//                       </ListItemIcon>
//                       <ListItemText inset primary="Profil bearbeiten" />
//                     </MenuItem>
//                     <MenuItem onClick={() => { this.props.logout() }}>
//                       <ListItemIcon>
//                         <ClearIcon />
//                       </ListItemIcon>
//                       <ListItemText inset primary="Logout" />
//                     </MenuItem> */}
//                   </Menu>
//                 </div>
              
//             </Grid>
//           </Grid>
//           <Grid container className="navigation-overlay" justify="center" alignItems="center" direction="row" style={{
//             height: "80vh",
//             position: "absolute",
//             marginTop: 64,
//             marginLeft: -8
//           }}>
//             <Grid item xs={12} sm={6}>
//               <Button to="./" onClick={this.handleMenu}>HOME</Button>
//               <Button to="./tarot" onClick={this.handleMenu}>TAROT</Button>
//               <Button to="./" onClick={this.handleMenu}>ASTRO</Button>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Button to="./" onClick={this.handleMenu}>KONTAKT</Button>
//               <Button to="./" onClick={this.handleMenu}>IMPRESSUM</Button>
//               <Button to="./" onClick={this.handleMenu}>DATENSCHUTZERKLÄRUNG</Button>
//             </Grid>

//           </Grid>

//         </AppBar>

//       </div>
//     );
//   }
// }

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="Karte suchen"
          name="query"
          value={this.props.query}
          onChange={(event) => this.props.handleChange(event)}
          style={{
            width: "calc(100% - 14px)",
            font: "100 14px monospace",
            background: "none",
            borderWidth: 0,
            borderBottomWidth: 1,
            color: "white",
            padding: 7,
            outlineWidth: 0,
            WebkitAppearance: "button-bevel"
          }}></input>
        {this.props.query !== "" ?
          <Grid container justify="flex-start" alignItems="center" style={{
            marginTop: 20,
            width: "100%",
            borderRadius: 5,
            overflowY: "scroll",
            overflowX: "hidden",
            scrollbarColor: "light",
            maxHeight: 400
          }}>
            {this.props.values.map((item, i) =>
              item.label.toUpperCase().includes(this.props.query.toUpperCase()) ?
                <Zoom in={true} key={i} className="listItem" style={{
                  transitionDelay: i + '0ms',
                  padding: "15px 0px",
                }}
                  onClick={() => this.props.handlePage(i)}
                >
                  <Grid item xs={12}>
                    <Grid container spacing={3} justify="center" alignItems="center">
                      <Grid item xs={2}>
                        <div key={"row-" + i} style={{
                          backgroundColor: "white",
                          backgroundImage: "url(" + item.img + ")",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          borderRadius: 5,
                          minHeight: 1,
                          width: "100%",
                          paddingTop: "150%"
                        }} />
                      </Grid>
                      <Grid item xs={9}>
                        <p>{item.label}</p>
                        <p>{item.class}</p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Zoom>
                : null
            )}
          </Grid>
          : null}
      </div>
    )
  }


}