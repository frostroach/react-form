import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("signup")) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [location]);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container justifyContent="flex-end" sx={{ paddingRight: "3em" }}>
        <Tabs value={value} aria-label="basic tabs example">
          <Link
            to={"/"}
            onClick={() => handleChange(0)}
            style={{ textDecoration: "none" }}
          >
            <Tab label="USUÁRIOS" {...a11yProps(0)} />
          </Link>
          <Link
            to="/signup"
            onClick={() => handleChange(1)}
            style={{ textDecoration: "none" }}
          >
            <Tab label="CADASTRAR" {...a11yProps(1)} />
          </Link>
        </Tabs>
      </Grid>
    </Box>
  );
}
