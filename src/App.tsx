import { Router } from "react-router-dom";
import history from "./_helpers/history";
import Routes from "./routes";
import "./App.css";

const App = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default App;