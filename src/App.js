
import Sidebar from "./components/Sidebar"
import WebFont from 'webfontloader';
import {Dashboard} from "./components/Dashboard/Dashboard"
import Experience from "./components/Experience/Experience"
import Education from "./components/Education/Education";
import SKill from "./components/Skill/Skill";
import Header from "./components/Header"
import {CssBaseline, makeStyles, createTheme, ThemeProvider, responsiveFontSizes,  Paper} from "@material-ui/core"
import { Route, Routes} from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Analytics} from "./components/Analytics/Analytics";
import { Settings } from "./components/Settings/Settings";
import { Messages } from "./components/Messages/Messages";
import { useState } from "react";

library.add(fas, fab,)

WebFont.load({  
  google: {
    families: ['Playfair Display:300,400,700', 'serif']
  }
});


let LightTheme = createTheme({
  
  palette:{
    primary:{
      main:"rgb(47,199,245)",
      light:"rgb(111,227,255)",
      appBar:"#fff",
      sideBar:"#fff",
    },
  },
  typography: {
    
    fontFamily: [
      'Playfair Display'
    ].join(','),
  },
});

let DarkTheme = createTheme({
  palette:{
    type:"dark",
    primary:{
      main:"rgb(47,199,245)",
      light:"rgb(111,227,255)",
      appBar:"rgba(60,60,60,1)",
      sideBar:"rgba(60,60,60,1)",
    }
  },
  typography: {
    
    fontFamily: [
      'Playfair Display'
    ].join(','),
  },
  
})

LightTheme = responsiveFontSizes(LightTheme)
DarkTheme = responsiveFontSizes(DarkTheme)

const useStyles = makeStyles((theme) =>({
  mainContent:{
    fontFamily: "'Playfair Display', serif",
    paddingLeft: "17%",
    justifyContent: "center",
    marginTop: "65px",
    paddingTop: "2vh",
    width: "100%",
    backgroundColor:theme.palette.action.hover,
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
const createData = (name, email, message, timeStamp ) => {
  return { id,name, email, message, timeStamp};
}

const rows = [
  createData(1,'Jameson Isreal',"jamesonisreal@webfolio.com", "Hi I am Jameson! I've got interesting news", "3:20AM" ),
  createData(2,'Jane Doe', "janedoe@webfolio.com", "Hello this is a greeting", "9:50AM"),
  createData(3,'Theresa Mayweather',"theresamayweather@webfolio.com", "Welcome to Webfolio" , "10:50AM"),
  createData(4,'Lupita Nyongo',"lupitanyongo@webfolio.com", "12 Years a slave was amazing!", "3/19/2020" ),
  createData(5,'Don Corleone', "thedon@webfolio.com", "The Great Gatsby was a blast", "Yesterday"),
  createData(6,'Joey Zasa', "joeyzas@webfolio.com", "The Great Gatsby was a blast", "Yesterday"),
  createData(7,'Micheal Corleone', "michealcorleone@webfolio.com", "The Great Gatsby was a blast", "Yesterday"),
  createData(8,'Sean Connery', "jamesbond@webfolio.com", "A martini. Shaken, not stirred.", "Yesterday"),
];
function App() {
  const classes = useStyles()
  const [darkTheme, setDarkTheme] = useState(JSON.parse(window.localStorage.getItem("theme")) || false)
  const [location, setLocation] = useState(window.location.pathname)
  return (
    <div styles={{display:"flex"}}> 
      <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}> 
        <CssBaseline />
        <Paper>
          <Sidebar 
            location={location}
            setLocation={setLocation}
          />
          <Header 
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            location={location}
            setLocation={setLocation}
          />    
          <Paper className={classes.mainContent}>
            
            <Routes>
                <Route path="portfolio_dashboard" element={<Dashboard rows={rows}/>}/>
                <Route path="Experience" element={<Experience/>}/>
                <Route path="Education" element={<Education/>}/>
                <Route path="Skill" element={<SKill/>}/>
                <Route path="Analytics" element={<Analytics/>}/>
                <Route path="Settings" element={<Settings/>}/>  
                <Route path="Messages" element={<Messages rows={rows}/>}/>  
            </Routes>
          </Paper>
          <CssBaseline /> 
        </Paper>
      </ThemeProvider>       
      
      </div>  
    
  );
}


export default App 