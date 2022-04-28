import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import ItemListContainer from './components/catalogue/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contador/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
