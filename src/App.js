import logo from "./logo.svg";
import "./App.css";
import Img2 from "./check21.jpg"
import "./style.css"
function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="titlered">Your name here</h1>

      <img src="./check22.jpg" />
<br/>
      <img src={Img2} />
      <br/>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
