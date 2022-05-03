import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import ItemListContainer from './components/catalogue/ItemListContainer';
import ItemDetailContainer from './components/catalogue/detail/ItemDetailContainer';

function App() {
  return (
    <div className="App bg-base-200">
      <NavBar/>
      <Contador/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
