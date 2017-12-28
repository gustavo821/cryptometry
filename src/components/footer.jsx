import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  footer: {
    background: theme.colorSecondary,
    color: theme.colorText,
    padding: 15,
    textAlign: 'right',
    borderRadius: [0,0,10,10]
  },
  h1: {
    fontWeight: 300,
    textTransform: 'uppercase',
    fontSize: 14,
    margin: 0,
    letterSpacing: 2
  }
})

const Footer = ({classes, children}) => (
  <footer className={classes.footer}>
    <h1 className={classes.h1}>Donate</h1>
    {children}
  </footer>
)

export default injectSheet(styles)(Footer)
