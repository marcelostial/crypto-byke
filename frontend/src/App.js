import Download from "./components/Download/Download";
import "./styles/globals.scss";

function App() {
  return (
    <div className="App">
      <Download variant="primary" icon="apple" />
      <Download variant="secondary" icon="google" />
    </div>
  );
}

export default App;
