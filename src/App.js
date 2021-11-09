
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import "./app.css"
import {CssBaseline, Grid} from "@material-ui/core"


function App() {
  return (
    <div> 
    
      <Sidebar />
      <Header />
      <Grid container>
        <div className="others">
          <Grid item>
              <Dashboard/>
          </Grid>
        </div>
      </Grid>
     
      <CssBaseline />
    </div>
  );
}

export default App;
