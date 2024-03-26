import "./App.css";
import Button from "@mui/material/Button";
// document.querySelector(".test").style.fontSize

function App() {
  const bae = "test입니다.~~~!";
  const baecss = { color: "blue", fontSize: "2em" };
  function onmyClick() {
    console.log("test");
  }

  return (
    <div className="App">
      <h3 style={baecss}>{bae}</h3>
      <button className="btn" onClick={onmyClick}>
        test
      </button>
      <div className="btn btn-primary">button</div>
      <div className="container">
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
