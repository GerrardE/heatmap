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
    const { transactions, errors } = this.props;
    return (
      <Fragment>
        <Heat transactions={transactions} />
      </Fragment>
    );
  }
}

Transactions.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  // errors: PropTypes.shapeOf({}).isRequired,
  // transactions: PropTypes.shapeOf({}).isRequired
};

const mapStateToProps = state => ({
  transactions: state.transactions,
  errors: state.errors
});

export default connect(mapStateToProps, { getTransactions })(withRouter(Transactions));
