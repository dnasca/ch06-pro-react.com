import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import bankStore from './bankStore';
import constants from './constants';

class BankApp extends Component {...} // Ommited for brevity
BankApp.propTypes = {...} // Ommited for brevity

class BankAppContainer extends Component {
  constructor(...args) {
    super(...args);
    bankStore.dispatch({
      type: constants.CREATE_ACCOUNT
    })
    this.state = {
      balance: bankStore.getState().balance
    }
  }
  componentDidMount() {
    this.unsubscribe = bankStore.subscribe(() => this.setState({
      balance: bankStore.getState().balance
    }));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return ( < BankApp balance = {
        bankStore.getState().balance
      }
      onDeposit = {
        (amount) => bankStore.dispatch(➥{
          type: constants.DEPOSIT_INTO_ACCOUNT,
          amount: amount
        })
      }
      onWithdraw = {
        (amount) => bankStore.dispatch(➥{
          type: constants.WITHDRAW_FROM_ACCOUNT,
          amount: amount
        })
      }
      />)
    }
  }
  render( <
    BankAppContainer / > , document.getElementById('root'));
