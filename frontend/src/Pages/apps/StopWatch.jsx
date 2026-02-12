import { useState,useEffect } from "react";
import AdminSidebar from "../../Components/Adminsidebar";
const formatTime = (timeInSecond) => {
  const hours = String(Math.floor(timeInSecond / 3600));
  const minute = String(Math.floor((timeInSecond % 3600) / 60));
  const seconds = String(timeInSecond % 60);
  return `${hours.padStart(2, "0")}:${minute.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};
function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);
  const toggleHandler = () => {
    setIsRunning((prev) => !prev);
  };
  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={toggleHandler}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StopWatch;
