
import Sidebar from "./components/Sidebar"
import WebFont from 'webfontloader';
import Dashboard from "./components/Dashboard/Dashboard"
import Experience from "./components/Experience/Experience"
import Header from "./components/Header"
import {CssBaseline, makeStyles, createTheme, ThemeProvider} from "@material-ui/core"
import { Route, Routes} from "react-router-dom"

WebFont.load({  
  google: {
    families: ['Playfair Display:300,400,700', 'serif']
  }
});

const LightTheme = createTheme({
  typography: {
    fontFamily: [
      'Playfair Display'
    ].join(','),
  },
});
const useStyles = makeStyles((theme) =>({
  mainContent:{
    fontFamily: "'Playfair Display', serif",
    paddingLeft: "17%",
    justifyContent: "center",
    marginTop: "65px",
    paddingTop: "2vh",
    width: "100%",
    backgroundColor:"#F5F5F5",
    zIndex: "-1",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]:{
      paddingLeft:"0",
      marginTop:"82px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div styles={{display:"flex"}}> 
      <ThemeProvider theme={LightTheme}> 
        <Sidebar />
          <div className={classes.mainContent}>
            <Header />   
            <Routes>
                <Route index element={<Dashboard/>}/>
                <Route path="Experience" element={<Experience/>}/>
            </Routes>
          </div>
        <CssBaseline /> 
      </ThemeProvider>       
      </div>  
    
  );
}


export default App 