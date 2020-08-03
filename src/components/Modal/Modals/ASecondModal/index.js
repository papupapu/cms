import React, { useContext } from 'react';

import LayoutContext from '../../../../context/LayoutContext';

const ASecondModal = () => {
  const { closeModal } = useContext(LayoutContext);
  return (
    <p>
      seconda modale{' '}
      <button type="button" onClick={closeModal}>
        chiudi
      </button>
    </p>
  );
};

export default ASecondModal;
