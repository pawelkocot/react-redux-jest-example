import React from 'react';
import {connect} from 'react-redux';
import {incrementCounter} from '../store/actions';

const Counter = ({value, onClickHandler}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={() => onClickHandler()}>+</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
};

const mapDispatchToProps = {
  onClickHandler: incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
