import { Link, useLocation } from 'react-router-dom'; // Fixed: useLocation comes from here
import { RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { AiFillFileText } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

const AdminSidebar = () => { // Fixed: Capitalized name and lowercase 'const'
  const location = useLocation(); // Fixed: Hook must be INSIDE the component

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>DASHBOARD</h5>
        <ul>
          {/* I am using your Li component here to keep it clean */}
          <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
          <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />
          <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
          <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location} />
        </ul>
      </div>
    </aside>
  );
};

// Helper Component (Removed TypeScript types for JSX compatibility)
const Li = ({ url, location, Icon, text }) => (
  <li
   
  >
    <Link to={url} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;