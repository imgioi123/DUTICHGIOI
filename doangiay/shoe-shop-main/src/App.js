import './App.css';
import { Routes, Route } from 'react-router-dom';
import ShoePage from './pages/ShoePage';
import CartPage from './pages/CartPage';
import OrderManagementPage from './pages/dashboard/OrderManagementPage';
import ProductManagementPage from './pages/dashboard/ProductManagementPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ShoePage />} />
        <Route path='/shoe' element={<ShoePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/dashboard/order-list' element={<OrderManagementPage />} />
        <Route path='/dashboard/product-list' element={<ProductManagementPage/>}/>
      </Routes>
    </>
  );
}

export default App;
