import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationDataLabel,
  AccumulationLegend,
} from "@syncfusion/ej2-react-charts";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

const Pie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState({});
  const URL =
    "https://project-d80d2-default-rtdb.europe-west1.firebasedatabase.app/pieChart.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setFetchData(data);
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
    <div className="container pb-5 pt-5">
      <h1 className="mb-5">
        Pie chart
        <lord-icon
          src="https://cdn.lordicon.com/ufhkbmmj.json"
          trigger="loop"
          delay="1000"
          colors="primary:#f24c00,secondary:#1a2238"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <AccumulationChartComponent
        id="pie-chart"
        legendSettings={{ visible: true }}
        enableSmartLabels={true}
      >
        <Inject
          services={[PieSeries, AccumulationDataLabel, AccumulationLegend]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={fetchData}
            xName="x"
            yName="y"
            type="Pie"
            pointColorMapping="fill"
            dataLabel={{ visible: true }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
