
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
import { mainUser, fakeUsers } from "./fakeData";


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
const App = () => {
  const classes = useStyles()
  const [activeMessage, setActiveMessage] = useState()
  const [darkTheme, setDarkTheme] = useState(JSON.parse(window.localStorage.getItem("theme")) || false)
  const [user, setUser] = useState(mainUser)
  return (
    <div styles={{display:"flex"}}> 
      <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}> 
        <CssBaseline />
        <Paper>
          <Sidebar 
            user={user}
          />
          <Header 
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}

          />    
          <Paper className={classes.mainContent}>
            
            <Routes>
                <Route 
                  index
                  element={
                    <Dashboard 
                        user={mainUser} 
                        messages={fakeUsers}
                        setActiveMessage={setActiveMessage} 
                    />
                  }
                />
                <Route 
                  path="Experience" 
                  element={
                    <Experience/>
                  }/>
                <Route 
                  path="Education" 
                  element={
                    <Education/>
                  }/>
                <Route 
                  path="Skill" 
                  element={
                    <SKill/>
                  }/>
                <Route 
                  path="Analytics" 
                  element={
                    <Analytics/>
                  }/>
                <Route 
                  path="Settings" 
                  element={
                    <Settings 
                      user={user} 
                      setUser={setUser}
                    />
                  }/>  
                <Route 
                  path="Messages" 
                  element={
                    <Messages 
                      messages={fakeUsers}
                      activeMessage={activeMessage}
                      setActiveMessage={setActiveMessage}
                    />
                  }/>  
            </Routes>
          </Paper>
          <CssBaseline /> 
        </Paper>
      </ThemeProvider>       
      
      </div>  
    
  );
}


export default App 