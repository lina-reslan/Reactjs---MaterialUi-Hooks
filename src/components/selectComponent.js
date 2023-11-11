import React, { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from "@mui/styles";
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const useStyles = makeStyles((theme) => ({
    selectComponent:{
        marginTop:"30px",
        "& >div" :{
          width:"100%!important",
          marginRight:"10px",
          "& .MuiInputBase-root":{
            fontSize: 16,
            borderRadius:"28px",
            marginTop: "17px",
            "& svg":{
                right:"10px"
            },
            "& .MuiSelect-select":{
                padding:"10px 12px",
                "& span":{
                    fontSize: "15px"
                }
            },
            "& .MuiOutlinedInput-notchedOutline":{
                borderColor:"#e0e3e7",
                borderWidth:"1px",
                
            },
           
          }
        }
    },
    // 'label + &': {
    //     marginTop: theme.spacing(3),
    //   },

}));
const classes = useStyles();

  return (
    <Box className={classes.selectComponent}>
      <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input">
                    Country
                </InputLabel>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>Enter Country</span>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            //   style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}