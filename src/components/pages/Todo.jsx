import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import "./Pages.css";

const Todo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState({});
  const URL =
    "https://project-d80d2-default-rtdb.europe-west1.firebasedatabase.app/dataSource.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setFetchData({ dataSource: data });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div className="container pt-5 pb-5 spinner-wrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container pt-5 pb-5">
      <h1 className="mb-5">
        ToDo
        <lord-icon
          src="https://cdn.lordicon.com/hrqqslfe.json"
          trigger="loop"
          delay="1000"
          colors="primary:#ff6a3d,secondary:#1a2238"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <ScheduleComponent currentView="Month" eventSettings={fetchData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default Todo;
