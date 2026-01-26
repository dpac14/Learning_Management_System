import React from 'react';
import { Outlet } from 'react-router-dom';

const Trainer = () => {
  return (
    <div>
      <h1> Trainer page</h1>
      <div>
        {< Outlet/>}
      </div>
    </div>
  );
}

export default Trainer;
