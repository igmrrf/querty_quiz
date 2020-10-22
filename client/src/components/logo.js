import React from 'react';
import logo from '../static/logo';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} className='logo-img' alt='logo' /> Thinkerbell Labs
    </div>
  );
}
