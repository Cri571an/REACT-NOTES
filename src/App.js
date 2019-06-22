import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NotesForm from "./NotesForm.js";
import NotesList from "./NotesList.js";
import Home from "./Home.js";
import Note from "./Note.js"

import { Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    }
  }
  uptadeField = field => e => {
    this.setState({
      [field]: e.target.value
  });
}

saveNote = () => {
  if (this.state.title && this.state.description) {
  this.setState({
    title: '',
    description: '',
    notes: [...this.state.notes, { id:Date.now(), title: this.state.title,   description:this.state.description}]
  });
};
}
  // uptadeTitle(e) {
  //   this.setState({ value: e.target.value});
  // };
  // uptadeDescrption(e) {
  //   this.setState({ description: e.target.value});
  // };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
      <Typography align="center" variant="h2" gutterBottom>
      My notes
      </Typography>
      <Grid container justify="center" spacing={2}>
      <Grid item xs={4}>
        <NotesList notes={this.state.notes}/>
      </Grid>
        <Grid item xs={8}>
        <Route exact path="/" component={Home}/>
        <Route path="/new" render={() =>(
        <NotesForm
            title={this.state.title}
            description={this.state.description}
            uptadeField={this.uptadeField}
            saveNote={this.saveNote}
        />
        )}
        />
        <Route path='/view/:id' render={props => <Note {...props} notes={this.state.notes}/>} />
        </Grid>
      </Grid>
      <Fab color='primary' component={Link} to='/new'>
      <AddIcon/>
      </Fab>
      </React.Fragment>
    );
  }
}

export default App;


///////////////////////////////////
