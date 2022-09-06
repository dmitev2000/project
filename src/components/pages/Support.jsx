import { SliderComponent } from "@syncfusion/ej2-react-inputs";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { useState } from "react";
import ModalHeader from "../ui/ModalHeader";
import "./Pages.css";

const Support = () => {
  const [donation, setDonation] = useState(25);
  const [slider, setSlider] = useState({});
  const [visibility, setDialogVisibility] = useState(false);
  function dialogClose() {
    setDialogVisibility(false);
  }
  function handleClick() {
    setDialogVisibility(true);
  }
  function onOverlayClick() {
    setDialogVisibility(false);
  }
  const change_handler = () => {
    setDonation(slider.value);
  };
  return (
    <div className="container pb-5 pt-5 support">
      <h1>Support our work</h1>
      <h3 className="text-center">
        <lord-icon
          src="https://cdn.lordicon.com/hcowevpv.json"
          trigger="loop"
          delay="2000"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        Donate here
      </h3>
      <SliderComponent
        type="MinRange"
        min={0}
        max={50}
        value={donation}
        showButtons={true}
        ref={(slider) => {
          setSlider(slider);
        }}
        change={change_handler}
        limits={{ enabled: true, minStart: 2, minEnd: 50 }}
        tooltip={{
          placement: "After",
          isVisible: true,
          showOn: "Always",
          format: "C2",
        }}
        ticks={{
          placement: "After",
          format: "C2",
          largeStep: 10,
          smallStep: 5,
          showSmallTicks: true,
        }}
      />
      <div className="support">
        <button onClick={handleClick} className="btn">
          Donate
        </button>
      </div>
      <DialogComponent
        id="dialog"
        width="400px"
        target=".support"
        isModal={true}
        animationSettings={{ effect: "Zoom", duration: 400, delay: 0 }}
        visible={visibility}
        close={dialogClose}
        overlayClick={onOverlayClick}
        header={ModalHeader}
        buttons={[
          {
            buttonModel: {
              content: "Close",
              isPrimary: true,
            },
            click: () => {
              dialogClose();
            },
          },
          {
            buttonModel: {
              content: "OK",
              isPrimary: false,
            },
            click: () => {
              dialogClose();
            }
          },
        ]}
      >
        <div className="dialogContent">
          <span className="dialogText">
            {"You successfuly donated $" +
              donation +
              ". We appreciate your help!"}
          </span>
        </div>
      </DialogComponent>
    </div>
  );
};

export default Support;
