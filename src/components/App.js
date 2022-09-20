import './../assets/App.css';
import Header from "./Header.js"
import Canciones from "./Canciones.js"
import Generos from "./Generos.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Canciones/>
      <Generos/>
    </div>
  );
}

export default App;
