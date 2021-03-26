import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
