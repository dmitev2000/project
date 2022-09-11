import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";
import { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";

const Pyramid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setFetchData] = useState({});
  const URL =
    "https://project-d80d2-default-rtdb.europe-west1.firebasedatabase.app/pyramidChart.json";

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
    <div className="container pt-5 pb-5">
      <h1>
        Pyramid chart
        <lord-icon
          src="https://cdn.lordicon.com/yalhptlk.json"
          trigger="loop"
          delay="1000"
          colors="primary:#ff6a3d,secondary:#1a2238,tertiary:#ffffff"
          style={{ width: "80px", height: "80px" }}
        ></lord-icon>
      </h1>
      <AccumulationChartComponent id="pyramid-chart" tooltip={{ enable: true }}>
        <Inject
          services={[
            AccumulationLegend,
            PyramidSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
            PyramidSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={fetchData}
            xName="x"
            yName="y"
            type="Pyramid"
            gapRatio={0.1}
            dataLabel={{ visible: true }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
