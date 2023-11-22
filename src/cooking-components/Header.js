import React from 'react';
import { Navbar } from './Navbar';

export function Header({ isOpen, applyMenu }) {
  return (
    <header>
      <nav>
        <Navbar applyMenuCallBack={applyMenu} />
      </nav>
      <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Cooking Simulator</h1>
    </header>
  );
}
