import "./App.css";
import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import { store } from "../../store";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main />
    </div>
  );
}

export default App;
