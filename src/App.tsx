import React, { useState } from 'react';
import './App.css';
import List from './components/List'

// On définit les types des variables qui seront présentes dans le tableau [people]
interface IState {
  people:{
    name: string
    job: string
    url: string
    // Note est optionnel, on le precise en rajoutant "?"
    note?: string
  }[]
}

function App() {

  //On définit le state people avec son modifieur setPeople
  //On lui précise la structure des types attendus, définis plus haut, avec <IState["people"]>
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://cdna.artstation.com/p/assets/images/images/030/492/572/large/christos-lytras-lebron-portrait.jpg?1600779528",
      job: "Basketball player",
      note: "NBA Legend"
    },
    {
      name: "Henry Cavill",
      url: "https://cdna.artstation.com/p/assets/images/images/032/507/356/large/christos-lytras-supes-zorn-for-web.jpg?1606665108",
      job: "Actor",
      note: "Superman"
    },
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people2={people}/>
    </div>
  );
}

export default App;
