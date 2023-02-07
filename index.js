import App from "./App";

var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(<App />, document.getElementById("root"));


App.jsx
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Note from "./components/Note";
var React = require("react");
function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
export default App;