import { ChangeEvent, useState } from "react";

export enum HairColor { // On exporte l'enum pour pouvoir l'utiliser en dehors de ce composant
  Blonde = "Your hair is blonde, good for you",
  Brown = "Cool hair color",
  Red = "Woaw, that's so cool !",
}

interface Props {
  name: string;
  age: number;
  email?: string; // On ajoute un "?" pour rendre le prop optionnel
  getName?: (name: string) => string; // Fonction qui prend une string en param et qui retourne string
  hairColor: HairColor;
}

export const Person = ({ name, age, email, hairColor }: Props) => {
  type GenderType = "Man" | "Woman"; // On utilise type pour créer une restriction entre plusieurs options
  const gender: GenderType = "Man";

  const [country, setCountry] = useState<string | null>("France"); // le type de l'état peut être string OU null

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Pour ce cas de changement sur un événement, on doit déclarer un type ChangeEvent qu'on importe
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder='Write down your country...' onChange={handleChange} />
      <p>{country}</p>
      <p>{hairColor}</p>
      <p>{gender}</p>
    </div>
  );
};
