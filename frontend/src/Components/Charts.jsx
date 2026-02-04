import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export function Barchart({
  horizontal=false,
  data_1=[],
  data_2=[],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  label=months,
}) {
 const options = {
  responsive: true,
  indexAxis:horizontal?"y":"x",
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
 const data = {
  label,
  datasets: [
    {
      label: title_1,
      data: data_1,
      backgroundColor: bgColor_1,
    },
    {
      label: title_2,
      data: data_2,
      backgroundColor:bgColor_2,
    },
  ],
};
  return <Bar options={options} data={data} />;
}
