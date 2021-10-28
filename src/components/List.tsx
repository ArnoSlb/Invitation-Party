import React from "react";

// On définit les types des variables qui seront présentes dans les props
interface IProps {
    people2:{
      name: string
      age: number
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
    return (
        <div>
            I am a list
        </div>
    )
}

export default List