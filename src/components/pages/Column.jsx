import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

const Column = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState({});
  const URL =
    "https://project-d80d2-default-rtdb.europe-west1.firebasedatabase.app/columnChart.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((respose) => respose.json())
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
        Column chart
        <lord-icon
          src="https://cdn.lordicon.com/oegrrprk.json"
          trigger="loop"
          delay="1000"
          colors="primary:#1a2238,secondary:#ff6a3d,tertiary:#ffc738,quaternary:#4bb3fd"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <ChartComponent
        id="column-chart"
        primaryXAxis={{ valueType: "Category", title: "Countries" }}
        primaryYAxis={{
          minimum: 0,
          maximum: 80,
          interval: 20,
          title: "Medals",
        }}
        title="Olympic Medals"
        palettes={["#FF6A3D", "#D3D3D3", "#1A2238"]}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={fetchData}
            xName="country"
            yName="gold"
            name="Gold"
            legendShape="Circle"
            type="Column"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={fetchData}
            xName="country"
            yName="silver"
            type="Column"
            name="Silver"
            legendShape="Rectangle"
          ></SeriesDirective>
          <SeriesDirective
            dataSource={fetchData}
            xName="country"
            yName="bronze"
            name="Bronze"
            legendShape="Rectangle"
            type="Column"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Column;
