import { FC } from "react";

const SimpleExemple: FC = () => {
  // FC : C'est le type Function Component
  const name: string = "Pedro";
  const age: number = 19;
  const isMarried: boolean = false;

  const getName = (name: string): number => {
    // ():type définit le type de ce que la fonction va retourner, si elle ne retourne rien, on peut mettre le type "void"
    if (name === "Pedro") {
      return 20;
    } else {
      return 0;
    }
  };
  return (
    <div>
      {name}
      {age}
      {isMarried}
    </div>
  );
};

export default SimpleExemple;
