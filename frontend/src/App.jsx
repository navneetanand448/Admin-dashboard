import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./Components/Loader.jsx";

// Lazy imports
const Dashboard = lazy(() => import("./Pages/Dashboard.jsx"));
const Transaction = lazy(() => import("./Pages/Transaction.jsx"));
const Products = lazy(() => import("./Pages/Products.jsx"));
const Customer = lazy(() => import("./Pages/Customer.jsx"));
const NewProduct = lazy(() => import("./Pages/management/NewProduct.jsx"));
const ProductManagement = lazy(
  () => import("./Pages/management/ProductManagement.jsx"),
);
const BarCharts = lazy(() => import("./Pages/charts/BarCharts.jsx"));
const PieCharts = lazy(() => import("./Pages/charts/PieCharts.jsx"));
const LineCharts = lazy(() => import("./Pages/charts/LineCharts.jsx"));
const TransactionManagement = lazy(
  () => import("./Pages/management/TransactionManagement.jsx"),
);
const Toss = lazy(() => import("./Pages/apps/Toss.jsx"));
const Coupons = lazy(() => import("./Pages/apps/Coupons.jsx"));
const StopWatch = lazy(() => import("./Pages/apps/StopWatch.jsx"));
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

          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupons />} />
          <Route path="/admin/app/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
