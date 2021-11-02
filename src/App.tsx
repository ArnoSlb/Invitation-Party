import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {v4 as uuidv4} from 'uuid'

// On définit les types des variables qui seront présentes dans le tableau [people]
// On l'exporte pour la réutiliser dans le composant Form
export interface IState {
  people:{
    name: string
    job: string
    age: string
    img: string
    // Note est optionnel, on le precise en rajoutant "?"
    note?: string
    key: string
  }[]
}

function App() {

  //On définit le state people avec son modifieur setPeople
  //On lui précise la structure des types attendus, définis plus haut, avec <IState["people"]>
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      img: "https://cdna.artstation.com/p/assets/images/images/030/492/572/large/christos-lytras-lebron-portrait.jpg?1600779528",
      job: "Basketball player",
      age: "36",
      note: "NBA Legend",
      key: uuidv4()
    },
    {
      name: "Henry Cavill",
      img: "https://cdna.artstation.com/p/assets/images/images/032/507/356/large/christos-lytras-supes-zorn-for-web.jpg?1606665108",
      job: "Actor",
      age:"32",
      note: "Superman",
      key: uuidv4()
    },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people2={people}/>
      <Form people3={people} setPeople3={setPeople}/>
    </div>
  );
}

export default App;
