import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
 
  constructor(props) {
    super(props);

    // this will make all <this> words in the methods to refer to the class CreateExercises
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    // Initial state of the component
    this.state = {
      username: '',
    }
  }
  
  onChangeUsername(e) {

    // we want all this. to refer to the class CreateExercises
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }
    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}