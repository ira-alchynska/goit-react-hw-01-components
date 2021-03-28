import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImage from '../../images/photo-default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="320"
        />
        <p className={styles.text}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.span}>Followers</span>
          <span className={styles.span}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.span}>Views</span>
          <span className={styles.span}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.span}>Likes</span>
          <span className={styles.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
