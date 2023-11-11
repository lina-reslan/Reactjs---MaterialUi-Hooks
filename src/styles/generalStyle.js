import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  map: {
    width: "100%!important",
    height: "300px!important",
    position: "relative!important",
    "& >div": {
      margin: "0px!important",
    },
  },
  gridSelect: {
    "& .MuiFormControl-root": {
      "& .MuiFormHelperText-root": {
        color: "#d32f2f!important",
        fontSize: "14px!important",
        fontFamily: "poppins!important",
        marginLeft: "0px!important",
        marginTop: "4px!important",
        marginRight: "0px!important",
      },
    },
  },
  tags: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    backgroundColor: "#ffffff",
    direction: theme.direction == "rtl" ? "rtl!important" : "ltr!important",
    marginTop: "0px",

    minHeight: "41px",
    height: "auto",
    width: "100%",
    border: "0.5px solid #989898!important",
    borderRadius: "8px",
    fontWeight: "300",
    paddingLeft: "10px",

    "& .MuiInputBase-root": {
      paddingLeft:
        theme.direction == "ltr" ? "auto!important" : "4px!important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
    },
    "& div": {
      marginTop: "0px!important",
      direction: theme.direction == "rtl" ? "rtl!important" : "ltr!important",
      left: theme.direction == "ltr" ? "unset!important" : "unset!important",
      right: theme.direction == "ltr" ? "4px!important" : "4px!important",
    },
    "& div:before": {
      borderBottom: "none!important",
      transition: "none!important",
    },
    "& div:after": {
      borderBottom: "none!important",
      transition: "none!important",
    },
    "& .MuiChip-root": {
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
      height: "26px",
      width: "auto",
      borderRadius: "5px",
      border: "1px solid #146A99",
      background: "#FFFFFF",
      borderRadius: "5px",
      marginTop: "7px!important",
    },
    "& .MuiChip-deleteIcon": {
      position: "absolute",
      color: "#FFFFFF",
      marginLeft: "-7px!important",
      marginRight: "0px!important",
      width: "17px",
      height: "17px",
      backgroundColor: " #146A99",
      borderRadius: "9px",
      left: "0px!important",
      top: "-4px!important",
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "-7px",
      display: theme.direction == "ltr" ? "flex!important" : "none!important",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    },
    "&:focus": {
      border: "0.5px solid #1f627f!important",
    },
    "& .MuiInputBase-input": {
      padding: "11px",
    },
  },
  tagsAlignRight: {
    "& .MuiInputBase-input": {
      textAlign: "right!important",
    },
  },
  accordion: {
    border: "1px solid #ccc",
    padding: "0px 8px",
  },
  textArea: { height: "100%!important" },
  secondHeader: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "18px!important" : "16px!important",
    fontWeight: "600!important",
    lineHeight: "24px",
    color: "#666666!important",
    width: "65%",
  },
  noVideosIcon: {
    opacity: 0.1,
    marginLeft: "30%!important",
    height: "70%",
    color: "#8a8a8a",
    width: "50%",
  },
  width92: {
    // width: "90%",
    overflowX: "scroll",
  },
  phoneNumber: {
    direction: theme.direction === "rtl" ? "rtl" : "inherit",
    position: "relative",
    "& .PhoneInputCountry .PhoneInputCountryIcon": {
      boxShadow: "none!important",
    },
    "& .PhoneInputCountry .PhoneInputCountryIcon .PhoneInputCountryIconImg": {
      height: "17px",
      width: "30px",
      color: "#47799C",
    },
    "& .focus-visible": {
      background: "none",
      border: "0.5px solid #1f627f!important",
      outline: "none",
    },
    "& input": {
      border: "0.5px solid #989898",
      borderRadius: "8px",
      background: "none!important",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      height: "43px",
      width: "100%",
      boxShadow: "none",
    },
    "& :-webkit-autofill": {
      transition: "background-color 5000s ease-in-out 0s",
      boxShadow: "none",
    },
  },
  errorValidation: {
    color: "#d32f2f!important",
    fontSize: "14px!important",
    fontFamily: "poppins!important",
    marginLeft: "0px!important",
    marginTop: "4px!important",
    marginRight: "0px!important",
  },
  root: {
    "& .donutchart": {
      width: "55%",
      overflow: "inherit",
    },

    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    height: "100%",
    "& .MuiCollapse-entered": {
      paddingLeft: 5,
    },
    "& .MuiTypography-body2": {
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .sv_main .sv_body": {
      borderTop: "2px solid #2D97D1",
    },
    "& .sa-toolbar__button": { display: "none" },
    "& .sv-action": {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      marginTop: "10px",
    },
    "& .sv_main .sv_container .sv_body .sv_nav .sv_start_btn, .sv_main .sv_container .sv_body .sv_nav .sv_next_btn, .sv_main .sv_container .sv_body .sv_nav .sv_complete_btn":
      {
        backgroundColor: "#2D97D1",
        color: "#FFFFFF!important",
        background: "#146A99!important",
        cursor: "pointer!important",
        fontFamily:
          theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
        fontSize:
          theme.direction == "rtl" ? "16px!important" : "15px!important",
        height: "40px!important",
        minWidth: "130px!important",
        fontWeight: "700!important",
        lineHeight: "24px!important",
        textAlign: "center!important",
        boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)!important",
        borderRadius: "8px!important",
        "&:hover": {
          color: "#146A99!important",
          backgroundColor: "#FFFFFF!important",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)!important",
        },
      },
    "& .sa-question-layouted": {
      width: "100%",
    },
    "& .sa-table__action-container .sa-table__drag-button use": {
      fill: "none",
    },
  },
  green: {
    color: "green",
  },
  codeError: {
    color: "#f44336",
  },
  red: {
    color: "red",
  },
  errorMessage: {
    color: "red",
    top: 80,
    width: "90%",
    display: "flex",
    position: "absolute",
    //zIndex: 1,
    justifyContent: "flex-end",
    "& .MuiSnackbar-root": {
      top: "40px!important",
      color: "red",

      // width: "100px",
      display: "flex",
      position: "fixed",
    },
    "& .MuiSnackbarContent-root": {
      marginRight: 5,
      marginTop: 58,
      borderRadius: 9,
      backgroundColor: "rgb(255, 0, 0,0.9)",
      minWidth: 365,
    },
  },
  noPaddingTop: {
    paddingTop: "0px!important",
  },

  rootGrid: {
    "& ::-webkit-calendar-picker-indicator ": {
      opacity: "0.2!important",
      color: "#ddd!important",

      width: "20px!important",
      height: "20px!important",
    },
  },
  gray: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    color: "#666666!important",
  },
  spinner: {
    display: "flex",
    top: 0,
    bottom: 0,
    zIndex: 5500,
    backdropFilter: "blur(2px)",
    right: 0,
    backgroundColor: "#ffffff1a",
    left: 0,
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    float: "right",
  },
  noPaddingLeft: {
    paddingLeft: "0px!important",
  },
  marginBottom20: {
    marginBottom: "20px",
  },
  marginBottom40: {
    marginBottom: "40px",
  },
  marginBottom10: {
    marginBottom: "10px",
  },
  marginBottom30: {
    marginBottom: "30px",
  },
  marginBottom40: {
    marginBottom: "40px",
  },
  userIconBox: {
    height: "80%",
    color: "#666666",
    width: "62%",
  },
  returnIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  userIcon: {
    marginRight: "0px!important",
    height: "100%",
    width: "100%",
    marginLeft: "0px!important",
  },
  form: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    width: "100%",
    "& .MuiInputLabel-asterisk": { color: "red" },
    "& .MuiGrid-grid-lg-1": {
      maxWidth: "15%",
      flexBasis: "15%",
      // [theme.breakpoints.down("md")]: {
      //   maxWidth: "24%!important",
      //   flexBasis: "24%!important",
      // },overflow
    },
  },
  label: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "15px!important",
    lineHeight: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: "10px",
    color: "#666666",
    width: "100%",
    overflowWrap: "anywhere",
  },
  blueLabel: {
    color: "#146A99!important",
    "& .MuiFormLabel-asterisk": {
      color: "red",
    },
  },
  wordCutting: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    transition: "transform 0.4s ease",
  },
  statistics: {
    borderRadius: 20,
    marginRight: "20px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    maxWidth: "45%!important",
    // [theme.breakpoints.down(1240)]: {
    //   maxWidth: "60%!important",
    // },
    "& .MuiTypography-root": {
      display: "flex",
      justifyContent: "center",
      color: "#146A99",
      borderBottom: "1px solid #ccc",
      paddingTop: "15px",
      paddingBottom: "15px",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    },
    "& canvas": {
      color: "#666666",
    },
  },
  header: {
    color: "#146A99",
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    paddingTop: 15,
    paddingBottom: 15,
  },
  visitorsIcon: {
    fontSize: 50,
    color: "#ccc",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  dropZone: {
    "& .MuiDropzoneArea-root": {
      width: "100%",
      minHeight: "45px",
      height: "auto",
      border: "0.5px solid #989898",
      borderRadius: "8px",
      zIndex: 1,
      "& .MuiDropzoneArea-textContainer": {
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        marginTop: "7px",
      },
      "& .MuiDropzoneArea-text": {
        marginTop: "0px",
        marginBottom: "0px",
        fontSize:
          theme.direction == "rtl" ? "16px!important" : "14px!important",
        fontWeight: "400",
        color: "#9C9C9C",
      },
      "& .MuiDropzoneArea-icon": {
        right: "6px",
        height: "26px",
        color: "#9C9C9C",
        position: "absolute",
        marginRight: "-10px",
      },
      "& .MuiGrid-spacing-xs-8 > .MuiGrid-item": {
        padding: "10px",
        "& .MuiDropzonePreviewList-removeButton": {
          backgroundColor: "white",
          color: "rgba(144,8,8,1)",
        },
        "&:hover": {
          "& .MuiDropzonePreviewList-removeButton": {
            right: "14px",
          },
          "& .MuiSvgIcon-root": {
            marginRight: "0px!important",
            marginLeft: "0px!important",
          },
        },
        "& .MuiDropzonePreviewList-image": {
          height: "70px",
          width: "110px",
          backgroundColor: "#1f627f",
        },
      },
      "& .MuiGrid-spacing-xs-8": {
        width: "100%",
        margin: "0px",
      },
      "&:focus": {
        outline: "none!important",
        border: "0.5px solid #1f627f!important",
      },
    },
    "& .MuiTypography-root": {
      color: "#9C9C9C",
      marginTop: 0,
      fontWeight: "400!important",
      marginBottom: 0,
      padding: "6px",
      overflowWrap: "anywhere",
    },
  },

  input: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    borderRadius: "10px",
    background: "#FFFFFF",
    height: "41px",
    width: "100%",
    "& .MuiInputBase-root": {
      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#989898",
      },
      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1f627f!important",
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
      color: "#666666",
    },
    "& .MuiInputBase-root .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      padding: "11px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-formControl": {
      top: "-12%",
    },
    "& .MuiOutlinedInput-root": {
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
      backgroundColor: "#ffffff",
      height: "98%",
      width: "100%",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: "0px",
      marginRight: "0px",
      display: "flex",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px" : "14px",
      width: "130%",
      textAlign:
        theme.direction == "ltr" ? "left!important" : "right!important",
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: "0px!important",
      "& .MuiInputAdornment-root .MuiIconButton-root .MuiSvgIcon-root": {
        margin: "0px!important",
      },
    },
    "&:focus": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "0.5px solid #1f627f!important",
      },
    },
    "& .MuiOutlinedInput-root .MuiInputBase-input": {
      textAlign: "left",
    },
  },
  inputAutoSize: {
    borderColor: "#989898",
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    borderRadius: "10px",
    background: "#FFFFFF",
    minHeight: "41px!important",
    padding: "4px 10px",
    maxWidth: "100%",
    minWidth: "80%",
  },
  alignRightAuto: {
    textAlign: "right!important",
  },
  alignRight: {
    "& .MuiOutlinedInput-root .MuiInputBase-input": {
      textAlign: "right!important",
    },
  },
  tab: {
    position: "fixed",
    top: "86px",
    backgroundColor: "#ffffff",
    color: "#989898",
    zIndex: 1000,
    fontSize: "20px",
    borderRadius: "8px",

    "& .MuiTabs-scroller": {
      overflow: "hidden",
      marginBottom: 0,
      marginLeft: 10,
      marginRight: 10,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#ffffff!important",
    },
    "& .MuiTab-root": {
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "22px!important" : "20px!important",
      textTransform: "none",
      fontWeight: "500",
      marginLeft: "30px!important",

      // [theme.breakpoints.up("md")]: {
      //   minWidth: 120,
      // },
    },
    "& .Mui-selected": {
      color: "#146A99!important",
      fontWeight: "bold",
    },
    "& .MuiTouchRipple-root": {
      width: "0px",
    },
  },
  paddingTop10: {
    paddingTop: "10px",
  },
  marginLeft8: {
    marginLeft: "-8px!important",
  },
  marginTop10: {
    marginTop: "10px",
  },
  marginBottom20: {
    marginBottom: "20px",
    "& .MuiFormControl-root": {
      display: "flex!important",
    },
  },
  marginBottom30: {
    marginBottom: "30px",
  },
  marginBottom40: {
    marginBottom: "40px!important",
  },
  marginBottom60: {
    marginBottom: "60px!important",
  },
  marginLeft5: {
    marginLeft: "5%!important",
  },
  rowDirection: {
    flexDirection: "row",
  },
  dateForm: {
    "& .MuiFormControl-root": {
      display: "flex!important",
      width: "100%!important",
      "& .MuiInputBase-root": {
        "& .MuiInputBase-input": {
          fontFamily:
            theme.direction == "ltr"
              ? "poppins!important"
              : "tajawal!important",
          fontSize:
            theme.direction == "rtl" ? "16px!important" : "14px!important",
        },
        "& .MuiInputAdornment-root": {
          "& .MuiSvgIcon-root": {
            color: "#ccc!important",
          },
        },

        "& .MuiOutlinedInput-notchedOutline": {
          fontFamily:
            theme.direction == "ltr"
              ? "poppins!important"
              : "tajawal!important",
          fontSize:
            theme.direction == "rtl" ? "16px!important" : "14px!important",
          //backgroundColor: "#ffffff",
          paddingLeft: "7px",
          width: "100%!important",
          border: "0.5px solid #989898!important",
          height: "50px",
          borderRadius: "8px",
          paddingBottom: "6px!important",
        },
      },
    },
  },
  tabContainer: {
    flexDirection: "column",
    display: "flex",
    position: "relative",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "24px",
    paddingTop: "16px",
  },
  selectPermission: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    background: "#ffffff",
    height: "45px!important",

    width: "400px!important",
    display: "flex!important",
    marginBottom: "8px!important",
    "& .MuiSelect-icon": {
      color: "#989898",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898!important",
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .MuiFormControl-root .MuiInputBase-root": {
      minHeight: 41,
      paddingBottom: 0,
      height: "auto",
      paddingTop: "1px!important",
      "& .MuiChip-root": {
        fontFamily:
          theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
        fontSize:
          theme.direction == "rtl" ? "16px!important" : "14px!important",
        backgroundColor: "#ffffff",
        border: "0.5px solid #989898",
        borderRadius: "8px",
        fontWeight: "300",
        position: "relative",
        "& .MuiChip-deleteIcon": {
          position: "absolute",
          color: "#FFFFFF",
          marginLeft: "-7px!important",
          marginRight: "0px!important",
          width: "17px",
          height: "17px",
          backgroundColor: " #146A99",
          borderRadius: "9px",
          left: "1px!important",
          top: "-4px!important",
        },
      },
    },
  },
  select: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    background: "#ffffff",
    height: "41px",
    width: "100%",
    //marginRight: "20px!important",
    "& .MuiSelect-icon": {
      color: "#989898",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898!important",
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .MuiFormControl-root .MuiInputBase-root": {
      minHeight: 41,
      paddingBottom: 0,
      height: "auto",
      paddingTop: "1px!important",
      "& .MuiChip-root": {
        fontFamily:
          theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
        fontSize:
          theme.direction == "rtl" ? "16px!important" : "14px!important",
        backgroundColor: "#ffffff",
        border: "0.5px solid #989898",
        borderRadius: "8px",
        fontWeight: "300",
        position: "relative",
        "& .MuiChip-deleteIcon": {
          position: "absolute",
          color: "#FFFFFF",
          marginLeft: "-7px!important",
          marginRight: "0px!important",
          width: "17px",
          height: "17px",
          backgroundColor: " #146A99",
          borderRadius: "9px",
          left: "1px!important",
          top: "-4px!important",
        },
      },
    },
    "& .MuiSvgIcon-root": {
      right: "7px!important",
      left: "auto",
      // left: theme?.direction === "rtl" ? "auto" : "7px",
      // right: theme?.direction === "ltr" ? "auto" : "7px",
    },
  },
  arabicSelect: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    background: "#ffffff",
    height: "41px",
    width: "100%",
    "& .MuiSelect-icon": {
      color: "#989898",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898!important",
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .MuiSelect-root": {
      textAlign: "left!important",
    },
  },
  radioBtn: {
    "& .MuiTypography-body1": {
      marginLeft: "10px",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      color: "#666666",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    },
    "& .MuiFormControlLabel-root": {
      marginRight: "31px",
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#146A99",
    },
    "& .MuiFormControlLabel-root .MuiRadio-colorSecondary": {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
    },
  },
  checkbox: {
    color: "#146A99!important",
    backgroundColor: "inherit!important",
    marginLeft: "15px!important",
    "& .MuiTypography-root": {
      color: "#666666",

      fontSize: "14px",
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: "-21px",
      marginRight: "40px",
    },
    "& .MuiFormControlLabel-root .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiTypography-body1": {
      fontWeight: "500!important",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  switch: {
    "& .MuiSwitch-switchBase": {
      color: "#989898",
    },

    "& .MuiSwitch-track": {
      backgroundColor: "#E5E5E5",
      border: "1px solid #c4c4c4",
    },
    "& .Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track ": {
      backgroundColor: "#E5E5E5",
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      opacity: "1",
      border: "1px solid C4C4C4",
    },
  },
  flex: {
    display: "flex",
  },
  tinymceContainer: {
    "& .ck.ck-list-styles-dropdown>.ck-dropdown__panel>.ck-toolbar>.ck-toolbar__items .ck-button":
      {
        width: 40,
        height: 28,
      },
    "& .ck.ck-list-styles-dropdown>.ck-dropdown__panel>.ck-toolbar>.ck-toolbar__items":
      {
        rowGap: 0,
        columnGap: 0,
        padding: 0,
      },
    "& .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne, .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se":
      {
        borderRadius: "5px!important",
        minHeight: 58,
      },
    "& .ck.ck-button, a.ck.ck-button": {
      border: 0,
    },
    "& .ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar": {
      backgroundColor: "#F0F8FF",
      borderRadius: "10px",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      minHeight: 58,
    },
    "& .ck.ck-toolbar .ck.ck-toolbar__separator": {
      height: 55,
      marginTop: 0,
      marginBottom: 0,
    },
    "& .ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners":
      {
        borderRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
  },
  editorRightAlignment: {
    "& .ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners":
      {
        textAlign: "right!important",
      },
  },
  hidden: { display: "none" },
  relative: {
    position: "relative",
  },
  link: {
    width: "160px",
    display: "flex",
    position: "absolute",
    textDecoration: "none",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 40,
    paddingLeft: 40,
    color: "#FFFFFF!important",
    cursor: "pointer!important",
    background: "#146A99!important",
    boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)!important",
    textAlign: "center!important",
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "15px!important",
    fontWeight: "700!important",
    lineHeight: "24px!important",
    borderRadius: "8px!important",
    "&:hover": {
      color: "#146A99!important",
      backgroundColor: "#FFFFFF!important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)!important",
    },
  },
  codeContainer: {
    paddingTop: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  downloadIcon: {
    color: "rgb(31 98 127)",
    width: 30,
    height: 30,
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "white",
    "& .MuiIconButton-label": {
      marginLeft: "9px",
    },
  },
  codeBox: {
    minHeight: 115,
    minWidth: 160,
    position: "relative",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: "8px 27px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& a": {
      position: "relative",
      top: 5,
      right: "-60px",
      background: "#c4ddeb!important",
      backdropFilter: "blur(2px)",
    },
  },
  btn: {
    textTransform: "capitalize",
    cursor: "pointer!important",
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    height: "40px!important",
    minWidth: "130px!important",
    fontWeight: "600!important",
    lineHeight: "24px!important",
    textAlign: "center!important",
    boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)!important",
    borderRadius: "8px!important",
  },
  blueBtn: {
    color: "#FFFFFF!important",
    background: "#146A99!important",
    "&:hover": {
      color: "#146A99!important",
      backgroundColor: "#FFFFFF!important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)!important",
    },
  },
  whiteBtn: {
    background: "#FFFFFF!important",
    color: "#989898!important",
    border: "0.5px solid #146A99!important",
    "&:hover": {
      color: "#FFFFFF!important",
      backgroundColor: "#146A99!important",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)!important",
    },
  },
  errormessage: {
    marginTop: 45,
    position: "absolute",
    color: "red",
    marginRight: "-23px",
  },
  closerToInput: {
    "& .MuiSvgIcon-root": {
      fontSize: "32px",
    },
    "& .MuiIconButton-root": {
      position: "absolute",
      marginTop: 25,
      marginLeft: 15,
      backgroundColor: "white",
      color: "rgba(144,8,8,1)",
    },
  },
  HelperTextIcon: {
    color: "#2d97d1",
    marginTop: 10,
  },
  helperText: {
    width: "115%",
    marginTop: 5,
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "14px!important",
    fontFamily: "poppins!important",
    marginLeft: 6,
    fontWeight: 400,
    marginRight: 0,
  },
  datePickerComment: {
    "& .MuiInputBase-root": {
      width: "100%!important",
      border: "0.5px solid #989898!important",
      //height: "41px",
      borderRadius: "8px!important",
    },
  },

  dateTimePicker: {
    "& ::-webkit-calendar-picker-indicator ": {
      opacity: "0.2!important",
      //color: "#ddd!important",
      marginRight: "-6px!important",
      width: "22px!important",
      height: "22px!important",
    },

    fontFamily: "poppins!important",
    fontSize: "16px!important",
    backgroundColor: "#ffffff",
    paddingLeft: "7px",
    width: "100%!important",
    border: "0.5px solid #989898!important",
    height: "41px",

    borderRadius: "8px!important",
    paddingTop: "2px",

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },

    "&:focus": {
      border: "0.5px solid #1f627f!important",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none!important",
    },

    "& .MuiInputBase-root": {
      "& .MuiInputBase-input": {
        //padding: "4px 6px!important",
        marginTop: "-7px!important",
        color: "#989898",
        fontFamily: "poppins!important",
        fontSize: "14px!important",
        "& ::placeholder": {
          color: "#000",
        },
      },
    },
    //input[type="date"]
  },

  datePicker: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    backgroundColor: "#ffffff",
    paddingLeft: "7px",
    width: "100%!important",
    border: "0.5px solid #989898!important",
    height: "41px",
    borderRadius: "8px!important",
    paddingTop: "2px",

    "& .MuiFormHelperText-root": {
      marginLeft: "-7px",
      marginTop: "7px",
      display: "flex",
      marginRight: "0px",
      fontFamily:
        theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
      fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
      width: "115%",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none!important",
    },
    "&:focus": {
      border: "0.5px solid #1f627f!important",
    },
    "& .MuiInputBase-root .MuiInputAdornment-root .MuiSvgIcon-root": {
      margin: "0px!important",
      color: "#989898",
    },
  },
  errorHeader: {
    color: "#666666",
    fontSize: "40px",
    fontWeight: "500",
  },
  siteInformation: {
    paddingInline: "0px!important",
  },
  survey: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    "& .sv_main .sv-action__content": {
      backgroundColor: "red!important",
    },
    "& .svd_container .btn-primary": {
      backgroundColor: "#1f627f",
    },
    "& .svd_container .svd-tab.active > .svd-tab-text": {
      color: "#1f627f",
    },
    "& .svd_container .sjs-cb-container:hover input:checked ~ .checkmark": {
      backgroundColor: "#1f627f",
    },
    "& .svd_container .sjs-cb-container input:checked ~ .checkmark": {
      backgroundColor: "#1f627f",
    },
    "& .svd_container .svd_custom_select:before": {
      backgroundColor: "#1f627f",
    },
    "& .svd_container .select2-container .select2-selection--single .select2-selection__arrow, .svd_container .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow":
      {
        background: "none",
        backgroundColor: "#1f627f",
      },
    "& .svd_container .svd-main-color": {
      color: "#1f627f",
    },
    "& .svd_container .svd-primary-icon .svd-svg-icon": {
      fill: "#1f627f",
    },
    "& .svd_container a:focus, .svd_container div:focus, .svd_container span:focus, .svd_container select:focus, .svd_container tr:focus, .svd_container input[type='checkbox']:focus + span.checkmark":
      {
        outlineColor: "#1f627f",
      },
    "& .svd_container .svd-secondary-icon .svd-svg-icon": {
      fill: "#1f627f",
    },
    "& .sv_main.sv_default_css .sv_body": {
      borderColor: "#1f627f",
    },
    "& .svd_container .svd_questions_editor .svd_question:hover": {
      borderColor: "#1f627f",
    },
    "& .svda-add-custom-item": {
      color: "#1f627f",
    },
    "& .sjs-cb-switch input:checked + .sjs-cb-switch_control": {
      backgroundColor: "#1f627f",
      borderColor: "#1f627f",
    },
    "& .sjs-cb-switch input:checked + .sjs-cb-switch_control .sjs-cb-switch__button":
      {
        borderColor: "#1f627f",
      },
    "& .sv_main input[type='button'], .sv_main button": {
      backgroundColor: "#1f627f",
    },
    "& .sv_main.sv_default_css .sv_select_wrapper::before": {
      backgroundColor: "#1f627f",
    },
    "& .svd-survey-placeholder-root .svd-survey-placeholder .svd-empty-message-container .svd-empty-message":
      {
        color: "#1f627f",
      },
    "& .svd_container .icon-gearactive .svd-svg-icon, .svd_container .icon-dotsactive .svd-svg-icon":
      {
        fill: "#1f627f",
      },
  },

  surveyBtn: {
    display: "flex",
    flexDirection: "row",
    marginTop: "-85px",
  },
  surveyHeader: {
    color: "#666666!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontWeight: "600!important",
  },
  autoComplete: {
    fontFamily:
      theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
    fontSize: theme.direction == "rtl" ? "16px!important" : "14px!important",
    background: "#ffffff",

    width: "100%",
    //marginRight: "20px!important",
    "& .MuiSelect-icon": {
      color: "#989898",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898!important",
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "& .MuiFormControl-root .MuiInputBase-root": {
      minHeight: 50,
      paddingBottom: 0,
      height: "auto",
      paddingTop: "1px!important",
      paddingLeft:
        theme.direction == "ltr" ? "auto!important" : "4px!important",
      "& .MuiAutocomplete-endAdornment": {
        position:
          theme.direction == "ltr" ? "absolute!important" : "unset!important",
      },
      "& .MuiChip-root": {
        fontFamily:
          theme.direction == "ltr" ? "poppins!important" : "tajawal!important",
        fontSize:
          theme.direction == "rtl" ? "16px!important" : "14px!important",
        backgroundColor: "#ffffff",
        border: "0.5px solid #989898",
        borderRadius: "8px",
        fontWeight: "300",
        position: "relative",
        "& .MuiChip-deleteIcon": {
          position: "absolute",
          color: "#FFFFFF",
          marginLeft: "-7px!important",
          marginRight: "0px!important",
          width: "17px",
          height: "17px",
          backgroundColor: " #146A99",
          borderRadius: "9px",
          left: "1px!important",
          top: "-4px!important",
        },
      },
    },
  },
}));
