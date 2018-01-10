import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: '"Work Sans"',
      src: 'url("./assets/fonts/WorkSans-Light.ttf") format("truetype")',
      fontWeight: 300
    },
    {
      fontFamily: '"Work Sans"',
      src: 'url("./assets/fonts/WorkSans-Regular.ttf") format("truetype")',
      fontWeight: 400
    },
    {
      fontFamily: '"Work Sans"',
      src: 'url("./assets/fonts/WorkSans-Medium.ttf") format("truetype")',
      fontWeight: 500
    },
  ],
  div: {
    background: theme.colorPrimary,
    color: theme.colorText,
    borderRadius: 10
  }
})

const WindowWrapper = ({classes, children}) => (
  <div className={classes.div}>
    {children}
  </div>
)

export default injectSheet(styles)(WindowWrapper)
