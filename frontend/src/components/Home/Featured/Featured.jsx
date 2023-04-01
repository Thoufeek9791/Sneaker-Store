import React from 'react'
import { Product } from './Product'
import { Stack, Typography } from "@mui/material";
import OwlCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// * Owl Carousel
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  


// * dummy product
const product = {
    name: "Air Jordon",
    images: [
      {
        url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/33a1ec20-a64b-49b0-ae7a-79f2bd46c3f3/air-jordan-1-retro-high-shoes-6PHWTT.png",
      },
    ],
    price: "$500",
    _id: "Thoufeek",
  };
export const Featured = () => {
  return (
    <Stack spacing={5} px={{ xs: 3, md: 5, xl: 10 }} mb={"5rem"}>
        <Typography variant="h2">Featured</Typography>
        <OwlCarousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderButtonGroupOutside={true}
          // centerMode={true}
          focusOnSelect={true}
          partialVisbile={true}
          showDots={true}
          // customDot={<CustomDot />}
        >
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
          <Product product={product} />
        </OwlCarousel>
      </Stack>
  )
}
