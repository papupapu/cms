import React, { useContext } from 'react';

import LayoutContext from '../../../../context/LayoutContext';

import { createASecondModal } from '../../../../factories/modals';

const AModal = () => {
  const { openModal, closeModal } = useContext(LayoutContext);
  const modal = () => openModal(createASecondModal({}));
  return (
    <p>
      modale
      <button type="button" onClick={modal}>
        seconda modale
      </button>
      <button type="button" onClick={closeModal}>
        chiudi
      </button>
    </p>
  );
};
export default AModal;
