import "./Pages.css";
import {
  MapsComponent,
  LayerDirective,
  LayersDirective,
  Inject,
  MapsTooltip,
  MarkersDirective,
  MarkerDirective,
  Marker,
} from "@syncfusion/ej2-react-maps";
import { world_map } from "../syncfusion/world_map";
import company from "../syncfusion/company.jpg";

const About = () => {
  return (
    <div className="container pb-5 pt-5">
      <h1 className="mb-5">About</h1>
      <div className="about-us">
        <div>
          <h3>Company name</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, facilis? Laudantium excepturi consectetur, voluptas
            sapiente dolores omnis, aliquam quis, ad fugiat possimus iusto quasi
            hic. Fugit ullam consequuntur, adipisci labore voluptate modi vel
            sequi quidem, quia odio atque blanditiis rem?
          </p>
        </div>
        <div>
          <img src={company} alt="" />
        </div>
      </div>
      <h3>
        Our locations
        <lord-icon
          src="https://cdn.lordicon.com/oaflahpk.json"
          trigger="loop"
          delay="2000"
          colors="primary:#ff6a3d"
          state="hover-jump-spin"
          style={{width:"50px", height:"50px"}}
        ></lord-icon>
      </h3>
      <MapsComponent id="my-map">
        <Inject services={[MapsTooltip, Marker]} />
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            tooltipSettings={{ visible: true, valuePath: "name" }}
            shapePropertyPath="name"
            shapeDataPath="Country"
            shapeSettings={{
              colorValuePath: "Color",
              fill: "#1A2238",
            }}
          >
            <MarkersDirective>
              <MarkerDirective
                visible={true}
                height={20}
                width={20}
                animationDuration={0}
                dataSource={[
                  { latitude: 42.00517, longitude: 21.40804 },
                  { latitude: -33.8688, longitude: 151.2093 },
                  { latitude: 41.8781, longitude: -87.6298 },
                  { latitude: 55.7558, longitude: 37.6173 },
                  { latitude: -34.6037, longitude: -58.3816 },
                ]}
              ></MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
};

export default About;
