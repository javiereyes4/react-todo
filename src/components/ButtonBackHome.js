import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackToHome = () => (
  <div className='button-back'>
    <Link     
      to='/'>
      <i className="fa fa-arrow-left"></i> Volver al inicio
    </Link>
  </div>
)