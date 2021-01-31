import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'boostrap/dist/css/boostrap.min.css'


// the App will return the information to index.js
function App() {
  return (
    <Router>
      <Navbar>
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create"  component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Navbar>
    </Router>
  );
}

export default App;
