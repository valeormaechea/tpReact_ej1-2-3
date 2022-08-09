import React from 'react';
import Saludo from './components/Saludo';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Saludo nombreSaludo='my friend'></Saludo>
    </div>
  );
};

export default App;