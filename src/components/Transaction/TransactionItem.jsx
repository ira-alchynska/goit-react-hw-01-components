import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionItem = ({ index, type, amount, currency }) => {
  return (
    <tr className={index % 2 ? styles.first : styles.second}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TransactionItem;
