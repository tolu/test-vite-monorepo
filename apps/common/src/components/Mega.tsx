import React from 'react';
import './Mega.scss';

const suffix = import.meta.env.VITE_MEGA_SUFFIX || '';

export const Mega = () => {
  return (
    <>
      <h1 className="mega">MEGA {suffix}</h1>
    </>
  )
}