import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Container ,Box} from "@mui/material";
import TableCell from '@mui/material/TableCell';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import MyImage from "../../assets/p1.png"







export const InvoicesTable = () => {
  const [filter, setFilter] = useState("");

    const datatableData = [
        ["#876543", "12.00$", "Running", "12 Des ,2023"],
        ["#876543", "12.00$", "Running", "12 Des ,2024"],
        ["#876543", "12.00$", "Expired", "12 Des ,2023"],
        ["#876543", "12.00$", "Running", "12 Des ,2023"],
        ["#876543", "12.00$", "Will Expire", "12 Des ,2021"],
        ["#876543", "12.00$", "Running", "12 Des ,2023"],
        
    ];


    const useStyles = makeStyles((theme) => ({
      adminTable:{
        // backgroundColor:"#DDD"
      },
      searchBar:{
        marginTop:"20px",
        padding:"0px 20px 0px 0px",
        maginTop:"20px",
        marginLeft: "auto",
        width:"350px",
        borderRadius:"28px",
        display:"flex",
        justifyContent:"end",
        alignItems:"center",
        backgroundColor: "#fff",
      
        "& .searchIcon":{
          padding:"10px",
          borderRadius:"28px",
          border:"none",
          backgroundColor: "#ddd"
        }
        
      },
        domain:{
          display: "flex",
          justifyContent : "space-between",
          marginBottom:"30px",
          "& button":{
            backgroundColor:"#4facef",
            textTransform: "capitalize",
            padding:" 0px 20px",
            borderRadius:"35px",
            color:"#fff",
            height:"45px"

          }
        },
        fullTableContainer: {
          marginBottom:"40px",
          "& .MuiToolbar-root.MuiToolbar-gutters":{
            display:"none"
          },
          "& div":{
            "& div":{
              "& table":{
                backgroundColor:"#eee",
                borderSpacing:"0px 5px",
                borderCollapse: "separate !important",
               "& .MuiTableBody-root":{
                "& .MuiTableRow-root":{
                    backgroundColor: "#fff",
                    boxShadow: "1px 1px 6px 0px #ccc",
                  
                }
               },
               "& .MuiTableHead-root":{
                "& .MuiTableRow-root":{
                  "& th":{
                    backgroundColor:"#eee"
                  }
                }
               }
              }
            }
          },
        
        
          paddingRight: 14,
          paddingLeft: 6,
          position: "relative",
          width: "100%",
        
          "& .running": {
            backgroundColor: "#c7efe7",
            borderRadius: "20px!important",
            width:"80px",
            padding: " 10px 0px !important",
            display : "flex",
            justifyContent :"center"
          },
          "& .expire":{
            backgroundColor: "#ed8c8d",
            borderRadius: "20px!important",
            width:"80px",
            padding: " 10px 0px !important",
            display : "flex",
            justifyContent :"center"

          },
          "& .willExpire":{
            backgroundColor: "#ebbba4",
            borderRadius: "20px!important",
            width:"80px",
            padding: " 10px 0px !important",
            display : "flex",
            justifyContent :"center"

          },
          "& .details":{
            display: "flex",
            alignItems: "center",
            color: "#33d434",
          },
          "& .date":{
            display: "flex",
            alignItems: "center",
            "& svg":{
              color: "blue",
              fontSize:"17px"
            }

          }
          

        },
        
      }));

      const classes = useStyles();

      const columns = [
        {
         name: "ID",
         label: "ID",
         options: {
          filter: true,
          sort: true,
          customHeadRender: ({index, ...column}) => {
            return (
                <TableCell key={index}>
                    {column.label} <IconButton onClick={() => {
                    showDocumentStatusInfo()
                }}>
                  <ArrowDropDownIcon/>
                  </IconButton>
                </TableCell>
            )
        }
         }
        },
        {
         name: "Domin Price",
         label: "Domin Price",
         options: {
          filter: true,
          sort: false,
          customHeadRender: ({index, ...column}) => {
            return (
                <TableCell key={index}>
                    {column.label} <IconButton onClick={() => {
                    showDocumentStatusInfo()
                }}>
                  <ArrowDropDownIcon/>
                  </IconButton>
                </TableCell>
            )
        }
         }
        },
        {
         name: "Status",
         label: "Status",
         options: {
          filter: true,
          sort: false,
          customHeadRender: ({index, ...column}) => {
            return (
                <TableCell key={index}>
                    {column.label} <IconButton onClick={() => {
                    showDocumentStatusInfo()
                }}>
                  <ArrowDropDownIcon/>
                  </IconButton>
                </TableCell>
            )
        },
          customBodyRenderLite: (index) => {
            const state = datatableData[index][2];
            if (state === "Running") {
              return (
                <div className="running">
                
                  <span>{state}</span>
                </div>
              );
            } else {
              if (state === "Expired"){
                return (
                  <div className="expire">
                    <span>{state}</span>
                  </div>
                );
              } else {
                if (state === "Will Expire"){
                  return (
                    <div className="willExpire">
                      <span>{state}</span>
                    </div>
                  );
                }
                
              }
             
            }
          }
         }
        },
        {
         name: "Created At",
         label: "Created At",
         options: {
          filter: true,
          sort: false,
          customHeadRender: ({index, ...column}) => {
            return (
                <TableCell key={index}>
                    {column.label} <IconButton onClick={() => {
                    showDocumentStatusInfo()
                }}>
                  <ArrowDropDownIcon/>
                  </IconButton>
                </TableCell>
            )
        },
          customBodyRenderLite : (index) => {
            const date = datatableData[index][3];
            return (
              <div className="date">
                <CalendarTodayIcon />
                <span>{date}</span>
              </div>
            );
          }
          
          
         }
        },
        {
          name: "Action",
          label: "Action",
          options: {
           filter: true,
           sort: false,
           customBodyRenderLite : (index) =>{
            return (
              <div className="details">
                <Visibility className="eyeColor" />
                <span>show details</span>
             </div>
            );
            
            

           }
          }
         },
       ];
       function showDocumentStatusInfo(){
        console.log('column info is printed');
      }

    return (
        <Container className={classes.adminTable}>
            
            <Box className={classes.searchBar}>
              <form className="form-inline">
                <input
                  className="searchIcon form-control form-control-sm ml-3 w-75"
                  // aria-label="Search"
                  type="text"
                  id="myInput"
                  onChange={(e) => setFilter(e.target.value.toLowerCase())}
                  placeholder="Search..."
                />
              </form>
              <SearchIcon />
             
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Avatar alt="Remy Sharp" src={MyImage} />
            </Box>
            <h6>Dashboard / domains</h6>
            <div className= {classes.domain}>
              <h1>Domain</h1>
              <Button>
                <AddIcon />
                Buy Domain</Button>
            </div>
           
            <Grid container spacing={4} >
                <Grid item xs={12} className={classes.fullTableContainer}>
                    <MUIDataTable
                        // title="Domains"
                        data={datatableData}
                        columns={columns}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}