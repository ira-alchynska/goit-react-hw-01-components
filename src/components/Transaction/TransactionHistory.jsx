import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.history}>
      <thead>
        <tr className={styles.mainlist}>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <TransactionItem
            index={index}
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
