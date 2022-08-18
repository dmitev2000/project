import {
  Category,
  ChartComponent,
  DataLabel,
  LineSeries,
  Legend,
  Tooltip,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

const Line = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState({});
  const URL =
    "https://project-d80d2-default-rtdb.europe-west1.firebasedatabase.app/lineChart.json";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
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
    <div className="container pt-5 pb-5">
      <h1 className="mb-5">Line chart</h1>
      <ChartComponent
        id="charts"
        primaryXAxis={{ valueType: "Category" }}
        // eslint-disable-next-line no-template-curly-in-string
        primaryYAxis={{ labelFormat: "${value}K" }}
        tooltip={{ enable: true, shared: false }}
        legendSettings={{ visible: true }}
        title="Sales Analysis"
        palettes={["#FF6A3D", "#1A2238"]}
      >
        <Inject
          services={[
            ColumnSeries,
            Tooltip,
            LineSeries,
            Category,
            Legend,
            DataLabel,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={fetchData}
            xName="month"
            yName="sales"
            name="Sales"
            marker={{ dataLabel: { visible: true } }}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
      ;
    </div>
  );
};

export default Line;
