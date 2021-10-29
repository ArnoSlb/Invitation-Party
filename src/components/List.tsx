import React from "react";
import './List.css';

// On définit les types des variables qui seront présentes dans les props
interface IProps {
    people2:{
      name: string
      job: string
      url: string
      // Note est optionnel, on le precise en rajoutant "?"
      note?: string
    }[]
  }

// Façon classique pour spécifier le type des props
// Mais Typescript ne sait pas que List est un composant fonctionnel de React
// Il pense que c'est une simple fonction
// const List = (props: IProps) => {

// 2e option qui précise que List est un composant fonctionnel ET les types attendus dans props
const List: React.FC<IProps> = (props) => {

    console.log(props)
    const renderList = (): JSX.Element[] => {
      return props.people2.map((person) => {
          return (
            <div className="block__person">
              <img src={person.url} alt="" />
              <div className="block__person__data">
                <p className="block__person__data__name">{person.name}</p>
                <p>{person.job}</p>
                <p>{person.note}</p>
              </div>
            </div>
          )
      })
    }

    return (
        <ul className="block">
            {renderList()}
        </ul>
    )
}

export default List