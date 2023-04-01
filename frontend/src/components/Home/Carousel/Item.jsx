import React from "react";
import { Paper, Button } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <Paper sx={{height : "100%"}}>
      <img
        src={item.image}
        alt=""
        style={{
          width : "100%",
          height : "100%",
          objectFit: "cover",
        }}
      />
      <h2>{item.title}</h2>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#000", color: "#fff" }}
      >
        Check it out!
      </Button>
    </Paper>
  );
};
