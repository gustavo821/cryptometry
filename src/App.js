import React, { Component } from 'react';
import {ThemeProvider} from 'react-jss';
import WindowWrapper from './components/windowWrapper';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
//import './App.css';
//import logo from './logo.svg';

const theme = {
  colorPrimary: '#212D38',
  colorSecondary: '#131E28',
  colorText: 'white'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <WindowWrapper>
            <Header />
            <Main />
            <Footer />
          </WindowWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
