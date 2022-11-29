import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { Home } from "./views/Home/Home";
import logo from "./assets/logo.svg";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard>
        <Header >
          <img src={logo} alt="logo" />
          <h1>TH-Servers</h1>
        </Header>
        <Home />
      </Dashboard>
    </div>
  );
}

export default App;
