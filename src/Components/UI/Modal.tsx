// 3rd party:
// Redux RTK:
// Store:
// React Router:
// React:
import {
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  useCallback,
  isValidElement,
  cloneElement,
} from 'react';
import { createPortal } from 'react-dom';
// Context:
import modalCloseCtx from '../../context/modalCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { ReactElement, FC, Ref, CSSProperties } from 'react';
type ModalProps<P = object> = {
  children: ReactElement<P>;
  childProps?: P;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<ModalHandle>;
};

export type ModalHandle = {
  handleShowModal: () => void;
  handleCloseModal: () => void;
};

const modalRootEl = document.getElementById('modal-root');
const Modal: FC<ModalProps> = ({
  className = '',
  style = {},
  children,
  childProps,
  ref,
}) => {
  // State:
  const [isMounted, setIsMounted] = useState(false);

  // Refs:
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Handlers:
  const handleShowModal = useCallback(() => {
    setIsMounted(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    handleShowModal,
    handleCloseModal,
  }));

  // Effects:
  // Open dialog when visible
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isMounted) return;

    const handleNativeClose = () => {
      setIsMounted(false); // Unmount child after native close
    };

    dialog.addEventListener('close', handleNativeClose);
    dialog.showModal();

    return () => {
      dialog.removeEventListener('close', handleNativeClose);
    };
  }, [isMounted]);

  // JSX:
  if (!modalRootEl || !isMounted) return null;

  const childWithProps = isValidElement(children)
    ? cloneElement(children, { ...childProps })
    : children;

  return createPortal(
    <dialog
      ref={dialogRef}
      role='dialog'
      onClick={(ev) => {
        if (ev.target === dialogRef.current) {
          handleCloseModal(); // Triggers native close, then unmount
        }
      }}
      style={style}
      className={className}
    >
      <div>
        <modalCloseCtx.Provider value={{ handleCloseModal }}>
          {childWithProps}
        </modalCloseCtx.Provider>
      </div>
    </dialog>,
    modalRootEl
  );
};

export default Modal;
