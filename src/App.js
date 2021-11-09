
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import "./app.css"
import {CssBaseline} from "@material-ui/core"


function App() {
  return (
    <div> 
    
      <Sidebar />
        <div className="others">
          <Header />
          <Dashboard/>
        </div>
      <CssBaseline />
    </div>
  );
}

export default App;
