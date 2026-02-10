import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import AdminSideBar from "../Components/Adminsidebar";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from '../assets/data.json'
import { BarChart, DoughnutChart } from "../Components/Charts";
import {BiMaleFemale} from 'react-icons/bi'
import Table from '../Components/DashboardTable'
function Dashboard() {
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for Data,Users,Docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>
   <section className="graph-container">
  <div className="revenue-chart">
    <h2>Revenue & Transactions</h2>

    <BarChart
      labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
      data_1={[300, 144, 433, 655, 237, 755]}
      data_2={[200, 244, 833, 855, 437, 655]}
      title_1="Revenue"
      title_2="Transaction"
      bgColor_1="rgb(0,115,255)"
      bgColor_2="rgb(53,162,235,0.8)"
    />
  </div>

  <div className="dashboard-categories">
    <h2>Inventory</h2>
    <div>
      {data.categories.map((i) => (
        <CategoryItem
          key={i.heading}
          heading={i.heading}
          value={i.value}
          color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
        />
      ))}
    </div>
  </div>
</section>
<section className='transaction-container'>
  <div className="gender-chart">
    <h2>Gender Ratio</h2>
    <p>
      <DoughnutChart labels={["Female","Male"]}
      data={[12,22]}
      backgroundColor={["hsl(340,82%,56%)","rgba(53,162,235,0.8"]}
      />
      <BiMaleFemale/>

    </p>
  </div>
  <Table data={data.transaction}/>

</section>

      </main>
    </div>
  );
}
const WidgetItem = ({ heading, value, percent, color, amount = false }) => {
  return (
    <article className="widget">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>

        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> +{percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>

      <div className="widget-circle">
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

const CategoryItem = ({ color, value, heading }) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>

      <div className="category-bar">
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
            height: "0.5rem",
          }}
        />
      </div>

      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;
