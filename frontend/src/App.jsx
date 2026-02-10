import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Components/Loader.jsx';

// Lazy imports
const Dashboard = lazy(() => import("./Pages/Dashboard.jsx"));
const Transaction = lazy(() => import("./Pages/Transaction.jsx"));
const Products = lazy(() => import("./Pages/Products.jsx"));
const Customer = lazy(() => import("./Pages/Customer.jsx"));

function App() {
  return (
    <Router>
      {/* Suspense must wrap the Routes to show the Loader while pages fetch */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Redirect root "/" to Dashboard */}
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;