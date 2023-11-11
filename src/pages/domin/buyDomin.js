import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomizedInputsStyled from "../../components/textField";
import { makeStyles } from "@mui/styles";
import {CardDomain} from "../../components/card";
import Button from '@mui/material/Button';
import SelectComponent from "../../components/selectComponent";


export const BuyDomin = (props) => {

    const [firstName,setFirstName] = useState("");

    const useStyles = makeStyles((theme) => ({
        buyDomin:{
            padding: "30px 0"
        },
        buyNow:{
            margin:"30px auto",
            "& button":{
                borderRadius: "28px",
                backgroundColor:"#1cad1c!important"
            }
        }

    }));
    const classes = useStyles();

    const handelChangFirstName =(e)=>{
        setFirstName(e.target.value);
        console.log("first name",firstName);

    }

    return(
        <Container maxWidth="xl">
        <Grid container className={classes.buyDomin}>
            <Grid item xs={12}>
                <h1>Buy Domin</h1>
                <Box>This information is requireed in order to reach you in case of probleems with your registration</Box>
            </Grid>
            <Grid container item xs={8}>
                
                <Grid item xs={5}>
                    <CustomizedInputsStyled 
                    name="firstName" 
                    placeholder="Enter First Name"
                    onChange = {(e) => handelChangFirstName(e)}
                      />
                    <CustomizedInputsStyled name="Company Name" placeholder="Enter Company Name"/>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled name="Last Name" placeholder="Enter Last Name"/>
                    <CustomizedInputsStyled name="Email" placeholder="Enter Email"/>
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputsStyled name="Adress Line1" placeholder="Enter Address Line1"/>
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputsStyled name="Adress Line1" placeholder="Enter Address Line1"/>
                </Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled name="City" placeholder="Enter City"/>
                    <CustomizedInputsStyled name="Zip Code" placeholder="Enter Zip Code"/>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled name="State" placeholder="Enter State"/>
                    <CustomizedInputsStyled name="Phone Number" placeholder="Enter Phone Number"/>
                </Grid>
             
                <Grid item xs={12}>
                  {/* <CustomizedInputsStyled name="Country" placeholder="Enter Country"/> */}
                  <SelectComponent />
                </Grid>
                <Box className={classes.buyNow}>
                <Button variant="contained">Buy Now</Button>
                </Box>
                  
                
            </Grid>
           
            <Grid item xs={4}>
                <CardDomain />
            </Grid>
           
          
            

         </Grid>

    </Container>
    );

    

}