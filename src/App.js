
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/Header"
import "./app.css"
import {makeStyles, CssBaseline} from "@material-ui/core"


function App() {
  return (
    <div>
      
      <div className="container">
         <Sidebar/>
         <div className="others">
           <Header/>
         </div>
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;
