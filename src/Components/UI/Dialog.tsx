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
import dialogCloseCtx from '../../context/dialogCloseCtx';
// Hooks:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { ReactElement, FC, Ref, CSSProperties } from 'react';
type DialogProps<P = object> = {
  children: ReactElement<P>;
  childProps?: P;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<DialogHandle>;
};

export type DialogHandle = {
  handleShowDialog: () => void;
  handleCloseDialog: () => void;
};

const dialogRootEl = document.getElementById('dialog-root');

const Dialog: FC<DialogProps> = ({
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
  const handleShowDialog = useCallback(() => {
    setIsMounted(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    handleShowDialog,
    handleCloseDialog,
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
  if (!dialogRootEl || !isMounted) return null;

  const childWithProps = isValidElement(children)
    ? cloneElement(children, { ...childProps })
    : children;

  return createPortal(
    <dialog
      ref={dialogRef}
      role='dialog'
      onClick={(ev) => {
        if (ev.target === dialogRef.current) {
          handleCloseDialog(); // Triggers native close, then unmount
        }
      }}
      style={style}
      className={className}
    >
      <div>
        <dialogCloseCtx.Provider value={{ handleCloseDialog }}>
          {isMounted ? childWithProps : null}
        </dialogCloseCtx.Provider>
      </div>
    </dialog>,
    dialogRootEl
  );
};

export default Dialog;
