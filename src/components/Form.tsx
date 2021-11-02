import React, {useState} from "react";
import './Form.css'
import { IState as Props } from "../App"
import {v4 as uuidv4} from 'uuid'

interface IProps {
    //Je récupère "IState" en tant "Props" qui est l'interface définit dans App.tsx
    people3: Props["people"]
    setPeople3: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const Form: React.FC<IProps> = ({people3, setPeople3}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        job:"",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        console.log(e.target.name)
        console.log(e.target.value)
        setInput({
            //On recopie l'intégralité de l'objet input
            ...input,
            // On récupere le "name" de la target qui a changé
            // On lui dit que le state est égale à la valeur rentrée
            [e.target.name]: e.target.value
        })
    }

    const handleClick = ():void => {
        console.log(!input.name)
        if(
            //Si input.name est vide ou input.age ou input.img
            !input.name ||
            !input.age ||
            !input.img 
        ) { 
            // On lui dit de ne rien retourner si le formulaire n'est pas complet
            //et on met fin à la fonction avec return
            return
        }

        // On rajoute le nouveau people dans le State situé dans app.js
        // On oublie pas de copier le state existant avec ...people3
        // sinon on écrase tout
        // et on rajoute un profile av les données du formulaire
        setPeople3([
            ...people3,
            {
                name: input.name,
                age: input.age,
                job: input.job,
                img: input.img,
                note: input.note,
                key: uuidv4()
            }
        ])


        // A la soumission du formulaire
        // On supprime les valeurs des champs
        setInput({
            name: "",
            age: "",
            job:"",
            note: "",
            img: ""
        })
    }

    return (
        <div className="Form">
            <input 
                type="text" 
                placeholder="Name"
                className="Form__input"
                value={input.name}
                // Quand on écrit des events en ligne 
                // TypeScript comprend très bien le type d'elmt qu'il va obtenir 
                // En passant la soursi dessus, il nous l'affiche
                // On a plus qu'à 'lintégrer dans la fonction que l'on appelle en parametre
                // Cela évite de devoir écrire e: any
                //Ici => (parameter) e: React.ChangeEvent<HTMLInputElement>
                // onChange={(e) => {}}
                onChange={handleChange}
                name="name"
            />
            <input 
                type="text" 
                placeholder="Age"
                className="Form__input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input 
                type="text" 
                placeholder="Job"
                className="Form__input"
                value={input.job}
                onChange={handleChange}
                name="job"
            />
            <input 
                type="text" 
                placeholder="Image Url"
                className="Form__input"
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea 
                placeholder="Notes"
                className="Form__input"
                value={input.note}
                // Ici nous avons un message d'erreur onChange:
                // Type '(e: React.ChangeEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLTextAreaElement>'.
                //Types of parameters 'e' and 'event' are incompatible.
                //Type 'ChangeEvent<HTMLTextAreaElement>' is not assignable to type 'ChangeEvent<HTMLInputElement>'.
                //Type 'HTMLTextAreaElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, capture, and 26 more.ts(2322)
                // Nous devonc donc rajouter ChangeEvent<HTMLTextAreaElement> dans le type recu dans les parametres en plus de React.ChangeEvent<HTMLInputElement>
                onChange={handleChange}
                name="note"
            />
            <button 
                className="Form__submit"
                onClick={handleClick}
            >
                Add To List
            </button>
        </div>
    )
}

export default Form