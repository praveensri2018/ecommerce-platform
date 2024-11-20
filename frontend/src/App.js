import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import AdminDashboard from './components/AdminDashboard';
import AdminCustomerList from './components/AdminCustomerList';
import CustomerProfile from './components/CustomerProfile';
import ProductCard from './components/ProductCard';
import Filter from './components/Filter';
import Payment from './components/Payment';
import OrderHistory from './components/OrderHistory';
import CustomerRegister from './components/CustomerRegister';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/customers" element={<AdminCustomerList />} />
                <Route path="/profile" element={<CustomerProfile />} />
                <Route path="/products" element={<ProductCard />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/register" element={<CustomerRegister />} />
            </Routes>
        </Router>
    );
}

export default App;
