
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header"
import {CssBaseline, makeStyles} from "@material-ui/core"
import { Route, Routes} from "react-router-dom"

const useStyles = makeStyles((theme) =>({
  mainContent:{
    paddingLeft: "17%",
    justifyContent: "center",
    marginTop: "75px",
    paddingTop: "2vh",
    width: "100%",
    backgroundColor:"#F5F5F5",
    zIndex: "-1",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]:{
      paddingLeft:"0" 
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    
    <div styles={{display:"flex"}}>  
        <Sidebar />
          <div className={classes.mainContent}>
            <Header />
            <Routes>
                <Route index element={<Dashboard/>}/>
            </Routes>
          </div>
        <CssBaseline />        
      </div>  
    
  );
}


export default App 