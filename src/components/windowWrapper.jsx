import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
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
