import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/header";
import Catch from "./components/Catch/catch";
import './components/Buttons/button.css'
import "./components/Buttons/button";


function App() {
    const {onToggleButton,tg} = useTelegram();


    useEffect(() => {
        tg.ready()
    }, []);

  return (
      <div className="App">
          <Header/>
          <button onClick={onToggleButton}>toggle</button>
          <Catch/>
      </div>
  );
}

export default App;
