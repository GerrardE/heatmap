import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTransactions from '@actions/transactions';
import Heat from './Heat';

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    const { transactions } = this.props;
    let data;
    
    if(transactions){
      data = transactions.transactions
    } 

    return (
      <Fragment>
        <Heat transactions={data} />
      </Fragment>
    );
  }
}

Transactions.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.shape({
    transactions: PropTypes.array
  }).isRequired
};

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { getTransactions })(withRouter(Transactions));
