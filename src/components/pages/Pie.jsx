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
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchData(data);
        setIsLoading(false);
      });
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
      <h1 className="mb-5">Pie chart</h1>
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
