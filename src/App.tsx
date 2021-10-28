import React, { useState } from 'react';
import './App.css';
import List from './components/List'

// On définit les types des variables qui seront présentes dans le tableau [people]
interface IState {
  people:{
    name: string
    age: number
    url: string
    // Note est optionnel, on le precise en rajoutant "?"
    note?: string
  }[]
}

function App() {

  //On définit le state people avec son modifieur setPeople
  //On lui précise la structure des types attendus, définis plus haut, avec <IState["people"]>
  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people2={people}/>
    </div>
  );
}

export default App;
