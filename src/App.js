
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Breadcrumb from './components/Breadcrumb';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Store</h1>
        <Breadcrumb/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
