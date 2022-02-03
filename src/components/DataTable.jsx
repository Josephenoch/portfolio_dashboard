import {React} from 'react';
import {makeStyles, Box} from "@material-ui/core"


const useStyles = makeStyles((theme) =>({
    rootContainer:{
        width:"94%",
        
        
    },
    dataContainer:{
        height: "10vh",
        width: "100%",
        backgroundColor: 'white',
        marginTop:"20px",
        '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
    }
}))

const DataTable = () => {
    const styles = useStyles()
    return (
        <div className={styles.rootContainer}>
            <Box className={styles.dataContainer} boxShadow={1}>

            </Box>  
            <Box className={styles.dataContainer} boxShadow={1}>

            </Box>    
            <Box className={styles.dataContainer} boxShadow={1}>

            </Box>     
            
            <Box className={styles.dataContainer} boxShadow={1}>

            </Box>     
            <Box className={styles.dataContainer} boxShadow={1}>

            </Box>    
            
            <Box className={styles.dataContainer}>

            </Box>      
        </div>
    );
}

export default DataTable
