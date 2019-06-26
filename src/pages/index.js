import React from "react"
import { graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "../components/App"
import "../styles/App.css"

import data from "../../crystology-tarot-deck-export.json"

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#032333'
    },
    secondary: {
      main: '#064260'
    },
  },
});

const Index = () => (
  <MuiThemeProvider theme={theme}>
    <App data={data}>
      
    </App>
  </MuiThemeProvider>
)

export default Index
