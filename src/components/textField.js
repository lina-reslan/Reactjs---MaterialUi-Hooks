import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from "@mui/styles";


const BootstrapInput = styled(InputBase)(({ theme }) => ({

    ".inputField":{
        "& div":{
            width:"100!important"
        },
       
    },
    
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 28,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#FFF' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      
    },
  }));


  export default function CustomizedInputsStyled(props) {

    const useStyles = makeStyles((theme) => ({
      inputField:{
          "& >div" :{
            width:"100%!important",
            marginRight:"10px"
          },
      },

  }));
  const classes = useStyles();
    return (
      <Box
      className= {classes.inputField}
        component="form"
        noValidate
        sx={{
            marginTop:"30px",
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        <FormControl
         variant="standard"
        >
                <InputLabel shrink htmlFor="bootstrap-input">
                    {props.name}
                </InputLabel>
                <BootstrapInput 
                placeholder={props.placeholder}
                 id="bootstrap-input"
                 name={props.name}
                 onChange={props.onChange}
                  />
          </FormControl>
      
       
      </Box>
    );
  }