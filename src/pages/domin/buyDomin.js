import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomizedInputsStyled from "../../components/textField";
import { makeStyles } from "@mui/styles";
import {CardDomain} from "../../components/card";
import Button from '@mui/material/Button';
import SelectComponent from "../../components/selectComponent";


export const BuyDomin = (props) => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [companyName,setCompanyName] = useState("");
    const [email,setEmail] = useState("");
    const [firstAddress,setFirstAddress] = useState("");
    const [SecondAddress,setSecondAddress] = useState("");
    const [city,setCity] = useState("");
    const [zipCode,setZipCode] = useState("");
    const [state,setState] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    

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
                    onChange = {(e) => {setFirstName(e.target.value)}}
                      />
                    <CustomizedInputsStyled
                     name="Company Name"
                      placeholder="Enter Company Name"
                      onChange = {(e) => {setCompanyName(e.target.value)}}
                      />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled
                     name="Last Name" 
                     placeholder="Enter Last Name"
                     onChange = {(e) => {setLastName(e.target.value)}}
                     />
                    <CustomizedInputsStyled
                     name="Email"
                      placeholder="Enter Email"
                      onChange = {(e) => {setEmail(e.target.value)}}
                      />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputsStyled
                   name="Adress Line1"
                    placeholder="Enter Address Line1"
                    onChange = {(e) => {setFirstAddress(e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12}>
                  <CustomizedInputsStyled
                   name="Adress Line1"
                    placeholder="Enter Address Line1"
                    onChange = {(e) => {setSecondAddress(e.target.value)}}
                    />
                </Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled
                     name="City"
                      placeholder="Enter City"
                      onChange = {(e) => {setCity(e.target.value)}}
                      />
                    <CustomizedInputsStyled 
                    name="Zip Code"
                     placeholder="Enter Zip Code"
                     onChange = {(e) => {setZipCode(e.target.value)}}
                     />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                    <CustomizedInputsStyled
                     name="State" 
                     placeholder="Enter State"
                     onChange = {(e) => {setState(e.target.value)}}
                     />
                    <CustomizedInputsStyled
                     name="Phone Number"
                      placeholder="Enter Phone Number"
                      onChange = {(e) => {setPhoneNumber(e.target.value)}}
                      
                      />
                </Grid>
             
                <Grid item xs={12}>
                  {/* <CustomizedInputsStyled name="Country" placeholder="Enter Country"/> */}
                  <SelectComponent 
                  value={country} 
                  onChange = {(e) => {setCountry(e.target.value)}}

                  />
                </Grid>
                <Box className={classes.buyNow}>
                <Button 
                variant="contained"
                onClick={
                    console.log("information", [firstName,lastName,country,city,phoneNumber,zipCode,email])
                }
                >Buy Now</Button>
                </Box>
                  
                
            </Grid>
           
            <Grid item xs={4}>
                <CardDomain />
            </Grid>
           
          
            

         </Grid>

    </Container>
    );

    

}