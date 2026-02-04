import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;