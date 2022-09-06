import video from "../syncfusion/laptop.mp4";
import "./Pages.css";

const More = () => {
  return (
    <div className="container pb-5 pt-5 more">
      <h1>More</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem
        est pariatur voluptatem iste minus facere eius quod soluta repellat
        quasi adipisci temporibus maiores voluptas necessitatibus itaque
        reprehenderit deserunt perferendis vel sapiente odio, harum nisi illo
        dicta. Quibusdam, sunt suscipit?
      </p>
      <div className="video-wrapper">
        <video width="70%" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag!
        </video>
      </div>
    </div>
  );
};

export default More;
