import React from 'react';

import dynamic from 'next/dynamic';

const AModal = dynamic(() => import('../components/Modal/Modals/AModal'), {
  loading: () => <p>...</p>,
});

const ASecondModal = dynamic(
  () => import('../components/Modal/Modals/ASecondModal'),
  { loading: () => <p>...</p> }
);

export const createAModal = (props) => ({
  title: 'Modale',
  maxWidth: 430,
  maxHeight: 450,
  children: <AModal {...props} />,
});

export const createASecondModal = (props) => ({
  title: 'Seconda Modale',
  maxWidth: 600,
  maxHeight: 550,
  children: <ASecondModal {...props} />,
});

export const postPreviewModal = (props) => ({
  title: 'Post preview',
  maxWidth: 430,
  maxHeight: 450,
  children: <AModal {...props} />,
});
