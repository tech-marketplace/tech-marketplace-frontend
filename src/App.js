import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from './pages/AuthenticationPages';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import PartnershipRequestPage from './pages/PartnershipRequestPage';
import ProfilePage from './pages/ProfilePage';
import PurchasedItemsPage from './pages/PurchasedItemsPage'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignUpPage/>} />
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/request-form' element={<PartnershipRequestPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/purchased-items' element={<PurchasedItemsPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
