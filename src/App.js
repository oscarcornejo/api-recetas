import React, { Fragment } from 'react';

import Recetas from './components/Recetas';

import './App.sass';
import Header from './components/Header';

function App() {

  return (
    <Fragment>
      <Header titulo='Recetario' />
      <div className="container">
        <Recetas />
      </div>
    </Fragment>
  );
}

export default App;
