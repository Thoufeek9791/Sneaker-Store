import items from "./items.json";
import MuiCarousel from "react-material-ui-carousel";
import { Item } from "./Item";

import React from 'react'

export const Carousel = () => {
  return (
    <MuiCarousel
    sx={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      marginBottom: "5rem",
    }}
    navButtonsProps={{
      style: {
        backgroundColor: "#fff",
        color: "#494949",
        borderRadius: "50%",
        width: 40,
        height: 40,
        margin: 0,
      },
    }}
    height={700}
  >
    {items.map((item, i) => (
      <Item key={i} item={item} />
    ))}
  </MuiCarousel>
  )
}
