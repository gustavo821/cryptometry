import React from 'react';
import injectSheet from 'react-jss';
import logo from '../assets/images/logo.svg';

const styles = theme => ({
  header: {
    background: theme.colorSecondary,
    color: theme.colorText,
    padding: 15,
    textAlign: 'center',
    borderRadius: [10,10,0,0]
  },
  h1: {
    fontWeight: 300,
    textTransform: 'uppercase',
    fontSize: 14,
    margin: 0,
    letterSpacing: 2
  }
})

const Header = ({classes, children}) => (
  <header className={classes.header}>
    <img src={logo} className={classes.logo} alt="Cryptometry Logo" />
    {children}
  </header>
)

export default injectSheet(styles)(Header)
