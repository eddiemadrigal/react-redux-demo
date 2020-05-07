import React from 'react';
import FullName from './components/FullName';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';
import './App.css';

const App = props => {

  function onUpdateUser(e) {
    props.onUpdateUser(e.target.value);
  }

  return (
    <div className="App">
      <FullName />
      <div>
        <input onChange={onUpdateUser} /><br />
        {props.user}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
