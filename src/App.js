import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/Contador';
import ItemListContainer from './components/catalogue/ItemListContainer';
import ItemDetailContainer from './components/catalogue/detail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryContainer from './components/category/CategoryContainer';
import ItemDetail from './components/catalogue/detail/ItemDetail';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
function App() {
  return (
    <div className="App bg-base-200">
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<CategoryContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
