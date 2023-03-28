import React, { FC } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

const App: FC = () => {
  return (
    <div className='App'>
      <Person
        name='Sandro'
        age={18}
        email='sandro@email.com'
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default App;
