import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../Atoms/Input';

import isValidVar from '../../lib/utils/isValidVar';
import slugify from '../../lib/utils/slugify';
import Api from '../../lib/http/Post';

import { useCtxLayout } from '../../../pages/_app';

import styles from './style.module.scss';

const api = new Api();

const propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
  action: PropTypes.string.isRequired,
  afterSubmitFunc: PropTypes.func,
};

const defaultProps = {
  afterSubmitFunc: () => {},
};

const Post = ({ post, action, afterSubmitFunc }) => {
  const [postData, upDatePostData] = useState({
    title: post.title,
    subtitle: post.subtitle,
    content: post.content,
  });

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    const newPostData = { [name]: value };
    upDatePostData({ ...postData, ...newPostData });
  };

  const [postErrors, upDatePostErrors] = useState({
    title: '',
    subtitle: '',
    content: '',
  });

  const errorMsgs = {
    title: 'Titolo obbligatorio',
    subtitle: 'Sottotitolo obbligatorio',
    content: 'Contenuto obbligatorio',
  };

  const handleSubitErrors = (apiErrors = []) => {
    const newErrors = {};
    if (!apiErrors.length) {
      Object.keys(postData).forEach((field) => {
        newErrors[field] = !isValidVar(postData[field]) ? errorMsgs[field] : '';
      });
    } else {
      apiErrors.forEach((field) => {
        newErrors[field] = errorMsgs[field];
      });
    }
    upDatePostErrors({ ...postErrors, ...newErrors });
  };

  const handleFieldError = (evt) => {
    const field = evt.target.name;
    upDatePostErrors({
      ...postErrors,
      ...{ [field]: !isValidVar(postData[field]) ? errorMsgs[field] : '' },
    });
  };

  const { toggleRefreshPostsList } = useCtxLayout();

  const editPost = async () => {
    const { title, subtitle, content } = postData;
    if (isValidVar(title) && isValidVar(subtitle) && isValidVar(content)) {
      const newPost = await api.editPost(post._id, {
        title,
        subtitle,
        content,
      });
      if (newPost && newPost.success) {
        toggleRefreshPostsList(true);
        afterSubmitFunc();
      } else {
        console.log(newPost.message);
        handleSubitErrors(Object.keys(newPost.error.errors));
      }
    } else {
      handleSubitErrors();
    }
  };

  const createPost = async () => {
    const { title, subtitle, content } = postData;
    if (isValidVar(title) && isValidVar(subtitle) && isValidVar(content)) {
      console.log(slugify(title));
      const newPost = await api.createPost({
        title,
        subtitle,
        content,
      });
      if (newPost && newPost.success) {
        toggleRefreshPostsList(true);
        afterSubmitFunc(newPost.id);
      } else {
        console.log(newPost.message);
        handleSubitErrors(Object.keys(newPost.error.errors));
      }
    } else {
      handleSubitErrors();
    }
  };

  const title =
    action === 'create'
      ? 'Inserisci il nuovo post'
      : `Post: ${post.title} - modifica`;
  const btnLabel = action === 'create' ? 'Crea' : `Salva`;
  const btnAction = action === 'create' ? createPost : editPost;

  return (
    <>
      <p className={styles.title}>{title}</p>
      <Input
        name="title"
        type="text"
        value={postData.title}
        label="Titolo"
        onChangeFunc={onFieldChange}
        onBlurFunc={handleFieldError}
        cssClass={styles.input}
        error={postErrors.title}
      />
      <Input
        name="subtitle"
        type="text"
        value={postData.subtitle}
        label="Sottotitolo"
        onChangeFunc={onFieldChange}
        onBlurFunc={handleFieldError}
        cssClass={styles.input}
        error={postErrors.subtitle}
      />
      <Input
        name="content"
        type="text"
        value={postData.content}
        label="Content"
        onChangeFunc={onFieldChange}
        onBlurFunc={handleFieldError}
        cssClass={styles.input}
        error={postErrors.content}
      />
      <button type="button" onClick={btnAction}>
        {btnLabel}
      </button>
    </>
  );
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;
