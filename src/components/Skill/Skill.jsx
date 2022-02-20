import {React} from 'react';

import TechSkills from './TechSkills';
import OtherSkills from './OtherSkills';
import WorkFlow from './WorkFlow';
import { makeStyles } from '@material-ui/core';


import PageHeader from '../PageHeader';

const useStyles =makeStyles((theme) =>({
  skillContainer:{
    display:"flex",
    flexWrap:"wrap",
    marginTop:"7vh",
    width:"100%",
    justifyContent:"space-around"

  }
}))
const Skill = () => {
  const classes = useStyles() 

  
  return (
    <div>
        <PageHeader title="Skills"/>
        <div className={classes.skillContainer}>
          <TechSkills/>
          <OtherSkills/>
          <WorkFlow/>
        </div>
        
          

    </div>
    );
}
export default Skill 



