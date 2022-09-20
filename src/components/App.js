import './../assets/App.css';
import Header from "./Header.js"
import Canciones from "./Canciones.js"
import Generos from "./Generos.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AppBody">
        <Canciones/>
        <Generos/>
      </div>
    </div>
  );
}

export default App;
