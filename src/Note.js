import React from 'react';
import Typography from '@material-ui/core/Typography';

const Note = props => {
  console.log(props);
  return(
    <React.Fragment>
      <Typography align='center' variant='h4' gutterBottom>
      Title
      </Typography>
      <Typography variant='subtitle1'>Description</Typography>
    </React.Fragment>
  )
}

export default Note;
