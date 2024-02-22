import React from 'react'
import { Paper, IconButton } from "@mui/material";

const SearchBar = () => {

    const inputStyle = { 
        width: "300px", 
        height: "28px", 
        padding: "10px", 
        fontSize: "16px", 
        border : 'none',
        borderRadius: "15px", 
        outline: "none", 
        color:'#063A55'
    }

  return (
    <Paper
    component="form"
    sx={{
      borderRadius: 20,
      border: "1px solid e3e3e3",
      pl: 2,
      mr: { sm: 5 },
      justifyContent:'space-between'
    }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      style={inputStyle}
    />
    <IconButton
      type="submit"
      sx={{
        p: "10px",
        color: "red",
      }}
    >
      
    </IconButton>
  </Paper>
);
};


export default SearchBar
