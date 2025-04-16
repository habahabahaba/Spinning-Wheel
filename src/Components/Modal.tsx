// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import {
  useImperativeHandle,
  useRef,
  useCallback,
  isValidElement,
  cloneElement,
} from 'react';
import { createPortal } from 'react-dom';
// Context:
import modalCloseCtx from '../context/modalCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { ReactElement, FC, Ref } from 'react';
type ModalProps<P = object> = {
  children: ReactElement<P>;
  childProps?: P;
  className?: string;
  ref?: Ref<ModalHandle>;
};

export type ModalHandle = {
  handleShowModal: () => void;
  handleCloseModal: () => void;
};

const modalRootEl = document.getElementById('modal-root');
const Modal: FC<ModalProps> = ({
  className = '',
  children,
  childProps,
  ref,
}) => {
  // Refs:
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Handlers:
  const handleShowModal = useCallback(() => {
    dialogRef.current?.showModal();
  }, []);
  const handleCloseModal = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Imperative handle:
  useImperativeHandle(ref, () => ({
    handleShowModal,
    handleCloseModal,
  }));

  // JSX:
  const childWithProps = isValidElement(children)
    ? cloneElement(children, { ...childProps })
    : children;

  return modalRootEl
    ? createPortal(
        <dialog
          ref={dialogRef}
          role='dialog'
          onClick={(ev) => {
            if (ev.target === dialogRef.current) {
              handleCloseModal();
            }
          }}
          className={`absolute top-18 left-1/3 rounded-md p-4 shadow-md backdrop:bg-stone-900/90 ${className}`}
        >
          <div className='mt-4 mb-9 w-[35rem]'>
            <modalCloseCtx.Provider value={{ handleCloseModal }}>
              {childWithProps}
            </modalCloseCtx.Provider>
          </div>
        </dialog>,
        modalRootEl
      )
    : null;
};
export default Modal;
