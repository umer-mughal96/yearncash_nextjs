import React, { useEffect } from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = ({handleDarkMode}) => {
  const darkMode = useDarkMode(false);


  useEffect(() => {

    handleDarkMode(darkMode.value)

  },[darkMode.value])

  

  if (typeof window === 'undefined') return null;

  return (
    <div className="dark-mode-toggle">
      <button type="button" className="bright-mode-btn" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" className="dark-mode-btn" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;