import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Resources:
// https://blog.bitsrc.io/making-https-request-in-react-3a2777700c5d
// https://www.sitepoint.com/getting-started-react/
// https://www.tutorialspoint.com/reactjs/reactjs_components.htm
// https://stackoverflow.com/questions/42237388/syntaxerror-import-declarations-may-only-appear-at-top-level-of-a-module

class UsersComponent extends React.Component {
  constructor() {
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch(`/api/users`)
      .then(res => res.json())
      .then(result => this.setState({ users: result.users }))
  }
  render() {
    return (
      <div>
        Users: {this.state.users}
      </div>
    )
  }
}
