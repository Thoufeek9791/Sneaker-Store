import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <Box width={{xs : 300, md : 400}} height={550}>
      <Link to={product._id} style={{ textDecoration: "none"}}>
        <Card >
          <CardMedia
            component={"img"}
            // height={{xs : 200, md : 400}}
            image={product.images[0].url}
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", marginRight: "0.5rem" }}
              component="span"
            >
              $1000
            </Typography>
            <Typography variant="h6" component={"span"}>
              {product.price}
            </Typography>
            <Typography variant="h5">Air Jordan</Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};
