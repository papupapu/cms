import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { useCtxLayout } from '../../../../pages/_app';

import TouchListener from '../../Atoms/TouchListener';

import { postPreviewModal } from '../../../factories/modals';

import makeClassName from '../../../lib/utils/makeClassName';

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
  const { openModal } = useCtxLayout();

  const [open, setOpen] = useState(false);
  const onSwipe = (swipeInfos) => {
    const { dirX } = swipeInfos;
    if (dirX === 'left' && !open) {
      setOpen(true);
    } else if (dirX === 'right' && open) {
      setOpen(false);
    }
  };
  const ctnCls = makeClassName([
    styles.post__ctn,
    open && styles['post__ctn--open'],
  ]);
  const btnCls = (action) =>
    makeClassName([
      styles['post__btns-btn'],
      styles[`post__btns-btn--${action}`],
    ]);

  const preview = () => openModal(postPreviewModal({}));
  const deleteMe = () => deleteAction(post._id);
  return (
    <TouchListener className={styles.post} tagName="li" action={onSwipe}>
      <div className={ctnCls}>
        <div className={styles.post__ctn__tit}>{post.title}</div>
        <div className={styles.post__ctn__infos}>
          <p className={styles['post__ctn__infos-p']}>09 ago 2020</p>
          <p className={styles['post__ctn__infos-p']}>Bozza</p>
          <p className={styles['post__ctn__infos-p']}>Modifica</p>
        </div>
      </div>
      <div className={styles.post__btns}>
        <button type="button" className={btnCls('delete')} onClick={preview}>
          preview
        </button>
        <Link href="/posts/[id]" as={`/posts/${post._id}`}>
          <a
            className={btnCls('edit')}
            href={`/posts/${post._id}`}
            title={post.title}
          >
            modifica
          </a>
        </Link>
        <button type="button" className={btnCls('delete')} onClick={deleteMe}>
          elimina
        </button>
      </div>
    </TouchListener>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
