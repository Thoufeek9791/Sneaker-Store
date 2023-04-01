import React from "react";
import playStore from "../../../assets/images/playstore.png";
import appStore from "../../../assets/images/appstore.png";
import { Link, Stack, Typography, Box } from "@mui/material";

export const Footer = () => {
  return (


    <Stack
      direction={{xl : "row", lg : "row", md : "row", xs : "column-reverse"}}
      
      spacing={{
        xs: 5,
        sm: 5,
        md: 30,
        lg: 20,
        xl: 30,
      }}
      px={{xl : 10, xs : 3, md : 7}}
      py={3}
      sx={{ backgroundColor: "#000" }}
      color="white"
      marginTop={5}
      alignItems="center"
      justifyContent={"space-evenly"}
      width={{xs : 400, sm : "100%", md : "100%", lg : "100%", xl : "100%"}}
    >
      <Stack spacing={5} textAlign="center">
        <Typography variant="h5" fontWeight={500} sx={{fontSize :{
          xs : 20,
          xl : 30,

        }}}>
          DOWNLOAD OUR APP
        </Typography>
        <Typography variant="body1" m={0}>
          Download App for Android and IOS mobile phone
        </Typography>
        <Box width={200} textAlign="center" display={'flex'} flexDirection={{xs : 'row', sm : "column"}}>
          <img src={playStore} alt="playstore" width={"100%"} />
          <img src={appStore} alt="AppStore" width={"92%"} />
        </Box>
      </Stack>

      <Stack spacing={5} textAlign="center">
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: 20,
              sm: 40,
              md: 60,
              lg: 80,
              xl: 100,
            },
          }}
          color={"red"}
          fontWeight={700}
        >
          SNEAKER WORLD.
        </Typography>
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-evenly"}
          width={"100"}
          height={100}
          textAlign={'center'}
        >
          <Typography variant="body1">
            GOOD QUALITY OF SOLE TOUCHES YOUR SOUL
          </Typography>
          <Typography variant="body2">
            Copyrights 2023 &copy; Thoufeek Rahuman
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={5} textAlign="center">
        <Typography variant="h5" fontWeight={500}>
          Follow Us
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent="space-around"
          height={100}
        >
          <Link
            variant="body2"
            href="https://www.instagram.com/thundrr_thoufee/"
            target={"_blank"}
            color="inherit"
            underline="none"
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
          >
            Instagram
          </Link>
          <Link
            variant="body2"
            href="https://www.youtube.com/@8bitGoldygg"
            target={"_blank"}
            color="inherit"
            underline="none"
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
          >
            Youtube
          </Link>
          <Link
            variant="body2"
            href="https://www.facebook.com/thoufeek.rahuman.777"
            target={"_blank"}
            color="inherit"
            underline="none"
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
          >
            Facebook
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};
