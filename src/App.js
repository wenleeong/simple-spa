import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeBook from './RecipeBook';
import RecipeBookAPI from './RecipeBookAPI';

function App() {
  return (
    <div className="container">
      <RecipeBookAPI/>
    </div>
  );
}

export default App;
