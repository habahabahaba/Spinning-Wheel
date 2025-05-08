// React:
import { createContext } from 'react';
// Types, interfaces and enumns:
type DialogCloseCtxValue = {
  handleCloseDialog: () => void;
};

const dialogCloseCtx = createContext<DialogCloseCtxValue>({
  handleCloseDialog() {},
});

export default dialogCloseCtx;
