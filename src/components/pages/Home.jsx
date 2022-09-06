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

      <div className="images">
        <img src="https://source.unsplash.com/random/1000x1000" alt="random" />
        <img src="https://source.unsplash.com/random/1000x1001" alt="random" />
        <img src="https://source.unsplash.com/random/1001x1000" alt="random" />
        <img src="https://source.unsplash.com/random/1001x1001" alt="random" />
        <img src="https://source.unsplash.com/random/1000x1002" alt="random" />
        <img src="https://source.unsplash.com/random/1001x1002" alt="random" />
      </div>
    </div>
  );
};

export default Home;
