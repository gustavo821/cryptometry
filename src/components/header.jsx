import React from 'react';
import injectSheet from 'react-jss';

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
    <h1 className={classes.h1}>Cryptometry</h1>
    {children}
  </header>
)

export default injectSheet(styles)(Header)
