
import Sidebar from "./components/Sidebar"
import WebFont from 'webfontloader';
import {Dashboard} from "./components/Dashboard/Dashboard"
import Experience from "./components/Experience/Experience"
import Education from "./components/Education/Education";
import SKill from "./components/Skill/Skill";
import Header from "./components/Header"
import {CssBaseline, makeStyles, createTheme, ThemeProvider, responsiveFontSizes, Paper} from "@material-ui/core"
import { Route, Routes} from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Analytics} from "./components/Analytics/Analytics";
import { Settings } from "./components/Settings/Settings";

library.add(fas, fab,)

WebFont.load({  
  google: {
    families: ['Playfair Display:300,400,700', 'serif']
  }
});


let LightTheme = createTheme({
  // palette:{
  //   type:"dark",
  // },
  typography: {
    
    fontFamily: [
      'Playfair Display'
    ].join(','),
  },
});

LightTheme = responsiveFontSizes(LightTheme)

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
      marginTop:"55px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div styles={{display:"flex"}}> 
      <ThemeProvider theme={LightTheme}> 
        <Paper>
          <Sidebar />
          <div className={classes.mainContent}>
            <Header />   
            <Routes>
                <Route path="portfolio_dashboard" element={<Dashboard/>}/>
                <Route path="Experience" element={<Experience/>}/>
                <Route path="Education" element={<Education/>}/>
                <Route path="Skill" element={<SKill/>}/>
                <Route path="Analytics" element={<Analytics/>}/>
                <Route path="Settings" element={<Settings/>}/>  
            </Routes>
          </div>
          <CssBaseline /> 
        </Paper>
      </ThemeProvider>       
      
      </div>  
    
  );
}


export default App 