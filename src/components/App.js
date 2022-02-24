import "../App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import { store } from "../store";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={Object.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
