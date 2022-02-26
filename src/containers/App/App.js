import "./App.css";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";
import { store } from "../../store";

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main activeUserId={activeUserId} user={user} />
    </div>
  );
}

export default App;
