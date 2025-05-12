// Assets:
// Constants:
// Utils:
import { mergeStyles } from '../utils/css';
// 3rd party:
// Store:
import useBoundStore from '../store/boundStore';
// Router:
// React:
// Context:
// Hooks:
// Components:
import Button from './UI/Button';
// CSS:
import styles from './NavBar.module.css';
// Types, interfaces and enumns:
import type { FC } from 'react';
// interface NavBarProps{}

const NavBar: FC = () => {
  // Context:

  // Store:
  const currentLocation = useBoundStore((state) => state.currentLocation);
  const animationState = useBoundStore((state) => state.wheelAnimationState);
  // Actions:
  const setCurrentLocation = useBoundStore((state) => state.setCurrentLocation);
  // State:

  // Refs:

  // Effects:

  // Derived values:

  // Handlers:

  // JSX:
  const leftButtons = (
    <div className={styles.navbar_left}>
      {currentLocation === 'Main' ? (
        <Button
          variant='warning'
          id='nav-go-to-config-button'
          name='Go to the configuration'
          aria-label='Go to the configuration'
          disabled={animationState !== 'idle'}
          onClick={() => {
            if (animationState !== 'idle') return;
            setCurrentLocation({ newLocation: 'ConfigForm' });
          }}
        >
          Configure
        </Button>
      ) : (
        <Button
          variant='warning'
          id='nav-go-to-main-button'
          name='Go to the Wheel'
          aria-label='Go to the Wheel'
          disabled={animationState !== 'idle'}
          onClick={() => {
            if (animationState !== 'idle') return;
            setCurrentLocation({ newLocation: 'Main' });
          }}
        >
          Back
        </Button>
      )}
    </div>
  );

  const rightButtons = (
    <div className={styles.navbar_right}>{/* <Button>Log-In</Button> */}</div>
  );

  return (
    <nav
      className={mergeStyles(styles.navbar, 'glass')}
      id='navbar'
      role='navigation'
    >
      {leftButtons}
      {rightButtons}
    </nav>
  );
};

export default NavBar;
