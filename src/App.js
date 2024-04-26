import './App.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        tg.ready()
    }, []);

  return (
    <div className="App">
      hello
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
