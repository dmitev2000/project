import "./UI.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function ScrollTopButton() {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("scroll-btn").style.display = "block";
    } else {
      document.getElementById("scroll-btn").style.display = "none";
    }
  };

  function onclick_handler() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <TooltipComponent content="Top" target="#scroll-btn">
      <div id="scroll-btn" onClick={onclick_handler}>
        <i className="bi bi-chevron-up"></i>
      </div>
    </TooltipComponent>
  );
}

export default ScrollTopButton;
