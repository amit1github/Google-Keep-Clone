import React from "react";
import { Typography } from "@mui/material";
// import {  } from "@mui/icons-material";

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <>
      
        <footer
          style={{
            marginTop: "40px",
            padding: "10px 0",
            textAlign: "center",
            backgroundColor: "grey",
          }}
        >
          <Typography variant="h6">Copyright {year}</Typography>
        </footer>
    </>
  );
};

export default FooterBottom;
