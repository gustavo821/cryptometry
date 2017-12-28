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
  span: {
    fontWeight: 300,
    textTransform: 'uppercase',
    fontSize: 12,
    margin: 0,
    letterSpacing: 2
  }
})

const Footer = ({classes, children}) => (
  <footer className={classes.footer}>
    <span className={classes.span}>Settings</span>&nbsp;
    <span className={classes.span}>Refresh</span>&nbsp;
    <span className={classes.span}>Donate</span>
    {children}
  </footer>
)

export default injectSheet(styles)(Footer)
