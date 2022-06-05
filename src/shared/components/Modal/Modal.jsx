import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, children }) => {

    useEffect(() => {
        document.addEventListener('keydown', closeModal);

        return () => { document.removeEventListener('keydown', closeModal) };
    },);
    
    const closeModal = (e) => {
        if (e.code === 'Escape') {
            close();
        }

        if (e.target === e.currentTarget) {
            close();
        }
    };

    return createPortal(
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>,
        modalRoot
    )
};

export default Modal;