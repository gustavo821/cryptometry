import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  div: {
    background: theme.colorPrimary,
    color: theme.colorText,
    padding: [10,40],
    fontWeight: 300,
    minHeight: 400
  }
})

const Main = ({classes, children}) => (
  <div className={classes.div}>
    {children}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus possimus iure, consequatur qui tempora nostrum fugit molestias repellat reprehenderit aperiam eaque molestiae, repudiandae harum perspiciatis rerum porro nobis. Ipsum, ut?</p>
  </div>
)

export default injectSheet(styles)(Main)
