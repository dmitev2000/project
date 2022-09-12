import "./Pages.css";
import Button from "../ui/Button";
import Subscription from "../ui/Subscription";
import {
  ProgressBarComponent,
  ProgressBarAnnotationsDirective,
  ProgressBarAnnotationDirective,
  Inject,
  ProgressAnnotation,
} from "@syncfusion/ej2-react-progressbar";
import { QRCodeGeneratorComponent } from "@syncfusion/ej2-react-barcode-generator";
import { useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(40);
  const content =
    '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>40%</span></div>';

  function improve_progress() {
    if (progress + 10 <= 100) {
      setProgress(progress + 10);
    }
  }

  function worsen_progress() {
    if (progress - 10 >= 0) {
      setProgress(progress - 10);
    }
  }

  return (
    <div className="home-page">
      <div className="jumbo">
        <h2 className="display-6">Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde
          debitis ducimus quos, molestiae alias voluptas nisi perferendis
          soluta? Dignissimos voluptates animi, voluptatem odit similique a iure
          commodi error quibusdam!
        </p>
        <Button path="see-more" text="See more" />
        <Button path="support-us" text="Support us" />
      </div>

      <div className="subs">
        <Subscription type="Basic" price="Free" />
        <Subscription type="Standard" price={10} />
        <Subscription type="Enterprise" price={25} />
      </div>

      <div className="my-progress">
        <div>
          <h3>Your progress</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            deserunt quisquam aspernatur obcaecati consequuntur dignissimos.
          </p>
          <button onClick={improve_progress}>
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <button onClick={worsen_progress}>
            <i className="bi bi-hand-thumbs-down-fill"></i>
          </button>
        </div>

        <div>
          <ProgressBarComponent
            type="Circular"
            innerRadius="190%"
            height="160px"
            width="200px"
            trackThickness={80}
            cornerRadius={"Round"}
            trackColor="#ff6a3d"
            progressColor="#1a2238"
            value={progress}
            animation={{ enable: true, duration: 2000, delay: 0 }}
          >
            <Inject services={[ProgressAnnotation]} />
            <ProgressBarAnnotationsDirective>
              <ProgressBarAnnotationDirective
                content={content}
              ></ProgressBarAnnotationDirective>
            </ProgressBarAnnotationsDirective>
          </ProgressBarComponent>
        </div>
      </div>

      <div className="barcode-gen">
        <QRCodeGeneratorComponent
          id="barcode"
          width={"200px"}
          height={"150px"}
          value="SCAN ME"
        ></QRCodeGeneratorComponent>
      </div>

      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
          alt="img1"
        />
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img2"
        />
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img3"
        />
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="img4"
        />
        <img
          src="https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          alt="img5"
        />
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="img6"
        />
      </div>
    </div>
  );
};

export default Home;
