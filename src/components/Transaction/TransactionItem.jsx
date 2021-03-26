import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className="">
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
};

export default TransactionItem;
