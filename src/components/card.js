import React, { useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

export const CardDomain = ()=> {

    const useStyles = makeStyles((theme) => ({
        cardDomain:{
            backgroundColor:"#f0e9e9",
            padding:"30px",
            margin:"30px",
            "& h1":{
                padding: "20px 0px",
               borderBottom: "3px dashed #DDD"
            },
            "&  div":{
                display:"flex",
                
            },
          
        },
        trid:{
            justifyContent:"space-between",
            "& span:last-child":{
                color:"#1cad1c"
            }
        },
        privacy:{
            alignItems: "center",
            "& .taskIcon":{
                color:"#1cad1c",
                marginRight:"8px"
            }
        }
      
  
    }));
    const classes = useStyles();
    return(
        <Box className={classes.cardDomain}>
            <h1>Domain Details</h1>
            <Box className={classes.trid}>
                <span>tridmark.net</span>
                <span>15.40 USD</span>
            </Box>
            <Box className={classes.privacy}>
                <TaskAltIcon  className="taskIcon"/>
                <h6>Privacy protection is on</h6>
            </Box>
            <Box className={classes.privacy}>
                <TaskAltIcon  className="taskIcon"/>
                <h6>Auto-renew is on</h6>
            </Box>
            <Box>
            <Typography variant="body1">
                This is domain will be auto renewed around Augest 1 every year . you will automatically be billed when the renewal occurs.
            </Typography>
            </Box>
        </Box>

    );
}