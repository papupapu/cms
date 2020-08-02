import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import styles from './style.module.scss';

const propTypes = {
  post: PropTypes.instanceOf(Object),
  deleteAction: PropTypes.func,
};

const defaultProps = {
  post: {},
  deleteAction: () => {},
};

const Item = ({ post, deleteAction }) => {
  const deleteMe = () => deleteAction(post._id);
  return (
    <li className={styles.item}>
      {post.title}
      <div className={styles.item__btns}>
        <Link href="/posts/[id]" as={`/posts/${post._id}`}>
          <a
            className={styles.item__btns__btn}
            href={`/posts/${post._id}`}
            title={post.title}
          >
            modifica
          </a>
        </Link>
        <button
          type="button"
          className={styles.item__btns__btn}
          onClick={deleteMe}
        >
          elimina
        </button>
      </div>
    </li>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
