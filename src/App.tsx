import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePetForm from './components/CreatePetForm';
import PetList from './components/PetList';

function App() {
  return (
    <div className="App">
      <CreatePetForm />
      <PetList />
    </div>
  );
}

export default App;
